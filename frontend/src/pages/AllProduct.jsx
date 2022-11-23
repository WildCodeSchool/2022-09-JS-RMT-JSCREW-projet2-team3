import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PosterMovie from "@components/PosterMovie";
import updateMeta from "@services/Meta";
import { useSearchParams } from "react-router-dom";
import fleche from "@assets/picture/fleche.menu.png";


function AllProduct() {
  const [filmsData, setFilmsData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category"));
  const handleCategory = (cat) => {
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams();
    }
    setCategory(cat);
  };

  const launchUserAlert = () => {
    toast.error(`Page not found : this page is inaccessible !`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/Films`)
      .then((response) => response.json())
      .then((data) => {
        updateMeta("All Movies", "the page of the all movies");
        setFilmsData(data);
      })
      .catch((error) => {
        launchUserAlert();
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setCategory(searchParams.get("category"));
  }, [searchParams]);

  return (
    <div className="container">
      <div className="d-flex p-2">
        <button
          type="button"
          className="navbar-toggler d-flex align-items-stretch"
          onClick={() => handleCategory()}
        >
          <h3 className="text-white">All movies</h3>
        </button>
        <div>
          <button
            type="button"
            className="navbar-toggler container"
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="d-flex align-items-center">
              <h3 className="text-white text-start">Category</h3>
              <img
                src={fleche}
                alt="icone-fleche"
                width="15"
                height="15"
                className="m-2"
              />
            </div>
          </button>
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            className="menuDeroulant p-2 navbar-toggler d-flex flex-row position-absolute"
          >
            {showMenu && (
              <div className="navbar-nav">
                <button
                  type="button"
                  onClick={() => handleCategory("Action")}
                  className="mct navbar-toggler text-start"
                >
                  Action
                </button>
                <button
                  type="button"
                  onClick={() => handleCategory("Animation")}
                  className="mct navbar-toggler text-start"
                >
                  Animation
                </button>
                <button
                  type="button"
                  onClick={() => handleCategory("Adventure")}
                  className="mct navbar-toggler text-start"
                >
                  Adventure
                </button>
                <button
                  type="button"
                  onClick={() => handleCategory("Comedy")}
                  className="mct navbar-toggler text-start"
                >
                  Comedy
                </button>
                <button
                  type="button"
                  onClick={() => handleCategory("Drama")}
                  className="mct navbar-toggler text-start"
                >
                  Drama
                </button>
                <button
                  type="button"
                  onClick={() => handleCategory("Fantasy")}
                  className="mct navbar-toggler text-start"
                >
                  Fantasy
                </button>
              </div>
            )}
            {showMenu && (
              <div className="mct navbar-nav text-start">
                <button
                  type="button"
                  onClick={() => handleCategory("Horror")}
                  className="mct navbar-toggler text-start"
                >
                  Horror
                </button>
                <button
                  type="button"
                  onClick={() => handleCategory("Mystery")}
                  className="mct navbar-toggler text-start"
                >
                  Mystery
                </button>
                <button
                  type="button"
                  onClick={() => handleCategory("Crime")}
                  className="mct navbar-toggler text-start"
                >
                  Crime
                </button>
                <button
                  type="button"
                  onClick={() => handleCategory("Romance")}
                  className="mct navbar-toggler text-start"
                >
                  Romance
                </button>
                <button
                  type="button"
                  onClick={() => handleCategory("Science Fiction")}
                  className="mct navbar-toggler text-start"
                >
                  S-Fiction
                </button>
                <button
                  type="button"
                  onClick={() => handleCategory("Thriller")}
                  className="mct navbar-toggler text-start"
                >
                  Thriller
                </button>
              </div>
            )}
          </button>
        </div>
      </div>
      {filmsData
        .filter((movie) => movie.genre_ids === category || !category)
        .map((movie) => (
          <PosterMovie movie={movie} />
        ))}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default AllProduct;
