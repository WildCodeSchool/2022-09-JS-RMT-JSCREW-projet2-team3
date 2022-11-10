import { useState } from "react";

import NavBar from "@components/NavBar";
import Compteur from "@components/Compteur";
import Subscribe from "@components/Subscribe";
import Footer from "@components/Footer";

import Home from "@pages/Home";
import AllProduct from "@pages/AllProduct";
import OneProduct from "@pages/OneProduct";
import Account from "@pages/Account";
import OurValues from "@pages/OurValues";

import filmsData from "@services/films";

import "./App.css";

function App() {
  const [page, setPage] = useState({ path: "Home", id: null });

  return (
    <div className="App">
      <NavBar setPage={setPage} />
      {page.path === "Home" && <Home filmData={filmsData} />}
      {page.path === "AllProduct" && (
        <AllProduct filmData={filmsData} setPage={setPage} />
      )}
      {page.path === "OneProduct" && <OneProduct id={page.id} />}
      {page.path === "Account" && <Account filmData={filmsData} />}
      {page.path === "OurValues" && <OurValues filmData={filmsData} />}
      <Compteur />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
