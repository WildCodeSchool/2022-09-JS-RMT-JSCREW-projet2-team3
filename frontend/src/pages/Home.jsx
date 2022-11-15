import MultipleFilms from "@components/Carrousel/Multiplefilm";
import CarrouselThreeFilms from "../components/Carrousel/Threefilm";

export default function Home({ setPage }) {
  return (
    <div>
      <CarrouselThreeFilms setPage={setPage} />
      <MultipleFilms setPage={setPage} />
    </div>
  );
}
