import React from "react";

let timer;
function Compteur() {
  const [counterState, setCounter] = React.useState(8796);
  React.useEffect(() => {
    clearInterval(timer);
    timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 670);

    return () => clearInterval(timer);
  }, [counterState]);

  return <div>{counterState}</div>;
}

export default Compteur;
