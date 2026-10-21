// Keep duration arithmetic in integer milliseconds, including subsecond videos.
const MAX_DURATION_MS = (9999 * 3600 + 59 * 60 + 59) * 1000 + 999;

export function parseDuration(value) {
  if (typeof value !== 'string' || !value.trim()) {
    return { milliseconds: null, error: 'Enter a duration.' };
  }

  const input = value.trim();
  const match = /^(\d+):([0-5]\d)(?:\.([0-9]{1,3}))?$/.exec(input);
  const hoursMatch = /^(\d+):([0-5]\d):([0-5]\d)(?:\.([0-9]{1,3}))?$/.exec(input);
  if (!match && !hoursMatch) {
    return { milliseconds: null, error: 'Use mm:ss (5:00) or hh:mm:ss (1:05:00), with seconds and minutes after hours from 00 to 59. You can add up to three decimal places to seconds.' };
  }

  const hours = hoursMatch ? Number(hoursMatch[1]) : 0;
  const minutes = Number(hoursMatch ? hoursMatch[2] : match[1]);
  const seconds = Number(hoursMatch ? hoursMatch[3] : match[2]);
  const fraction = (hoursMatch ? hoursMatch[4] : match[3]) || '';
  const milliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000 + Number(fraction.padEnd(3, '0'));
  if (!Number.isSafeInteger(milliseconds) || milliseconds > MAX_DURATION_MS) {
    return { milliseconds: null, error: 'Enter a duration no longer than 9999:59:59.999.' };
  }
  return { milliseconds, error: null };
}

export function calculateAveragePercentageViewed(videoLength, averageViewDuration) {
  const video = parseDuration(videoLength);
  const average = parseDuration(averageViewDuration);
  const errors = {
    videoLength: video.error || (video.milliseconds === 0 ? 'Video length must be greater than zero.' : null),
    averageViewDuration: average.error,
  };
  if (errors.videoLength || errors.averageViewDuration) return { percentage: null, errors };
  return {
    percentage: average.milliseconds / video.milliseconds * 100,
    videoMilliseconds: video.milliseconds,
    averageMilliseconds: average.milliseconds,
    errors,
  };
}

export function formatPercentage(value) {
  if (!Number.isFinite(value) || value < 0) return null;
  if (value > 0 && value < 0.1) return '<0.1%';
  return `${new Intl.NumberFormat('en-GB', { maximumFractionDigits: 1 }).format(value)}%`;
}

export function describeDuration(milliseconds) {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor(milliseconds % 3600000 / 60000);
  const seconds = milliseconds % 60000 / 1000;
  const parts = [];
  if (hours) parts.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
  if (minutes) parts.push(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`);
  if (seconds || !parts.length) parts.push(`${seconds} ${seconds === 1 ? 'second' : 'seconds'}`);
  return parts.join(' ');
}
