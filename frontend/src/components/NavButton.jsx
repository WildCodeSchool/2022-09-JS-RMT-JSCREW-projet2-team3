import React from "react";

function NavButton({ handlePage, css, children }) {
  return (
    <button
      className={`navbar-toggler ${css}`}
      onClick={handlePage}
      type="button"
    >
      {children}
    </button>
  );
}

export default NavButton;
