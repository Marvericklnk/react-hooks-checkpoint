import { useState } from 'react';
export default function MovieCard({ movie }) {
  const [failed, setFailed] = useState(false);
  return <article className="movie-card">
    {failed ? <div className="poster fallback">Poster unavailable</div> : <img className="poster" src={movie.posterURL} alt={`${movie.title} poster`} onError={() => setFailed(true)} />}
    <div className="card-body"><span className="rating">★ {movie.rating} / 10</span><h3>{movie.title}</h3><p>{movie.description}</p></div>
  </article>;
}
