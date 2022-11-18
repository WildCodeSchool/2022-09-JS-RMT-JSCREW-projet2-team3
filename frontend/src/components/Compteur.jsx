import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let timer;
function Compteur() {
  const [counterState, setCounter] = useState(81796);
  useEffect(() => {
    timer = setInterval(() => {
      const incr = Math.floor(Math.random() * 5);
      setCounter((prev) => prev + incr);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="mb-0 mt-5">
        <Link
          to="OurValues"
          className="btn btn-streamwood-compteur text-white "
        >
          <div className="d-flex align-items-center">
            <img
              src="./src/assets/image/plant-d-arbre.png"
              alt="icone compteur"
              height={40}
              className="m-2"
            />
            <div className="display-4">{counterState}</div>
          </div>
          <p className="m-0">
            <strong>Learn more 👈</strong>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Compteur;
