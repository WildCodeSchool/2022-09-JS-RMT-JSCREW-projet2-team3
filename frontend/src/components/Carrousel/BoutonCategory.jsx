import React from "react";
import { Link } from "react-router-dom";
import Hundelcarousel from "./Scriptcarouselenligne";
import "./BoutonCategory.css";

function BoutonCategory() {
  Hundelcarousel();

  return (
    <div className="BoutonCategory mt-3">
      <div className="carousel3 w-100 pb-4">
        <div className="container-fluid col-11 col-lg-11">
          <div id="bbb_viewed_slider_container">
            <div
              id="owl-Five"
              className="carousellignes owl-carousel owl-theme bbb_viewed_slider"
            >
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <Link to="/AllProduct?category=Fantasy">
                    <button
                      type="button"
                      className="buttonCatego btn btn-success"
                    >
                      Fantasy
                    </button>
                  </Link>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <Link to="/AllProduct?category=Horror">
                    <button
                      type="button"
                      className="buttonCatego btn btn-success"
                    >
                      Horror
                    </button>
                  </Link>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <Link to="/AllProduct?category=Action">
                    <button
                      type="button"
                      className="buttonCatego btn btn-success"
                    >
                      Action
                    </button>
                  </Link>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <Link to="/AllProduct?category=Thriller">
                    <button
                      type="button"
                      className="buttonCatego btn btn-success"
                    >
                      Thriller
                    </button>
                  </Link>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <Link to="/AllProduct?category=Drama">
                    <button
                      type="button"
                      className="buttonCatego btn btn-success"
                    >
                      Drama
                    </button>
                  </Link>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <Link to="/AllProduct?category=Romance">
                    <button
                      type="button"
                      className="buttonCatego btn btn-success"
                    >
                      Romance
                    </button>
                  </Link>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <Link to="/AllProduct?category=Adventure">
                    <button
                      type="button"
                      className="buttonCatego btn btn-success"
                    >
                      Adventure
                    </button>
                  </Link>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <Link to="/AllProduct?category=Animation">
                    <button
                      type="button"
                      className="buttonCatego btn btn-success"
                    >
                      Animation
                    </button>
                  </Link>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <Link to="/AllProduct?category=Science Fiction">
                    <button
                      type="button"
                      className="buttonCatego btn btn-success"
                    >
                      Science Fiction
                    </button>
                  </Link>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <Link to="/AllProduct?category=Comedy">
                    <button
                      type="button"
                      className="buttonCatego btn btn-success"
                    >
                      Comedy
                    </button>
                  </Link>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <Link to="/AllProduct?category=Mystery">
                    <button
                      type="button"
                      className="buttonCatego btn btn-success"
                    >
                      Mystery
                    </button>
                  </Link>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <Link to="/AllProduct?category=Crime">
                    <button
                      type="button"
                      className="buttonCatego btn btn-success"
                    >
                      Crime
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoutonCategory;
