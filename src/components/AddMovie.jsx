import { useState } from 'react';
const empty = { title: '', description: '', posterURL: '', rating: '' };
export default function AddMovie({ onAdd }) {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  function change(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setError(''); setSuccess('');
  }
  function submit(event) {
    event.preventDefault();
    const title = form.title.trim(), description = form.description.trim(), posterURL = form.posterURL.trim();
    const rating = Number(form.rating);
    if (!title || !description || !posterURL || form.rating === '') { setError('Please complete every field.'); return; }
    if (!Number.isFinite(rating) || rating < 0 || rating > 10) { setError('Rating must be between 0 and 10.'); return; }
    try { const url = new URL(posterURL); if (!['https:', 'http:'].includes(url.protocol)) throw new Error(); }
    catch { setError('Enter a valid http or https poster URL.'); return; }
    onAdd({ id: crypto.randomUUID(), title, description, posterURL, rating });
    setForm(empty); setError(''); setSuccess(`${title} was added. Filters have been cleared so you can see it.`);
  }
  return <section className="add-panel"><div><p className="eyebrow">YOUR NEXT PICK</p><h2>Add a movie</h2><p>Found something worth watching? Add it to the collection.</p></div>
    <form onSubmit={submit} noValidate>
      <label>Movie title<input name="title" value={form.title} onChange={change} required maxLength={120} /></label>
      <label>Description<textarea name="description" value={form.description} onChange={change} required maxLength={1000} rows={3} /></label>
      <div className="form-row"><label>Poster URL<input name="posterURL" type="url" value={form.posterURL} onChange={change} placeholder="https://example.com/poster.jpg" required /></label><label>Rating (0–10)<input name="rating" type="number" min="0" max="10" step="0.1" value={form.rating} onChange={change} required /></label></div>
      {error && <p className="error" role="alert">{error}</p>}{success && <p className="success" role="status">{success}</p>}
      <button type="submit">Add movie +</button>
    </form>
  </section>;
}
