import React, { useState, useEffect } from "react";

const API_KEY = "d3d960bf";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Movies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const fetchMoviesByKeyword = async (keyword, page = 1) => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}&page=${page}`
    );
    const data = await res.json();
    return data.Response === "True" ? data.Search : [];
  };

  const preloadMovies = async () => {
    setLoading(true);
    setError("");
    try {
      const batman = await fetchMoviesByKeyword("fast");
      const harry = await fetchMoviesByKeyword("harry");
      const pokemon = await fetchMoviesByKeyword("pokemon");
      const combined = [...batman, ...harry, ...pokemon];
      setMovies(shuffleArray(combined));
      setTotalResults(combined.length);
      setPage(1);
    } catch {
      setError("Failed to preload movies.");
    }
    setLoading(false);
  };

  useEffect(() => {
    preloadMovies();
  }, []);

  const fetchMovies = async (currentPage = 1) => {
    if (!query) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${currentPage}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults));
        setPage(currentPage);
        setShowFavorites(false);
      } else {
        setMovies([]);
        setError(data.Error);
        setTotalResults(0);
      }
    } catch {
      setError("Error fetching movies.");
    }

    setLoading(false);
  };

  const fetchMovieDetails = async (imdbID) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`
      );
      const data = await res.json();
      setSelectedMovie(data);
    } catch {
      alert("Failed to load movie details.");
    }
  };

  const toggleFavorite = (movie) => {
    const isFav = favorites.find((fav) => fav.imdbID === movie.imdbID);
    if (isFav) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const isFavorite = (imdbID) => {
    return favorites.some((fav) => fav.imdbID === imdbID);
  };

  const closeModal = () => setSelectedMovie(null);
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-blue-800 to-purple-400 text-white px-6 py-10 font-sans">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold mb-2">🎬 Movie Explorer</h1>
        <p className="text-gray-400 text-lg">
          Discover, search, and save your favorite films
        </p>
      </header>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <input
          type="text"
          className="w-full sm:w-96 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") fetchMovies(1);
          }}
        />
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg transition"
          onClick={() => fetchMovies(1)}
        >
          Search
        </button>
        <button
          className={`px-5 py-3 rounded-lg text-white transition ${
            showFavorites
              ? "bg-pink-600 hover:bg-pink-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites
            ? "Close Favorites"
            : `Favorites (${favorites.length})`}
        </button>
      </div>

      {error && <p className="text-red-400 text-center mb-6">{error}</p>}
      {loading && (
        <p className="text-center text-indigo-400 mb-6">Loading...</p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(showFavorites ? favorites : movies).map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform cursor-pointer"
            onClick={() => fetchMovieDetails(movie.imdbID)}
          >
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={movie.Title}
              className="w-full h-80 object-contain bg-black"
            />
            <div className="p-4 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold leading-snug">
                  {movie.Title}
                </h3>
                <p className="text-gray-400 text-sm">{movie.Year}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(movie);
                }}
                className={`text-2xl ${
                  isFavorite(movie.imdbID)
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
                title={
                  isFavorite(movie.imdbID)
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
              >
                ♥
              </button>
            </div>
          </div>
        ))}
      </div>

      {totalResults > 10 && !showFavorites && (
        <div className="flex justify-center mt-12 space-x-6">
          <button
            onClick={() => fetchMovies(page - 1)}
            disabled={page === 1}
            className={`px-5 py-2 rounded-lg transition ${
              page === 1
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            ◀ Prev
          </button>
          <span className="self-center text-lg">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => fetchMovies(page + 1)}
            disabled={page === totalPages}
            className={`px-5 py-2 rounded-lg transition ${
              page === totalPages
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            Next ▶
          </button>
        </div>
      )}

      {selectedMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
          <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl p-6 max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white hover:text-red-400 text-xl font-bold"
              title="Close"
            >
              ✖
            </button>
            <h2 className="text-3xl font-bold mb-2">{selectedMovie.Title}</h2>
            <p className="text-sm text-gray-300 mb-2">
              Genre: {selectedMovie.Genre}
            </p>
            <p className="mb-2 text-gray-300">
              <strong>Released:</strong> {selectedMovie.Released}
            </p>
            <img
              src={
                selectedMovie.Poster !== "N/A"
                  ? selectedMovie.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={selectedMovie.Title}
              className="w-full max-w-xs mx-auto my-4 rounded-xl shadow-lg object-contain"
            />
            <p className="mb-3 text-gray-100">{selectedMovie.Plot}</p>
            <p><strong>Director:</strong> {selectedMovie.Director}</p>
            <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
            <p><strong>IMDB Rating:</strong> {selectedMovie.imdbRating}</p>
          </div>
        </div>
      )}

      <footer className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Movie Explorer. Built with ❤️ using
          React & OMDb API.
        </p>
      </footer>
    </div>
  );
}
