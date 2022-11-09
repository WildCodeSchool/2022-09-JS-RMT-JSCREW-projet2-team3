function PosterMovie({ movie }) {
  return (
    <button
      type="button"
      className="navbar-toggler hover-btn col-5 col-sm-3 col-md-3 col-lg-2"
    >
      <img
        className="img-fluid p-2"
        src={movie.poster_path}
        alt={movie.title}
      />
    </button>
  );
}

export default PosterMovie;
