function NavBar() {
  return (
    <nav className="navbar d-flex mb-3 bg-light">
      <div className="me-auto p-2">
        <button className="navbar-toggler" type="button">
          <img
            src="#"
            alt="Logo"
            width="30"
            height="24"
            className="navbar-brand"
          />
          StreamWood
        </button>
      </div>
      <ul className="d-flex p-2">
        <li className="nav-link active">Film</li>
        <li className="nav-link active">Mon compte</li>
        <li className="nav-link active">Nos valeurs</li>
      </ul>
      <div className="d-flex mb-3">
        <form className="d-flex">
          <input
            className="form-control me-2"
            placeholder="Recherche"
            type="text"
          />
          <button className="navbar-toggler" type="button">btn</button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
