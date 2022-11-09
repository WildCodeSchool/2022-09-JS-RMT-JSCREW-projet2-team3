import PosterMovie from "@components/PosterMovie";
import {useEffect, useState} from 'react';

function AllProduct() {
  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/movies')
    .then((response) => response.json())
    .then((data) => setFilmsData(data)) 
    .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <div className="d-flex text-align-center">
        <h2 className="me-3">Tous les films</h2>
        <h3>Catégories</h3>
      </div>
      {filmsData.map((movie) => <PosterMovie movie={movie} />)};
    </div>
  );
}

export default AllProduct;
