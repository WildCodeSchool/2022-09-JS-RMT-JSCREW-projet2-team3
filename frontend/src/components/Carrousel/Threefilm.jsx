import React from "react";
import filmsData from "@services/films";

function CarrouselThreeFilms({ setPage }) {
  const getRandom = () => Math.floor(Math.random() * filmsData.length);

  const filmId1 = getRandom();
  const filmId2 = getRandom();
  const filmId3 = getRandom();

  return (
    <div className="carousel w-100 pt-4">
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
              <input
                type="image"
                className="imagecarousel3film d-block w-100"
                src={filmsData[filmId1].backdrop_path}
                alt="film1"
                onClick={() => setPage({ path: "OneProduct", id: filmId1 + 1 })}
              />
              <div className="carousel-caption d-block col-4">
                <p>TOP 3 DE LA SEMAINE</p>
              </div>
            </div>
            <div className="carousel3film carousel-item">
              <input
                type="image"
                className="imagecarousel3film d-block w-100"
                src={filmsData[filmId2].backdrop_path}
                alt="film2"
                onClick={() => setPage({ path: "OneProduct", id: filmId2 + 1 })}
              />
              <div className="carousel-caption d-block col-4">
                <p>TOP 3 DE LA SEMAINE</p>
              </div>
            </div>
            <div className="carousel3film carousel-item">
              <input
                type="image"
                className="imagecarousel3film d-block w-100"
                src={filmsData[filmId3].backdrop_path}
                alt="film3"
                onClick={() => setPage({ path: "OneProduct", id: filmId3 + 1 })}
              />
              <div className="carousel-caption d-block col-4">
                <p>TOP 3 DE LA SEMAINE</p>
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
    </div>
  );
}

export default CarrouselThreeFilms;
