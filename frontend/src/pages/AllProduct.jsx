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
                src="./src/assets/picture/fleche.menu.png"
                alt="icone-fleche"
                width="15"
                height="15"
                className="m-2"
              />
            </div>
          </button>
          <div className="menuDeroulant p-2 navbar-nav d-flex flex-row position-absolute">
            {showMenu && (
              <div className="navbar-nav">
                <button type="button" className="mct navbar-toggler text-start">
                  Action
                </button>
                <button type="button" className="mct navbar-toggler text-start">
                  Animation
                </button>
                <button type="button" className="mct navbar-toggler text-start">
                  Adventure
                </button>
                <button type="button" className="mct navbar-toggler text-start">
                  Comedy
                </button>
                <button type="button" className="mct navbar-toggler text-start">
                  Drama
                </button>
                <button type="button" className="mct navbar-toggler text-start">
                  Fantasy
                </button>
              </div>
            )}
            {showMenu && (
              <div className="mct navbar-nav text-start">
                <button type="button" className="mct navbar-toggler text-start">
                  Horror
                </button>
                <button type="button" className="mct navbar-toggler text-start">
                  Mystery
                </button>
                <button type="button" className="mct navbar-toggler text-start">
                  Crime
                </button>
                <button type="button" className="mct navbar-toggler text-start">
                  Romance
                </button>
                <button type="button" className="mct navbar-toggler text-start">
                  S-Fiction
                </button>
                <button type="button" className="mct navbar-toggler text-start">
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
