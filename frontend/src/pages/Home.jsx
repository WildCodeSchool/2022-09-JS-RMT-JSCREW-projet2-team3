import React, { useEffect } from "react";
import MultipleFilms from "@components/Carrousel/Multiplefilm";
import Compteur from "@components/Compteur";
import CarrouselThreeFilms from "@components/Carrousel/Threefilm";
import updateMeta from "@services/Meta";
import Multiplefilm2 from "@components/Carrousel/Multiplefilm2";

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
      <MultipleFilms />
      <div className="text-start fs-3 container-fluid col-11 col-lg-11 w-100 mx-lg-5 mx-sm-4 mx-3">
        <p>Fantasy</p>
      </div>
      <Multiplefilm2 />
    </div>
  );
}
