import { useEffect, useState } from "react";
import { getLive } from "../api";

function Live() {
  const [live, setLive] = useState([]);

  useEffect(() => {
    getLive().then(res => setLive(res.data.data));
  }, []);

  return (
    <div>
      <h1>Live Matches</h1>
      {live.map((l, i) => (
        <p key={i}>{l.title}</p>
      ))}
    </div>
  );
}

export default Live;
