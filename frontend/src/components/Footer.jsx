function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="footer_name_adresse col-xs-2 col-sm-8 col-md-12 col-lg-12">
              <input
                className="footer_name form-control"
                type="text"
                name="name"
                placeholder="Votre nom"
              />
              <input
                className="footer_adresse form-control"
                type="email"
                adresseEmail="Adresse Email"
                placeholder="Votre adresse Email"
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <textarea
                className="form-control"
                placeholder="Tapper votre text"
              />
            </div>
            <div className="footer_btn">
              <button type="button" className="btn btn-info">
                Envoyer
              </button>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12">
              <ul className="footer_social_link">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Google</li>
                <li>linkedin</li>
                <li>instagram</li>
              </ul>
            </div>
            <h1 className="nav_programme">Programme</h1>
            <hr />
            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12">
              <ul className="nav-categorie">
                <li>Action</li>
                <li>Animation</li>
                <li>Aventure</li>
                <li>Comédie</li>
                <li>Drame</li>
                <li>Fantastique</li>
              </ul>
              <ul className="nav-categorie">
                <li>Horreur</li>
                <li>Mystère</li>
                <li>Policier</li>
                <li>Romance</li>
                <li>Science-Fiction</li>
                <li>Thriller</li>
              </ul>
            </div>
            <h1 className="nav_services">Services</h1>
            <hr />
            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12">
              <ul className="nav-services">
                <li>Nos valeurs</li>
                <li>Mention légales</li>
                <li>Cookies</li>
                <li>CGV</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
