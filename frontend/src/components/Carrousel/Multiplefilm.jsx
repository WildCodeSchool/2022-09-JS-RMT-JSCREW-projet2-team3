import React, { useEffect } from "react";
import filmsData from "@services/films";
import Multiplefilmmap from "@components/Carrousel/multiplefilmmap"
import Hundelcarousel from "./Scriptcarouselenligne";

function MultipleFilms({ setPage }) {

  useEffect(()=> Hundelcarousel(), [])

  return (
    <div id="carouselenlignegene" className="carousel w-100 pb-4">
      <div className="container-fluid col-11 col-lg-11">
        <div className="tendance text-start fs-3">
          <p>Tendency</p>
        </div>
        <div id="bbb_viewed_slider_container">
          <div className="owl-carousel owl-theme bbb_viewed_slider">
            {filmsData
              .filter((note) => note.vote_average > 7.5)
              .map((note) => (
               <Multiplefilmmap note={note} setPage={setPage}/>
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
