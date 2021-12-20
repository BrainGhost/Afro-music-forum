import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MovieDetails = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/movie/" + id);

  const history = useHistory();
  const handleDelete = () => {
    fetch("http://localhost:8000/movie/" + movie.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="MovieDetails">
      {isLoading && <div>Processing ...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <article>
          <h2>{movie.name}</h2>
          <img src={movie.image} alt="life" />
          <p>Produced by: {movie.producer}</p>
          <div>{movie.description}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default MovieDetails;
