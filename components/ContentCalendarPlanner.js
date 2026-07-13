'use client';

import { useMemo, useState } from 'react';

const platforms = ['YouTube', 'TikTok', 'YouTube Shorts', 'Instagram Reels', 'Instagram', 'Faceless channel', 'Other'];
const contentTypes = ['Long-form video', 'Short-form video', 'Reel', 'Carousel', 'Image post', 'Story', 'Live stream', 'Other'];
const statuses = ['Idea', 'Planned', 'In progress', 'Ready', 'Scheduled', 'Published'];
const emptyForm = { topic: '', platform: 'YouTube', contentType: 'Long-form video', plannedDate: '', status: 'Idea', notes: '' };

function countBy(items, key) {
  return items.reduce((counts, item) => ({ ...counts, [item[key]]: (counts[item[key]] || 0) + 1 }), {});
}

function formatDate(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(year, month - 1, day));
}

export default function ContentCalendarPlanner() {
  const [form, setForm] = useState(emptyForm);
  const [items, setItems] = useState([]);
  const summary = useMemo(() => ({ platforms: countBy(items, 'platform'), statuses: countBy(items, 'status') }), [items]);

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function addItem(event) {
    event.preventDefault();
    const topic = form.topic.trim();
    if (!topic || !form.plannedDate) return;
    setItems((current) => [...current, { ...form, topic, notes: form.notes.trim(), id: `${Date.now()}-${Math.random()}` }]);
    setForm((current) => ({ ...emptyForm, platform: current.platform, contentType: current.contentType }));
  }

  function removeItem(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  return <div className="calendar-planner">
    <form onSubmit={addItem}>
      <div className="calendar-fields">
        <div className="field calendar-topic"><label htmlFor="calendar-topic">Content idea or topic</label><input id="calendar-topic" name="topic" value={form.topic} onChange={updateField} placeholder="e.g. Five simple lighting tips" required /></div>
        <div className="field"><label htmlFor="calendar-platform">Platform</label><select id="calendar-platform" name="platform" value={form.platform} onChange={updateField}>{platforms.map((platform) => <option key={platform}>{platform}</option>)}</select></div>
        <div className="field"><label htmlFor="calendar-type">Content type</label><select id="calendar-type" name="contentType" value={form.contentType} onChange={updateField}>{contentTypes.map((type) => <option key={type}>{type}</option>)}</select></div>
        <div className="field"><label htmlFor="calendar-date">Planned date</label><input id="calendar-date" name="plannedDate" type="date" value={form.plannedDate} onChange={updateField} required /></div>
        <div className="field"><label htmlFor="calendar-status">Status</label><select id="calendar-status" name="status" value={form.status} onChange={updateField}>{statuses.map((status) => <option key={status}>{status}</option>)}</select></div>
        <div className="field calendar-notes"><label htmlFor="calendar-notes">Notes <span>(optional)</span></label><textarea id="calendar-notes" name="notes" value={form.notes} onChange={updateField} placeholder="Add a hook, filming reminder, or repurposing note" rows="3" /></div>
      </div>
      <button className="button" type="submit">Add idea to calendar</button>
    </form>

    <section className="calendar-summary" aria-labelledby="calendar-summary-heading">
      <h2 id="calendar-summary-heading">Plan summary</h2>
      <div className="summary-grid">
        <div className="summary-total"><span>Total planned posts</span><strong>{items.length}</strong></div>
        <div><span>Posts per platform</span>{Object.keys(summary.platforms).length ? <ul>{Object.entries(summary.platforms).map(([label, count]) => <li key={label}><span>{label}</span><strong>{count}</strong></li>)}</ul> : <p>None added yet</p>}</div>
        <div><span>Posts by status</span>{Object.keys(summary.statuses).length ? <ul>{Object.entries(summary.statuses).map(([label, count]) => <li key={label}><span>{label}</span><strong>{count}</strong></li>)}</ul> : <p>None added yet</p>}</div>
      </div>
    </section>

    <section className="calendar-table-section" aria-labelledby="calendar-table-heading">
      <h2 id="calendar-table-heading">Planned content ideas</h2>
      <p>{items.length ? 'Review your plan or remove ideas you no longer need.' : 'Add your first idea using the form above.'}</p>
      {items.length > 0 && <div className="calendar-table-scroll"><table>
        <thead><tr><th>Idea</th><th>Platform</th><th>Type</th><th>Date</th><th>Status</th><th>Notes</th><th><span className="sr-only">Actions</span></th></tr></thead>
        <tbody>{items.map((item) => <tr key={item.id}><td><strong>{item.topic}</strong></td><td>{item.platform}</td><td>{item.contentType}</td><td>{formatDate(item.plannedDate)}</td><td><span className="status-pill">{item.status}</span></td><td>{item.notes || '—'}</td><td><button className="remove-idea" type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.topic}`}>Remove</button></td></tr>)}</tbody>
      </table></div>}
    </section>
    <p className="calendar-privacy-note"><strong>Browser-only planner:</strong> entries are not saved and will clear when you refresh or leave this page.</p>
  </div>;
}
