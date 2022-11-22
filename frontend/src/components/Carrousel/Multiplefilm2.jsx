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
        setTimeout(() => Hundelcarousel(), 350);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="Multiplefilm2">
      <div className="carousel2 w-100 pb-4">
        <div className="container-fluid col-11 col-lg-11">
          <div id="bbb_viewed_slider_container">
            <div
              id="owl-two"
              className="carousellignes owl-carousel owl-theme bbb_viewed_slider"
            >
              {filmsData
                .filter((film) => film.genre_ids.includes("Fantasy"))
                .map((film) => (
                  <Multiplefilmmap film={film} key={film.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultipleFilms;
