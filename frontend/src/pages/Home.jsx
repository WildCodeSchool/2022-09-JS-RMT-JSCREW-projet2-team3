import CarrouselThreeFilms from "../components/Carrousel/Threefilm";

export default function Home({ setPage }) {
  return (
    <div>
      <CarrouselThreeFilms setPage={setPage} />
      <h1>HOME</h1>
    </div>
  );
}
