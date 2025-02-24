import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home({ movies, error, loading }) {
  return (
    <div className="home">
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="movies">
        {loading
          ? 
            [...Array(8)].map((_, index) => (
              <div key={index} className="movie skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-text"></div>
              </div>
            ))
          : 
            movies.map((movie) => (
              <div key={movie.imdbID} className="movie">
                <Link to={`/movie/${movie.imdbID}`}>
                  <img src={movie.Poster} alt={movie.Title} />
                  <h3>{movie.Title}</h3>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}



export default Home;




