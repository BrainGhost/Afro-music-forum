import { Link } from "react-router-dom";

const MoviesList = (props) => {
  const movies = props.movie;
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <div className="movie-preview" key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.image} alt="" />
            <h3>{movie.title}</h3>
            <p>Produced by:{movie.producer}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
