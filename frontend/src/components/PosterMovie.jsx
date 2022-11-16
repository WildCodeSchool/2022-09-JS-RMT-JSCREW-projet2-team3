import { Link } from "react-router-dom";

function PosterMovie({ movie }) {
  return (
    <Link className="navbar-toggler" to={`/AllProduct/${movie.id}`}>
      <img
        className="img-fluid p-2 col-sm-3 col-md-3 col-lg-2"
        src={movie.poster_path}
        alt={movie.title}
      />
    </Link>
  );
}

export default PosterMovie;
