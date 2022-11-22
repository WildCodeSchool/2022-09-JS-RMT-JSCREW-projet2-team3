import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

import Home from "@pages/Home";
import AllProduct from "@pages/AllProduct";
import OneProduct from "@pages/OneProduct";
import Account from "@pages/Account";
import OurValues from "@pages/OurValues";

import "./App.css";

function App() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AllProduct" element={<AllProduct />} />
            <Route
              path="/AllProduct/:id"
              element={<OneProduct connected={connected} />}
            />
            <Route
              path="/Account"
              element={<Account setConnected={setConnected} />}
            />
            <Route path="/OurValues" element={<OurValues />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
