import { useEffect, useState } from "react";
import { getTrending, searchMovies } from "../api";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTrending().then(res => setMovies(res.data.data));
  }, []);

  const handleSearch = async (q) => {
    const res = await searchMovies(q);
    setMovies(res.data.data);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Carousel movies={movies} />

      {movies.map((m, i) => (
        <div key={i} onClick={() => navigate(`/movie/${m.id}`)}>
          <img src={m.cover} width="150" />
          <p>{m.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
