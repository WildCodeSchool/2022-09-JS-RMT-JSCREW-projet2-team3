import Articles from "@components/Articles";

function OurValues() {
  return (
    <div className="container-fluid">
      <header>
        <h1>Our Values</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          necessitatibus deleniti officia eveniet facere, commodi maxime, quae
          esse animi sit corporis ex saepe laboriosam omnis sapiente ratione ea
          ut reprehenderit! Nemo quaerat odio esse reprehenderit, voluptates
          tempora sint tempore illo suscipit? Tempora, aliquam sequi assumenda
          maiores ab qui magnam distinctio odio quidem quae, reprehenderit dicta
          quaerat perspiciatis ut doloremque voluptates?
        </p>
      </header>
      <img
        src="./src/assets/image/arbreperefils.jpeg"
        alt="arbre plante"
        className="img-fluid"
      />
      <div className="container">
        <div className="row">
          <Articles
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          laboriosam nulla tempora consectetur officia facere "
            image="./src/assets/image/serveur.png"
            alt="serveur"
            position="right"
          />
          <Articles
            text="Nos panneaux solaires produisent le double de l’énergie nécessaire
         pour alimenter vos recherches. Cette ressource renouvelable permet
         de réduire l’utilisation de combustibles fossiles."
            image="./src/assets/image/panneauvert.png"
            alt="panneaux electrique"
            position="left"
          />
          <Articles
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea
        consectetur veniam unde cumque reiciendis optioLorem ipsum dolor sit amet consectetur"
            image="./src/assets/image/developmentweb.png"
            alt="devellopement vert"
            position="right"
          />
        </div>
      </div>
    </div>
  );
}

export default OurValues;
