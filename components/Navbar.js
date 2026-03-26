import { useState } from "react";
import { getSuggest } from "../api";

function Navbar({ onSearch }) {
  const [suggest, setSuggest] = useState([]);

  const handleChange = async (e) => {
    const val = e.target.value;
    onSearch(val);

    if (val.length > 2) {
      const res = await getSuggest(val);
      setSuggest(res.data.data || []);
    }
  };

  return (
    <div>
      <img src="https://files.catbox.moe/k29c8r.png" height="40" />
      <input onChange={handleChange} placeholder="Search..." />
      {suggest.map((s, i) => (
        <p key={i}>{s.title}</p>
      ))}
    </div>
  );
}

export default Navbar;
