import PosterMovie from "@components/PosterMovie";
import filmsData from "@services/films";

function AllProduct({ setPage }) {
  return (
    <div className="container">
      <div className="d-flex text-align-center">
        <h2 className="me-3">Tous les films</h2>
        <h3>Catégories</h3>
      </div>
      {filmsData &&
        filmsData.map((movie) => (
          <PosterMovie
            movie={movie}
            handlePage={() => setPage({ path: "OneProduct", id: movie.id })}
          />
        ))}
    </div>
  );
}

export default AllProduct;
