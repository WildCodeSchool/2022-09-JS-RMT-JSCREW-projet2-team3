import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import filmsData from "@services/films";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function CarrouselThreeFilms() {
  const getRandom = () => Math.floor(Math.random() * filmsData.length);

  const filmId1 = getRandom();
  const filmId2 = getRandom();
  const filmId3 = getRandom();

  return (
    <div className="carousel w-100 pt-4">
      <div className="container-fluid col-11 col-lg-8">
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
            className="w-100 d-block rounded-9"
            itemId={1}
            src={filmsData[filmId1].backdrop_path}
            alt="film1"
          />
          <MDBCarouselItem
            className="w-100 d-block rounded-9"
            itemId={2}
            src={filmsData[filmId2].backdrop_path}
            alt="film2"
          />
          <MDBCarouselItem
            className="w-100 d-block rounded-9"
            itemId={3}
            src={filmsData[filmId3].backdrop_path}
            alt="film3"
          />
        </MDBCarousel>
      </div>
    </div>
  );
}

export default CarrouselThreeFilms;
