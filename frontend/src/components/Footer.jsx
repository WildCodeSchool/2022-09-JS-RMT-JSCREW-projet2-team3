function Footer() {
  return (
    <div className="footer">
      <input className="name" type="text" name="name" />
      <input
        className="adresseEmail"
        type="text"
        adresseEmail="Adresse Email"
      />
      <textarea className="message">Tapper votre text</textarea>
      <button type="button" className="btn btn-info">
        Envoyer
      </button>
      <div>
        <div>
          <ul className="footer-social-link">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Google</li>
            <li>linkedin</li>
            <li>instagram</li>
          </ul>
        </div>
      </div>
      <h1 className="nav_programme">Programme</h1>
      <hr />
      <ul className="nav-categorie">
        <li>Action</li>
        <li>Animation</li>
        <li>Aventure</li>
        <li>Comédie</li>
        <li>Drame</li>
        <li>Fantastique</li>
        <li>Horreur</li>
        <li>Mystère</li>
        <li>Policier</li>
        <li>Romance</li>
        <li>Science-Fiction</li>
        <li>Thriller</li>
      </ul>
      <h1 className="nav_services">Services</h1>
      <hr />
      <ul className="nav-services">
        <li>Nos valeurs</li>
        <li>Mention légales</li>
        <li>Cookies</li>
        <li>CGV</li>
      </ul>
    </div>
  );
}

export default Footer;
