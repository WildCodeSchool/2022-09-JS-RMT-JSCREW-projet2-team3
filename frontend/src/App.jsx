import { useState } from "react";

import NavBar from "@components/NavBar";
import Compteur from "@components/Compteur";
import Subscribe from "@components/Subscribe";
import Footer from "@components/Footer";

import Home from "@pages/Home";
import AllProduct from "@pages/AllProduct";
import OneProduct from "@pages/OneProduct";
import Account from "@pages/Account";

import filmsData from "@services/films";

import "./App.css";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="App">
      <NavBar setPage={setPage} />
      {page === "Home" && <Home filmsData={filmsData} />}
      {page === "AllProduct" && <AllProduct filmsData={filmsData} />}
      {page === "OneProduct" && <OneProduct filmsData={filmsData} />}
      {page === "Account" && <Account filmsData={filmsData} />}
      <Compteur />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
