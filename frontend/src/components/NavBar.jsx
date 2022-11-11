import { useState } from "react";
import NavButton from "./NavButton";

function NavBar({ setPage }) {
  const [show, setShow] = useState(true);

  return (
    <nav
      className="navbar d-flex p-0 justify-content-center sticky-top"
      id="navbar"
    >
      <div className="me-auto d-none d-md-inline">
        <NavButton handlePage={() => setPage({ path: "Home", id: null })}>
          <img
            src="./src/assets/picture/logo_vert_p2.png"
            alt="Logo"
            width="70"
            height="70"
            className="navbar-brand d-none d-md-inline"
          />
          <div className="d-none d-md-inline text-white">StreamWood</div>
        </NavButton>
      </div>
      <div className="d-flex">
        <NavButton
          css="text-white d-md-block d-md-none me-3"
          handlePage={() => setPage({ path: "AllProduct", id: null })}
        >
          Movies
        </NavButton>
        <NavButton handlePage={() => setPage({ path: "Home", id: null })}>
          <div className="d-flex d-md-none pe-2">
            <img
              src="./src/assets/picture/logo_vert_p2.png"
              alt="Logo"
              width="70"
              height="70"
              className="navbar-brand"
            />
          </div>
        </NavButton>
        <NavButton handlePage={() => setPage({ path: "Account", id: null })}>
          <div className="d-md-block d-md-none me-3">
            <img
              src="./src/assets/picture/user_1.png"
              alt="icone_user"
              width="25"
              height="35"
              className="navbar-brand"
            />
          </div>
        </NavButton>
        <NavButton
          css="d-none d-md-block text-white"
          handlePage={() => setPage({ path: "AllProduct", id: null })}
        >
          Movies
        </NavButton>
        <NavButton
          css="d-md-flex text-white d-none d-md-inline"
          handlePage={() => setPage({ path: "Account", id: null })}
        >
          Account
        </NavButton>
        <NavButton
          css="d-none d-md-block text-white"
          handlePage={() => setPage({ path: "OurValues", id: null })}
        >
          Values
        </NavButton>
      </div>
      <div className="d-flex d-none d-md-inline">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShow(!show)}
        >
          {show === true ? "" : ""}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#fff"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
        {show && (
          <form>
            <input
              className="form-control me-2"
              placeholder="Search"
              type="text"
            />
          </form>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
