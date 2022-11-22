import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Multiplefilm2 from "../components/Carrousel/Multiplefilm2";

function OneProduct() {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/Films/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="container-fluid ">
      {movie && (
        <div className="vue-desktop mt-4 mb-4 col-md-10 col-lg-11 align-items-center m-auto ">
          <div className="d-flex flex-column flex-lg-row align-items-center">
            <img
              className="card-img-fluid rounded col-lg-7 me-lg-5 mb-4"
              src={movie.backdrop_path}
              alt={movie.original_title}
            />

            <div className="container-infos-mobile">
              <h3 className="text-start text-lg-center font-weight-bold mt-2 ms-3">
                {movie.original_title}
              </h3>
              <div className="container_genre_date d-flex justify-content-lg-center">
                <div className="d-flex align-items-center mt-3">
                  <span className="ms-3 me-4">{movie.genre_ids}</span>
                  <span className="me-2">{movie.release_date}</span>
                </div>
              </div>
              <div className="d-flex justify-content-lg-center mt-3">
                <button
                  onClick={() => setShow(true)}
                  type="button"
                  className="btn btn-md ms-3 me-2 btn-success"
                >
                  <i
                    className={
                      show ? "fas fa-spinner fa-spin" : "fa-solid fa-play"
                    }
                  />
                </button>
                <span className="btn btn-md me-2 btn-success">
                  <b>{movie.popularity} like it 😍</b>
                </span>
                <button type="button" className="btn btn-md me-2 btn-success ">
                  <b>
                    {movie.vote_average}
                    <small>/10 ⚡</small>
                  </b>
                </button>
              </div>
              <p className="text-start text-lg-center m-3 mt-4">
                {movie.overview}
              </p>
            </div>
          </div>
          <h5 className="text-start ms-3 mb-1 mt-3">Suggestions</h5>
          <Multiplefilm2 category={movie.genre_ids}/>
        </div>
      )}
    </div>
  );
}

export default OneProduct;
