import Home from "@pages/Home";
import AllProduct from "@pages/AllProduct";
import OneProduct from "@pages/OneProduct";
import filmsData from "@services/films";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home filmsData={filmsData} />
      <AllProduct filmsData={filmsData} />
      <OneProduct filmsData={filmsData} />
      <p className="text-primary">coucou</p>
    </div>
  );
}

export default App;
