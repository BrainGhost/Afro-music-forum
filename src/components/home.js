import MoviesList from "./MoviesList";
import useFetch from "./useFetch";
import Carousel from "./carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    data: movies,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/movie");

  return (
    <div className="home">
      <div className="carousel">
        <h1>Welcome, Top 10 worldwide musicians</h1>
        <Carousel />
        <button className="btn-watch">
          <Link to="/categorie">View now!!</Link>
        </button>
      </div>
      <div className="newPost">
        <h4>Discover</h4>
        <button>
          <Link to="/create">Create new Post</Link>
        </button>
      </div>

      <div className="movieContainer">
        {isLoading && <div>Processing ...</div>}
        {movies && <MoviesList movie={movies} />}

        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default Home;
