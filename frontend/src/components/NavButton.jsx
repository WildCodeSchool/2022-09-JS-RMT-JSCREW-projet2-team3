import React from "react";

function NavButton(props) {
  const { onClick, children } = props;
  return (
    <button
      className="navbar-toggler"
      id="navbarPolice"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default NavButton;
