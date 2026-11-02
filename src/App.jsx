import { useState } from 'react';
import MovieList from './components/MovieList.jsx';
import Filter from './components/Filter.jsx';
import AddMovie from './components/AddMovie.jsx';
import './index.css';
const initialMovies = [
  { id: '1', title: 'Interstellar', description: 'Explorers travel beyond Earth in search of a future for humanity.', posterURL: './posters/interstellar.svg', rating: 8.7 },
  { id: '2', title: 'Black Panther', description: 'A young king must protect Wakanda while deciding what kind of leader to become.', posterURL: './posters/black-panther.svg', rating: 7.3 },
  { id: '3', title: 'Spider-Man: Into the Spider-Verse', description: 'Miles Morales discovers his powers and meets heroes from other dimensions.', posterURL: './posters/spider-verse.svg', rating: 8.4 },
];
export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState(0);
  function clearFilters() { setTitle(''); setRate(0); }
  function addMovie(movie) { setMovies(previous => [...previous, movie]); clearFilters(); }
  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(title.trim().toLowerCase()) && movie.rating >= rate);
  return <main><header><a className="brand" href="./">MARVIN<span> / WATCHLIST</span></a><span className="tag">THE MOVIE COLLECTION</span></header>
    <section className="hero"><p className="eyebrow">GOOD STORIES STAY WITH YOU.</p><h1>Make room for<br /><em>your next favourite.</em></h1><p>A personal shelf of movies worth coming back to. Find a title, pick a rating, or add something new.</p></section>
    <Filter title={title} rate={rate} onTitleChange={setTitle} onRateChange={setRate} onClear={clearFilters} />
    <section aria-label="Movie collection"><div className="section-heading"><h2>The collection</h2><p aria-live="polite">{filteredMovies.length} of {movies.length} movies</p></div><MovieList movies={filteredMovies} /></section>
    <AddMovie onAdd={addMovie} /><footer>Built with React · Movie ratings are sample values. New movies last until the page reloads.</footer>
  </main>;
}
