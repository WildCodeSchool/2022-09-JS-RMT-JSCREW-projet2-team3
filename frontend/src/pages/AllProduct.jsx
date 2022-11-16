import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PosterMovie from "@components/PosterMovie";

function AllProduct({ setPage }) {
  const [filmsData, setFilmsData] = useState([]);

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
    fetch("http://localhost:5000/Films")
      .then((response) => response.json())
      .then((data) => setFilmsData(data))
      .catch((error) => {
        launchUserAlert();
        console.error(error);
      });
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container">
      <div className="d-flex p-2">
        <button
          type="button"
          className="navbar-toggler d-flex align-items-stretch"
        >
          <h2 className="text-white">All movies</h2>
        </button>
        <div>
          <button
            type="button"
            className="navbar-toggler container"
            onClick={() => setShowMenu(!showMenu)}
          >
            <h2 className="text-white text-start">Category</h2>
          </button>
          <div className="menuDeroulant navbar-nav d-flex flex-row position-absolute">
            {showMenu && (
              <div className="navbar-nav">
                <button
                  type="button"
                  className="navbar-toggler text-start text-white"
                >
                  Action
                </button>
                <button
                  type="button"
                  className="navbar-toggler text-start text-white"
                >
                  Animation
                </button>
                <button
                  type="button"
                  className="navbar-toggler text-start text-white"
                >
                  Adventure
                </button>
                <button
                  type="button"
                  className="navbar-toggler text-start text-white"
                >
                  Comedy
                </button>
                <button
                  type="button"
                  className="navbar-toggler text-start text-white"
                >
                  Drame
                </button>
                <button
                  type="button"
                  className="navbar-toggler text-start text-white"
                >
                  Fantasy
                </button>
              </div>
            )}
            {showMenu && (
              <div className="navbar-nav text-start">
                <button
                  type="button"
                  className="navbar-toggler text-start text-white"
                >
                  Horror
                </button>
                <button
                  type="button"
                  className="navbar-toggler text-start text-white"
                >
                  Mystery
                </button>
                <button
                  type="button"
                  className="navbar-toggler text-start text-white"
                >
                  Crime
                </button>
                <button
                  type="button"
                  className="navbar-toggler text-start text-white"
                >
                  Romance
                </button>
                <button
                  type="button"
                  className="navbar-toggler text-start text-white"
                >
                  Science-F
                </button>
                <button
                  type="button"
                  className="navbar-toggler text-start text-white"
                >
                  Thriller
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {filmsData.map((movie) => (
        <PosterMovie
          movie={movie}
          handlePage={() => setPage({ path: "OneProduct", id: movie.id })}
        />
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
