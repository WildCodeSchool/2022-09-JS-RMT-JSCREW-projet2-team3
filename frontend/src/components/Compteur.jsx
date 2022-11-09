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
      <div className="row">
        <div className="">
          <button
            type="button"
            className="btn btn-compteur w-25 rounded-5 text-white display-1"
          >
            <img
              src="./src/assets/image/plantd'arbre.png"
              alt="icone compteur"
              height={40}
            />
            <div className="display-4">{counterState}</div>
            <p>
              <strong>Learn more 👈</strong>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Compteur;
