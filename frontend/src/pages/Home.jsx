import MultipleFilms from "@components/Carrousel/Multiplefilm";
import Compteur from "@components/Compteur";
import CarrouselThreeFilms from "../components/Carrousel/Threefilm";
import Multiplefilm2 from "../components/Carrousel/Multiplefilm2";

export default function Home({ setPage }) {
  return (
    <div>
      <CarrouselThreeFilms setPage={setPage} />
      <Compteur setPage={setPage} />
      <MultipleFilms setPage={setPage} />
      <Multiplefilm2 setPage={setPage} />
    </div>
  );
}
