import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function Carouseltroisimage() {
    return (
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src='https://image.tmdb.org/t/p/w500/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg'
          alt='...'
        >
        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='https://image.tmdb.org/t/p/w500/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg'
          alt='...'
        >
        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://image.tmdb.org/t/p/w500/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg'
          alt='...'
        >
        </MDBCarouselItem>
      </MDBCarousel>
   );
}

export default Carouseltroisimage;