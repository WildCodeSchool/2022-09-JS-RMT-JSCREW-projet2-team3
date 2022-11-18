import React from "react";

let timer;
function Compteur() {
  const [counterState, setCounter] = React.useState(81796);
  React.useEffect(() => {
    clearInterval(timer);
    timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 800);

    return () => clearInterval(timer);
  }, [counterState]);

  return (
    <div className="container">
      <div className="mb-0 mt-5">
        <button
          type="button"
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
        </button>
      </div>
    </div>
  );
}

export default Compteur;
