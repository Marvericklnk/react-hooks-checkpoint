export default function Filter({ title, rate, onTitleChange, onRateChange, onClear }) {
  return <section className="filters" aria-label="Movie filters">
    <label>Search by title<input type="search" value={title} onChange={event => onTitleChange(event.target.value)} placeholder="Find a movie…" /></label>
    <label>Minimum rating<select value={rate} onChange={event => onRateChange(Number(event.target.value))}><option value="0">All ratings</option>{[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}+ / 10</option>)}</select></label>
    <button className="secondary" onClick={onClear}>Clear filters</button>
  </section>;
}
