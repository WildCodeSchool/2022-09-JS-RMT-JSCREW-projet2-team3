import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FilmAction() {
  const [FilmsAction, setFilmsAction] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/FilmAction`)
      .then((response) => response.json())
      .then((data) => setFilmsAction(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="carousel2 w-100 pt-4">
      {FilmsAction && (
        <div className="container-fluid col-11 col-lg-8">
          <div
            id="carouseFilmAction"
            className="carousel slide"
            data-bs-ride="carousel2"
          >
            <div className="carousel-inner">
              <div className="carousel3film carousel-item active">
                <Link to={`/AllProduct/${FilmsAction[0].id}`}>
                  <img
                    src={FilmsAction[0].backdrop_path}
                    className="imagecarouselligne card-img-top"
                    alt={FilmsAction[0].id}
                  />
                </Link>
              </div>
              <div className="carousel3film carousel-item">
                <Link to={`/AllProduct/${FilmsAction[1].id}`}>
                  <img
                    src={FilmsAction[1].backdrop_path}
                    className="imagecarouselligne card-img-top"
                    alt={FilmsAction[1].id}
                  />
                </Link>
              </div>
              <div className="carousel3film carousel-item">
                <Link to={`/AllProduct/${FilmsAction[2].id}`}>
                  <img
                    src={FilmsAction[2].backdrop_path}
                    className="imagecarouselligne card-img-top"
                    alt={FilmsAction[2].id}
                  />
                </Link>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouseFilmAction"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouseFilmAction"
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

export default FilmAction;
