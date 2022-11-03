import React from "react";

function NavButton(props) {
  return (
    <button
      className="navbar-toggler"
      id="navbarPolice"
      onClick={props.onClick}
      type="button"
    >
      {props.children}
    </button>
  );
}

export default NavButton;
