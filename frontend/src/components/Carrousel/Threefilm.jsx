import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CarrouselThreeFilms() {
  const [threeFilmId, setThreeFilmId] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/Threefilm`)
      .then((response) => response.json())
      .then((data) => setThreeFilmId(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="carousel w-100 pt-4">
      {threeFilmId && (
        <div className="container-fluid col-11 col-lg-8">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel3film carousel-item active">
                <Link to={`/AllProduct/${threeFilmId[0].id}`}>
                  <img
                    src={threeFilmId[0].backdrop_path}
                    className="imagecarouselligne card-img-top"
                    alt={`Post of ${threeFilmId[0].id}`}
                  />
                </Link>
                <div className="carousel-caption d-block col-4">
                  <p className="display-4 pcarouselltopthree">
                    TOP 3 OF THE WEEK
                  </p>
                </div>
              </div>
              <div className="carousel3film carousel-item">
                <Link to={`/AllProduct/${threeFilmId[1].id}`}>
                  <img
                    src={threeFilmId[1].backdrop_path}
                    className="imagecarouselligne card-img-top"
                    alt={`Post of ${threeFilmId[1].id}`}
                  />
                </Link>
                <div className="carousel-caption d-block col-4">
                  <p className="display-4 pcarouselltopthree">
                    TOP 3 OF THE WEEK
                  </p>
                </div>
              </div>
              <div className="carousel3film carousel-item">
                <Link to={`/AllProduct/${threeFilmId[2].id}`}>
                  <img
                    src={threeFilmId[2].backdrop_path}
                    className="imagecarouselligne card-img-top"
                    alt={`Post of ${threeFilmId[2].id}`}
                  />
                </Link>
                <div className="carousel-caption d-block col-4">
                  <p className="display-4 pcarouselltopthree">
                    TOP 3 OF THE WEEK
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarrouselThreeFilms;
