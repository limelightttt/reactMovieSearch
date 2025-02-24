import { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState(""); // Теперь это тип (movie/series)

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, type);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите название фильма..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Все</option>
        <option value="movie">Фильмы</option>
        <option value="series">Сериалы</option>
      </select>

      <button type="submit">🔍 Искать</button>
    </form>
  );
}

export default SearchBar;

