import { useEffect, useState } from "react";
import { getMovie, getStream } from "../api";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [stream, setStream] = useState("");

  useEffect(() => {
    getMovie(id).then(res => setMovie(res.data.data));
    getStream(id).then(res => setStream(res.data.data[0]?.url));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <video src={stream} controls width="100%" />
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetail;
