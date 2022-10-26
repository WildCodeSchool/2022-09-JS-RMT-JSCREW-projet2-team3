function NavBar() {
  return (
    <nav>
      <div className="container-fluid ">
        <button className="navbar-brand" type="button">
          <img
            src="#"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          StreamWood
        </button>
      </div>
      <ul>
        <li>Film</li>
        <li>Mon compte</li>
        <li>Nos valeurs</li>
      </ul>
      <form>
        <input type="text" />
        <button type="button">BTN</button>
      </form>
    </nav>
  );
}

export default NavBar;
