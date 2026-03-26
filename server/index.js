const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const BASE = "https://movieapi.xcasper.space/api";

// 🔥 Trending
app.get("/api/trending", async (req, res) => {
  const r = await axios.get(`${BASE}/trending?page=0&perPage=18`);
  res.json(r.data);
});

// 🔍 Search
app.get("/api/search", async (req, res) => {
  const r = await axios.get(`${BASE}/search?keyword=${req.query.keyword}&page=1&perPage=10`);
  res.json(r.data);
});

// 🎬 Movie Detail
app.get("/api/movie/:id", async (req, res) => {
  const r = await axios.get(`${BASE}/detail?subjectId=${req.params.id}`);
  res.json(r.data);
});

// ▶️ Stream
app.get("/api/stream/:id", async (req, res) => {
  const r = await axios.get(`${BASE}/bff/stream?subjectId=${req.params.id}`);
  res.json(r.data);
});

// 🎭 Browse
app.get("/api/browse", async (req, res) => {
  const r = await axios.get(
    `${BASE}/browse?subjectType=2&genre=${req.query.genre}&countryName=${req.query.country}&page=1&perPage=12`
  );
  res.json(r.data);
});

// 🔍 Suggest
app.get("/api/suggest", async (req, res) => {
  const r = await axios.get(`${BASE}/search/suggest?keyword=${req.query.keyword}`);
  res.json(r.data);
});

// 📺 Live
app.get("/api/live", async (req, res) => {
  const r = await axios.get(`${BASE}/live`);
  res.json(r.data);
});

app.listen(5000, () => console.log("Server running on 5000"));
