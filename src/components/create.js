import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [producer, setProducer] = useState("");
  const [image, setImage] = useState("");
  const [ispending, setIspending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { title, description, producer, image };
    setIspending(true);

    fetch("http://localhost:8000/movie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    }).then(() => {
      setIspending(false);
      //history.go();
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new music post</h2>
      <form onSubmit={handleSubmit}>
        <label>Music title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Image</label>
        <input
          type="file"
          required
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <label>Description</label>
        <textarea
          rows="15"
          required
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <label>Musician</label>
        <select
          required
          value={producer}
          onChange={(e) => {
            setProducer(e.target.value);
          }}
        >
          <option value="" disabled>
            Select ...
          </option>
          <option value="Balibonera">Balibonera</option>
          <option value="Balamage">Balamage</option>
          <option value="Junior">Junior</option>
          <option value="Brainghost">Brainghost</option>
        </select>
        {!ispending && <button>Post</button>}
        {ispending && <button disabled>Adding new ...</button>}
      </form>
    </div>
  );
};

export default Create;
