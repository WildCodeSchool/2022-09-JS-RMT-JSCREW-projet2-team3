function NavBar({ setPage }) {
  return (
    <nav className="navbar d-flex p-0" id="navbar">
      <div className="me-auto p-2">
        <button
          onClick={() => setPage("Home")}
          className="d-flex mb-3 navbar-toggler align-items-center"
          type="button"
        >
          <img
            src="./src/assets/picture/logo_vert_p2.png"
            alt="Logo"
            width="70"
            height="70"
            className="navbar-brand"
          />
          <div className="d-none d-md-block" id="navbarPolice">
            StreamWood
          </div>
        </button>
      </div>
      <div className="d-flex p-2">
        <button
          type="button"
          onClick={() => setPage("AllProduct")}
          className="navbar-toggler"
          id="navbarPolice"
        >
          Films
        </button>
        <button
          type="button"
          onClick={() => setPage("Account")}
          className="navbar-toggler d-md-flex"
          id="navbarPolice"
        >
          Mon compte
        </button>
        <button
          type="button"
          onClick={() => setPage("AllProduct")}
          className="navbar-toggler d-none d-md-block"
          id="navbarPolice"
        >
          Nos valeurs
        </button>
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
