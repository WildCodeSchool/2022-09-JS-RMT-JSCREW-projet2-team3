import Home from "@pages/Home";
import filmsData from "@services/films";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home filmsData={filmsData} />
      <p className="text-primary">coucou</p>
    </div>
  );
}

export default App;
