import React, { useState, useEffect } from "react";
import Multiplefilmmap from "@components/Carrousel/multiplefilmmap";
import Hundelcarousel from "./Scriptcarouselenligne";

function MultipleFilms() {
  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/Films`)
      .then((response) => response.json())
      .then((data) => {
        setFilmsData(data);
        setTimeout(() => Hundelcarousel(), 250);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div id="carouselenlignegene" className="carousel w-100 pb-4">
      <div className="container-fluid col-11 col-lg-11">
        <div className="tendance text-start fs-3">
          <p>Tendency</p>
        </div>
        <div id="bbb_viewed_slider_container">
          <div className="owl-carousel owl-theme bbb_viewed_slider">
            {filmsData
              .filter((film) => film.vote_average > 7.5)
              .map((film) => (
                <Multiplefilmmap film={film} key={film.id} />
              ))}
          </div>
          <button
            className="carouseligneprev bbb_viewed_prev position-absolute d-flex align-items-center justify-content-center text-center"
            type="button"
            data-bs-target="#carouselenlignegene"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carouselignenext bbb_viewed_next position-absolute d-flex align-items-center justify-content-center text-center"
            type="button"
            data-bs-target="#carouselenlignegene"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MultipleFilms;
