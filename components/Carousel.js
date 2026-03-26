function Carousel({ movies }) {
  return (
    <div style={{ display: "flex", overflowX: "scroll" }}>
      {movies.map((m, i) => (
        <img key={i} src={m.cover} height="200" />
      ))}
    </div>
  );
}

export default Carousel;
