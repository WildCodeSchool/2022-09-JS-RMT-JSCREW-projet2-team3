import React, { useState, useEffect } from "react";

import "./OneProduct.css";

function OneProduct({ id }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/Films/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container-fluid">
      {movie && (
        <div className="filmCard">
          <img
            className="img-fluid rounded mx-auto d-block movie-image"
            src={movie.backdrop_path}
            alt={movie.original_title}
          />
          <div className="container-btn">
            <button
              type="button"
              className="btn text-white btn-md ms-3 me-2 mt-5 btn-css"
            >
              <b>Voir</b>
            </button>
            <button
              type="button"
              className="btn text-white btn-md me-2 mt-5 btn-css"
            >
              <b>Popularité</b>
            </button>
            <button
              type="button"
              className="btn text-white btn-md me-2 mt-5 btn-css"
            >
              <b>Vote : {movie.vote_average}</b>
            </button>
          </div>
          <div className="content">
            <h3 className="main-title text-start font-weight-bold ms-3 mt-5">
              {movie.original_title}
            </h3>
            <div className="container ms-0">
              <div className="d-flex justify-content-start">
                <span className="text-start ms-2 me-4">
                  Genre : {movie.genre_ids}
                </span>
                <span className="text-start me-2">
                  Sortie : {movie.release_date}
                </span>
              </div>
            </div>
            <p className="text-start ms-3 mt-5">{movie.overview}</p>
          </div>
          <h5 className="text-start ms-3 mb-1 mt-3">Suggestions</h5>
        </div>
      )}
    </div>
  );
}

export default OneProduct;
