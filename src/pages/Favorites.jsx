import "../css/favorites.css";
import { useMovieContext } from "../contexts/moviecontext.jsx";
import Moviecard from "../component/movie card.jsx";
function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movie-grid">
          {favorites.map((movie) => {
            return <Moviecard movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favorites;
