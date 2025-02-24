import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails.jsx";

const API_KEY = "1b7ff984";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState(""); // Добавили тип (movie/series)
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = (query, type) => {
    setSearchQuery(query);
    setSelectedType(type);
  };

  useEffect(() => {
    if (!searchQuery.trim()) return;

    const fetchMovies = async () => {
      try {
        setError("");
        let url = `${API_URL}&s=${searchQuery}`;
        
        if (selectedType) {
          url += `&type=${selectedType.toLowerCase()}`; // Добавляем тип
        }

        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error);
          setMovies([]);
        }
      } catch {
        setError("Ошибка загрузки данных");
      }
    };

    fetchMovies();
  }, [searchQuery, selectedType]);

  return (
    <div>
      <Header title="Мой Кинопоиск" />
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home movies={movies} error={error} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;




