import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/MovieDetails.css";

const API_KEY = "1b7ff984";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      })
      .catch(() => setError("Ошибка загрузки данных"));
  }, [id]);

  if (error) return <h2 style={{ color: "red" }}>❌ {error}</h2>;
  if (!movie) return <h2>⏳ Загрузка...</h2>;

  return (
    <div className="movie-details">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p>
        <strong>Год:</strong> {movie.Year}
      </p>
      <p>
        <strong>Рейтинг:</strong> {movie.imdbRating}
      </p>

      {/* Кнопка назад */}
      <button onClick={() => navigate(-1)} className="back-button">🔙 Назад</button>

      {/* Кнопка на главную */}
      <Link to="/" className="back-button">🏠 На главную</Link>
    </div>
  );
}

export default MovieDetails;
