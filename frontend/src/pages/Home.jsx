import React, { useEffect } from "react";
import MultipleFilms from "@components/Carrousel/Multiplefilm";
import Compteur from "@components/Compteur";
import CarrouselThreeFilms from "@components/Carrousel/Threefilm";
import updateMeta from "@services/Meta";

export default function Home({ setPage }) {
  useEffect(() => {
    updateMeta("Home", "njnejnrvljnelhbhvb");
  }, []);

  return (
    <div>
      <CarrouselThreeFilms setPage={setPage} />
      <Compteur setPage={setPage} />
      <MultipleFilms setPage={setPage} />
    </div>
  );
}
