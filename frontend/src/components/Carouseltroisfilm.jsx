import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import filmsData from "@services/films";
import OneProduct from "@pages/OneProduct";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Carouseltroisimage() {
  const filmId1 = Math.floor(Math.random() * filmsData.length);
  const filmId2 = Math.floor(Math.random() * filmsData.length);
  const filmId3 = Math.floor(Math.random() * filmsData.length);

  const openPageOneProduct = (filmData) => {
    <OneProduct filmData={filmData} />;
  };

  return (
    <div className="carousel w-100 pt-4">
      <div className="container-fluid col-11 col-lg-8">
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
            className="w-100 d-block rounded-9"
            itemId={1}
            src={filmsData[filmId1].backdrop_path}
            alt="film1"
            onClick={() => openPageOneProduct(filmsData[filmId1])}
          />
          <MDBCarouselItem
            className="w-100 d-block rounded-9"
            itemId={2}
            src={filmsData[filmId2].backdrop_path}
            alt="film2"
            onClick={() => openPageOneProduct(filmsData[filmId2])}
          />
          <MDBCarouselItem
            className="w-100 d-block rounded-9"
            itemId={3}
            src={filmsData[filmId3].backdrop_path}
            alt="film3"
            onClick={() => openPageOneProduct(filmsData[filmId3])}
          />
        </MDBCarousel>
      </div>
    </div>
  );
}

export default Carouseltroisimage;
