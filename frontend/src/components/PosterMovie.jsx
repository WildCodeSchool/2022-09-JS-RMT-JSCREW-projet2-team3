function PosterMovie({ movie, handlePage }) {
  return (
    <button
      type="button"
      className="navbar-toggler col-5 col-sm-3 col-md-3 col-lg-2"
      onClick={handlePage}
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
