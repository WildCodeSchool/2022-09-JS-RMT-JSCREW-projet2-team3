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
        <div className="vue-desktop mt-2">
          <img
            className="card-img-fluid-oneproduct text-center w-100 rounded"
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

          <div className="container-infos">
            <h3 className="text-start font-weight-bold mt-2 ms-3 d-md-none d-lg-none">
              {movie.original_title}
            </h3>
            <div className="container genre date">
              <div className="d-flex align-items-center">
                <span className="ms-3 me-4 d-md-none d-lg-none">
                  {movie.genre_ids}
                </span>
                <span className="me-2 d-md-none d-lg-none">
                  {movie.release_date}
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button
                type="button"
                className="btn btn-md ms-3 me-2 btn-success d-md-none d-lg-none"
              >
                <i className="fa-solid fa-play" />
              </button>
              <span className="btn btn-md me-2 btn-success d-md-none d-lg-none">
                <b>{movie.popularity} like it 😍</b>
              </span>
              <button
                type="button"
                className="btn btn-md me-2 btn-success d-md-none d-lg-none"
              >
                <b>
                  {movie.vote_average}
                  <small>/10 ⚡</small>
                </b>
              </button>
            </div>
          </div>
          <p className="text-justify m-3 d-md-none d-lg-none">
            {movie.overview}
          </p>
          <h5 className="text-start ms-3 mb-1 mt-3">Suggestions</h5>
          <p className="mt-3">carrousel</p>
        </div>
      )}
    </div>
  );
}

export default OneProduct;
