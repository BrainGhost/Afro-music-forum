import useFetch from "./useFetch";
import MoviesList from "./MoviesList";

const Categorie = () => {
  const { data: movies } = useFetch("http://localhost:8000/movie");
  return (
    <div className="content">
      <h2>Top musician in the world </h2>
      <div>
        {/* <SubCarousel /> */}
        {movies && <MoviesList movie={movies} />}
      </div>
    </div>
  );
};

export default Categorie;
