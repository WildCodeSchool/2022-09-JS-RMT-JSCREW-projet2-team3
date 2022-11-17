import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function OneProduct() {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/Films/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container-fluid ">
      {movie && (
        <div className="img-fluid">
          <img
            className="card-img-fluid-oneproduct text-center w-100 mx-auto opacity-80"
            src={movie.backdrop_path}
            alt={movie.original_title}
          />
          <div className="card-img-overlay text-start mt-5 ms-2 d-none d-md-block d-lg-block">
            <h2 className="card-title-oneproduct mt-5 text-white mb-5 title-oneproduct">
              {movie.title}
            </h2>
            <div className="container-oneproduct">
              <div className="d-flex justify-content-start">
                <span className="card-texte text-start text-white me-4 fs-5">
                  {movie.genre_ids}
                </span>
                <span className="card-texte text-white fs-5 mb-0 me-2">
                  {movie.release_date}
                </span>
              </div>
            </div>
            <div className="row">
              <p className="card-texte text-white text-break fs-5 mt-5">
                {movie.overview}
              </p>
            </div>
            <div className="container-btn">
              <button
                type="button"
                className="btn btn-md ms-3 me-2 mt-5 bouton-oneProduct btn-success text-white bouton-watch"
              >
                <i className="fa-solid fa-play" />
              </button>
              <span className="btn btn-md me-2 mt-5 btn-success">
                <b>Popularity : {movie.popularity}</b>
              </span>
              <button
                type="button"
                className="btn btn-md me-2 mt-5 btn-success bouton-oneProduct"
              >
                <b>
                  {movie.vote_average}
                  <small> (vote)</small>
                </b>
              </button>
            </div>
          </div>

          <div className="container-btn">
            <button
              type="button"
              className="btn btn-md ms-3 me-2 mt-5 btn-success bouton-oneProduct d-md-none d-lg-none"
            >
              <i className="fa-solid fa-play" />
            </button>
            <span className="btn btn-md me-2 mt-5 btn-success bouton-oneProduct d-md-none d-lg-none">
              <b>Popularity :{movie.popularity}</b>
            </span>
            <button
              type="button"
              className="btn btn-md me-2 mt-5 btn-success bouton-oneProduct d-md-none d-lg-none"
            >
              <b>
                {movie.vote_average}
                <small>(vote)</small>
              </b>
            </button>
          </div>
          <div className="content">
            <h3 className="main-title text-start font-weight-bold ms-3 mt-5 d-md-none d-lg-none">
              {movie.original_title}
            </h3>
            <div className="container ms-0">
              <div className="d-flex justify-content-start">
                <span className="text-start ms-2 me-4 d-md-none d-lg-none">
                  {movie.genre_ids}
                </span>
                <span className="text-start me-2 d-md-none d-lg-none">
                  {movie.release_date}
                </span>
              </div>
            </div>
            <p className="text-start ms-3 mt-3 d-md-none d-lg-none">
              {movie.overview}
            </p>
          </div>
          <h5 className="text-start ms-3 mb-1 mt-3">Suggestions</h5>
        </div>
      )}
    </div>
  );
}

export default OneProduct;
