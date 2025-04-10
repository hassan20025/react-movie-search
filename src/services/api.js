const API_KEY = "89883b30740ca241b4218e5b515993bf";
const BASE_URL = "https://api.themoviedb.org/3";
/* */
export const getPopularMovie = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  const filterResult = data.results.filter(
    (movie) => movie.title !== "Ask Me What You Want" && movie.title !== "Sex"
  );
  return filterResult;
};

export const searchMovie = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
