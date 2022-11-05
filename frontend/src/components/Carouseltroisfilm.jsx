import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import filmsData from "@services/films";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Carouseltroisimage() {
  const src1 =
    filmsData[Math.floor(Math.random() * filmsData.length)].backdrop_path;
  const src2 =
    filmsData[Math.floor(Math.random() * filmsData.length)].backdrop_path;
  const src3 =
    filmsData[Math.floor(Math.random() * filmsData.length)].backdrop_path;
  return (
    <div className="carousel w-100 pt-4">
      <div className="container-fluid col-11 col-lg-8">
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
            className="w-100 d-block rounded-9"
            itemId={1}
            src={src1}
            alt="film1"
          />
          <MDBCarouselItem
            className="w-100 d-block rounded-9"
            itemId={2}
            src={src2}
            alt="film2"
          />
          <MDBCarouselItem
            className="w-100 d-block rounded-9"
            itemId={3}
            src={src3}
            alt="film3"
          />
        </MDBCarousel>
      </div>
    </div>
  );
}

export default Carouseltroisimage;
