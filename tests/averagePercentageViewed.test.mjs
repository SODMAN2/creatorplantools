import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateAveragePercentageViewed, describeDuration, formatPercentage, parseDuration } from '../lib/averagePercentageViewed.mjs';

test('required examples and matched-unit boundary cases', () => {
  for (const [video, average, expected] of [
    ['10:00', '5:00', 50], ['8:00', '2:00', 25], ['0:30', '0:45', 150],
    ['1:00', '0:30', 50], ['20:00', '0:00', 0], ['1:30:00', '0:22:30', 25],
    ['0:01', '0:01', 100], ['0:00.5', '0:00.75', 150], ['90:00', '22:30', 25],
    [' 10:00 ', ' 05:00 ', 50], ['0:00.001', '9999:59:59.999', 3599999999900],
  ]) {
    const result = calculateAveragePercentageViewed(video, average);
    assert.equal(result.percentage, expected, `${video} / ${average}`);
    assert.deepEqual(result.errors, { videoLength: null, averageViewDuration: null });
  }
});

test('invalid and missing values cannot produce a percentage in either field', () => {
  for (const value of ['', ' ', '-5:00', '5:-01', '5:60', '1:60:00', '1:00:60', '1:2', '1:2:03', '1::03', '1:00:00:00', '5 minutes', '5', '1.5', 'NaN', 'Infinity', '1e3:00', '1:00.0001', '0:00.', '1:00junk', '10000:00:00', '999999999999999999999999:00']) {
    assert.equal(calculateAveragePercentageViewed(value, '5:00').percentage, null, `video: ${value}`);
    assert.equal(calculateAveragePercentageViewed('10:00', value).percentage, null, `average: ${value}`);
  }
  assert.equal(calculateAveragePercentageViewed('0:00', '0:00').percentage, null);
  assert.equal(calculateAveragePercentageViewed('00:00:00.000', '5:00').percentage, null);
  assert.equal(parseDuration(null).milliseconds, null);
});

test('rounding keeps large, small, zero and over-100 results meaningful', () => {
  assert.equal(formatPercentage(50), '50%');
  assert.equal(formatPercentage(100 / 3), '33.3%');
  assert.equal(formatPercentage(150), '150%');
  assert.equal(formatPercentage(0), '0%');
  assert.equal(formatPercentage(0.0001), '<0.1%');
  assert.equal(formatPercentage(Infinity), null);
  assert.equal(formatPercentage(NaN), null);
  assert.equal(formatPercentage(-1), null);
  assert.equal(describeDuration(300000), '5 minutes');
  assert.equal(describeDuration(5400000), '1 hour 30 minutes');
  assert.equal(describeDuration(500), '0.5 seconds');
  assert.equal(describeDuration(0), '0 seconds');
});
