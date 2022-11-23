import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hundelcarousel from "./Scriptcarouselenligne";

function MultipleFilms2({ category, id }) {
  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories/${category}/films`)
      .then((response) => response.json())
      .then((data) => {
        setFilmsData(data);
        setTimeout(() => Hundelcarousel(id), 350);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category]);

  return (
    <div className="Multiplefilm2">
      <div className="carousel2 w-100 pb-4">
        <div className="container-fluid col-11 col-lg-11">
          <div id="bbb_viewed_slider_container">
            <div
              id={`owl-two${id}`}
              className="carousellignes owl-carousel owl-theme bbb_viewed_slider"
            >
              {filmsData.map((film) => (
                <Link to={`/AllProduct/${film.id}`}>
                  <img
                    src={film.poster_path}
                    className="imagecarouselligne p-1 bbb_viewed_image card-img-top"
                    alt={film.id}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultipleFilms2;
