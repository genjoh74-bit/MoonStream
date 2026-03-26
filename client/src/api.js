import axios from "axios";

export const API = "http://localhost:5000/api";

export const getTrending = () => axios.get(`${API}/trending`);
export const searchMovies = (q) => axios.get(`${API}/search?keyword=${q}`);
export const getMovie = (id) => axios.get(`${API}/movie/${id}`);
export const getStream = (id) => axios.get(`${API}/stream/${id}`);
export const getBrowse = (genre) =>
  axios.get(`${API}/browse?genre=${genre}&country=South+Korea`);
export const getSuggest = (q) => axios.get(`${API}/suggest?keyword=${q}`);
export const getLive = () => axios.get(`${API}/live`);
