import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "@components/NavBar";
import Compteur from "@components/Compteur";
import Subscribe from "@components/Subscribe";
import Footer from "@components/Footer";

import Home from "@pages/Home";
import AllProduct from "@pages/AllProduct";
import OneProduct from "@pages/OneProduct";
import Account from "@pages/Account";
import OurValues from "@pages/OurValues";

// import filmsData from "@services/films";

import "./App.css";

function App() {
  // const [page, setPage] = useState({ path: "Home", id: null });
  return (
    <div className="App">
      {/* { <NavBar setPage={setPage} />
      {page.path === "Home" && <Home filmsData={filmsData} setPage={setPage} />}
      {page.path === "AllProduct" && (
        <AllProduct filmData={filmsData} setPage={setPage} />
      )}
      {page.path === "OneProduct" && <OneProduct id={page.id} />}
      {page.path === "Account" && <Account filmData={filmsData} />}
      {page.path === "OurValues" && <OurValues filmData={filmsData} />} */}
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AllProduct" element={<AllProduct />} />
            <Route path="/OneProduct" element={<OneProduct />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/OurValues" element={<OurValues />} />
          </Routes>
          <Compteur />
          <Subscribe />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
