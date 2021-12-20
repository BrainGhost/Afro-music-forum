import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MusicianDetails = () => {
  const { id } = useParams();
  const {
    data: musician,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/musician/" + id);

  const history = useHistory();
  const handleDelete = () => {
    fetch("http://localhost:8000/musician/" + musician.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="MovieDetails">
      {isLoading && <div>Processing ...</div>}
      {error && <div>{error}</div>}
      {musician && (
        <article>
          <h2>{musician.name}</h2>
          <img src={musician.image} alt="life" />
          <p>Born in: {musician.DOB}</p>
          <div>{musician.details}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default MusicianDetails;
