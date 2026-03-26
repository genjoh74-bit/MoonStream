import { useState } from "react";
import { getBrowse } from "../api";

function Browse() {
  const [movies, setMovies] = useState([]);

  const fetch = (g) => {
    getBrowse(g).then(res => setMovies(res.data.data));
  };

  return (
    <div>
      <button onClick={() => fetch("Drama")}>Drama</button>
      <button onClick={() => fetch("Action")}>Action</button>

      {movies.map((m, i) => (
        <img key={i} src={m.cover} width="150" />
      ))}
    </div>
  );
}

export default Browse;
