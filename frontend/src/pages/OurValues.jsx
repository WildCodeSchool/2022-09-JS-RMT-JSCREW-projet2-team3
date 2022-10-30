import Articles from "@components/Articles";

function OurValues() {
  return (
    <div className="container-fluid">
      <header>
        <h1>Our Values</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure ea aut
          quod beatae, vero molestiae sit dolore quidem neque tempore, quis eum
          qui quaerat distinctio odio fugiat in fuga similique mollitia
          explicabo inventore adipisci! Optio, iure harum cumque reiciendis
          natus, nesciunt quaerat quas obcaecati veniam magnam animi itaque
          velit rerum.
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
          laboriosam nulla tempora consectetur officia facere, beatae."
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
        consectetur veniam unde cumque reiciendis optio"
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
