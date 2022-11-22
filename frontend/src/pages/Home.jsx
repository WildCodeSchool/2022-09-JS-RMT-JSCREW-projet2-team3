import React, { useEffect } from "react";
import MultipleFilms from "@components/Carrousel/Multiplefilm";
import Compteur from "@components/Compteur";
import CarrouselThreeFilms from "@components/Carrousel/Threefilm";
import updateMeta from "@services/Meta";
import CarrouselThreeFilms from "../components/Carrousel/Threefilm";
import Multiplefilm2 from "../components/Carrousel/Multiplefilm2";

export default function Home({ setPage }) {
  useEffect(() => {
    updateMeta("Home", "njnejnrvljnelhbhvb");
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
