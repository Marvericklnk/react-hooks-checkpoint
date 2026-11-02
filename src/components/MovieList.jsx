import MovieCard from './MovieCard.jsx';
export default function MovieList({ movies }) {
  return movies.length ? <div className="movie-grid">{movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}</div> : <p className="empty" role="status">No movies match your filters. Try another title or a lower rating.</p>;
}
