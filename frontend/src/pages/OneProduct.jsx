import "./OneProduct.css";

function OneProduct({ filmData }) {
  return (
    <div className="container-fluid">
      <div className="filmCard">
        <img
          className="img-fluid rounded mx-auto d-block movie-image"
          src={filmData.backdrop_path}
          alt={filmData.original_title}
        />
        <div className="container-btn">
          <button
            type="button"
            className="btn text-white btn-md ms-3 me-2 mt-5 btn-css"
          >
            <b>Voir</b>
          </button>
          <button
            type="button"
            className="btn text-white btn-md me-2 mt-5 btn-css"
          >
            <b>Popularité</b>
          </button>
          <button
            type="button"
            className="btn text-white btn-md me-2 mt-5 btn-css"
          >
            <b>Vote : {filmData.vote_average}</b>
          </button>
        </div>
        <div className="content">
          <h3 className="main-title text-start font-weight-bold ms-3 mt-5">
            {filmData.original_title}
          </h3>
          <div className="container ms-0">
            <div className="d-flex justify-content-start">
              <span className="text-start ms-2 me-4">
                Genre : {filmData.genre_ids}
              </span>
              <span className="text-start me-2">
                Sortie : {filmData.release_date}
              </span>
            </div>
          </div>
          <p className="text-start ms-3 mt-5">{filmData.overview}</p>
        </div>
        <h5 className="text-start ms-3 mb-1 mt-3">Suggestions</h5>
      </div>
    </div>
  );
}

export default OneProduct;
