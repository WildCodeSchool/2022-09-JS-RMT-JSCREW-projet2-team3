import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PosterMovie from "@components/PosterMovie";

function AllProduct() {
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
    fetch("http://localhost:5000/movies")
      .then((response) => response.json())
      .then((data) => setFilmsData(data))
      .catch((error) => {
        launchUserAlert();
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="d-flex text-align-center">
        <h2 className="me-3">All movies</h2>
        <h3>Category</h3>
      </div>
      {filmsData &&
        filmsData.map((movie, index) => (
          <PosterMovie
            movie={movie}
            handlePage={() => setPage({ path: "OneProduct", id: index })}
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
  )
}

export default AllProduct;
