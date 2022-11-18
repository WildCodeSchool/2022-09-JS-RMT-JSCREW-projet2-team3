import MultipleFilms from "@components/Carrousel/Multiplefilm";
import Compteur from "@components/Compteur";
import CarrouselThreeFilms from "../components/Carrousel/Threefilm";

export default function Home({ setPage }) {
  return (
    <div>
      <CarrouselThreeFilms setPage={setPage} />
      <Compteur setPage={setPage} />
      <MultipleFilms setPage={setPage} />
    </div>
  );
}
