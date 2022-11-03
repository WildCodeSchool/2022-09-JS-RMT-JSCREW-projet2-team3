import NavButton from "./NavButton";

function NavBar({ setPage }) {
  return (
    <nav className="navbar d-flex p-0" id="navbar">
      <div className="me-auto p-2">
        <NavButton
          className="d-flex mb-3 align-items-center"
          onClick={() => setPage("Home")}
        >
          <img
            src="./src/assets/picture/logo_vert_p2.png"
            alt="Logo"
            width="70"
            height="70"
            className="navbar-brand"
          />
          <div className="d-none d-md-block">StreamWood</div>
        </NavButton>
      </div>
      <div className="d-flex p-2">
        <NavButton onClick={() => setPage("AllProduct")}>Films</NavButton>
        <NavButton className="d-md-flex" onClick={() => setPage("Account")}>
          Mon compte
        </NavButton>
        <NavButton
          className="d-none d-md-block"
          onClick={() => setPage("Home")}
        >
          Nos valeurs
        </NavButton>
      </div>
      <div className="d-flex mb-3">
        <form className="d-flex">
          {/* <input
            className="form-control me-2"
            placeholder="Recherche"
            type="text"
          /> */}
          <button className="navbar-toggler" type="button">
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
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
