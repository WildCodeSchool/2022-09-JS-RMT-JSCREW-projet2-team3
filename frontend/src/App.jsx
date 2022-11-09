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
  const [page, setPage] = useState({ path: "", id: null });

  return (
    <div className="App">
      <NavBar setPage={setPage} />
      {page.path === "Home" && <Home filmsData={filmsData} />}
      {page.path === "AllProduct" && <AllProduct filmsData={filmsData} />}
      {page.path === "OneProduct" && <OneProduct filmsData={filmsData} />}
      {page.path === "Account" && <Account filmsData={filmsData} />}
      {page.path === "OurValues" && <OurValues filmsData={filmsData[1]} />}
      <Compteur />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
