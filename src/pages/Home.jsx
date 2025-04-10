import Moviecard from "../component/movie card.jsx";
import { useState, useEffect } from "react";
import "../css/home.css";
import { getPopularMovie } from "../services/api.js";
/* https://files.prokerala.com/movies/pics/300x360/movie-poster-63297.webp */
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  /*const movie = [
    {
      id: 1,
      url: "https://files.prokerala.com/movies/pics/300x360/movie-poster-63297.webp",
      title: "john wick",
      release_data: "2020",
    },
    {
      id: 2,
      url: "https://files.prokerala.com/movies/pics/300x360/movie-poster-63297.webp",
      title: "jon ck",
      release_data: "2002",
    },
    {
      id: 4,
      url: "https://files.prokerala.com/movies/pics/300x360/movie-poster-63297.webp",
      title: "hassan",
      release_data: "2002",
    },
  ];*/

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovie();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies , pleas try agin ... ");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault(); /*Don't Reload Page*/
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-from">
        <input
          type="text"
          placeholder="search for movie ... "
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <Moviecard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
