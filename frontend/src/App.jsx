import Home from "@pages/Home";
import AllProduct from "@pages/AllProduct";
import OneProduct from "@pages/OneProduct";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Compteur from "@components/Compteur";
import Subscribe from "@pages/Subscribe";
import OurValues from "@pages/OurValues";
import filmsData from "@services/films";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home filmsData={filmsData} />
      <AllProduct filmsData={filmsData} />
      <OneProduct filmsData={filmsData} />
      <Compteur />
      <Subscribe />
      <Footer />
      <OurValues />
    </div>
  );
}

export default App;
