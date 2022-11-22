import React from "react";
import { Link } from "react-router-dom";

function Multiplefilmmap({ film }) {
  return (
    <div className="Multiplefilmmap">
      <div className="owl-item">
        <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
          <Link to={`/AllProduct/${film.id}`}>
            <img
              src={film.poster_path}
              className="imagecarouselligne bbb_viewed_image card-img-top"
              alt={film.id}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Multiplefilmmap;
