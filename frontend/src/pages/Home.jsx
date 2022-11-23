import React, { useEffect } from "react";
import MultipleFilms from "@components/Carrousel/Multiplefilm";
import Compteur from "@components/Compteur";
import CarrouselThreeFilms from "@components/Carrousel/Threefilm";
import Multiplefilm2 from "@components/Carrousel/Multiplefilm2";
import Multiplefilm3 from "@components/Carrousel/Multiplefilm3";
import Multiplefilm4 from "@components/Carrousel/Multiplefilm4";
import FilmAction from "@components/Carrousel/FilmAction";
import updateMeta from "@services/Meta";
import BoutonCategory from "@components/Carrousel/BoutonCategory";

export default function Home({ setPage }) {
  useEffect(() => {
    updateMeta(
      "Home",
      "An ecological streaming platform, each subscriber allows us to plant trees around the world in order to act for the planet and respect our environment in the long term."
    );
  }, []);

  return (
    <div>
      <CarrouselThreeFilms />
      <Compteur setPage={setPage} />
      <BoutonCategory />
      <div className="text-start fs-3 container-fluid col-11 col-lg-11 w-100 mx-lg-5 mx-sm-4 mx-3">
        <p>Trends</p>
      </div>
      <MultipleFilms />
      <div className="text-start fs-3 container-fluid col-11 col-lg-11 w-100 mx-lg-5 mx-sm-4 mx-3">
        <p>Fantasy</p>
      </div>
      <Multiplefilm2 category="Fantasy" />
      <div className="text-start fs-3 container-fluid col-11 col-lg-11 w-100 mx-lg-5 mx-sm-4 mx-3">
        <p>Action</p>
      </div>
      <FilmAction category="Action" />
      <div className="text-start fs-3 container-fluid col-11 col-lg-11 w-100 mx-lg-5 mx-sm-4 mx-3 mt-4">
        <p>Horror</p>
      </div>
      <Multiplefilm3 category="Horror" />
      <div className="text-start fs-3 container-fluid col-11 col-lg-11 w-100 mx-lg-5 mx-sm-4 mx-3">
        <p>Animation</p>
      </div>
      <Multiplefilm4 category="Animation" />
    </div>
  );
}
