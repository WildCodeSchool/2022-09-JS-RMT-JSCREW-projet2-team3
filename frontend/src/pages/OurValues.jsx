import Articles from "@components/Articles";
import "./OurValues.css";

function OurValues() {
  return (
    <div className="container">
      <div className="row">
        <header>
          <h1 className="mb-4">Our Values</h1>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-xs-12 col-lg-8">
                <img
                  src="./src/assets/image/arbreperefils.jpeg"
                  alt="arbre plante"
                  className="img-fluid rounded float-0 w-75"
                />
              </div>
              <p className="col-xs-12 col-lg-4 mt-3">
                Streamwood is the ideal streaming solution if you want to do
                something for the environment. We plant all over the world.
                Trees are central to environmental well-being, human health and
                economic stability. Our objective ? Get your trust, that's why
                we publish our monthly financial reports and tree planting
                receipts. We are thus fulfilling our duty of accountability
                while allowing you to follow our journey towards the
                reforestation of the planet.
              </p>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row mt-4">
            <Articles
              text="All streamwood hosting solutions are based on virtualization because it consumes less energy and allows better optimization of consumption. "
              image="./src/assets/image/serveur.png"
              alt="serveur"
              position="right"
            />
            <Articles
              text="Our solar panels produce twice the energy needed
            to fuel your research. This renewable resource allows
            reduce the use of fossil fuels."
              image="./src/assets/image/panneauvert.png"
              alt="panneaux electrique"
              position="left"
            />
            <Articles
              text="“A continuous improvement approach that aims to reduce the environmental, social and economic impacts of digital technology”."
              image="./src/assets/image/developmentweb.png"
              alt="devellopement vert"
              position="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
