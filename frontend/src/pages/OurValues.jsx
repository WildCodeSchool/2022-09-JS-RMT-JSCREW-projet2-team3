import Articles from "@components/Articles";

function OurValues() {
  return (
    <div className="container-fluid">
      <header>
        <h1>our values</h1>
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
        src="https://www.jardinautes.com/wp-content/uploads/2021/10/quel-arbre-fruitier-planter-dans-son-jardin.jpg"
        alt="arbre plante"
        className="img-fluid"
      />
      <div className="container-fluid">
        <Articles />
          <div className="row">
           <article className="">
            <img
              src="https://www.neozone.org/blog/wp-content/uploads/schema-and-structured-data-for-wp/panneaux-solaires-plus-efficaces-moins-cher-durables-nouveau-materiau-001-1200x675.jpg"
              alt="panneaux electrique"
            />
            <p className="">
              Nos panneaux solaires produisent le double de l’énergie nécessaire
              pour alimenter vos recherches. Cette ressource renouvelable permet
              de réduire l’utilisation de combustibles fossiles.
            </p>
          </article>
          </div>
          <div className="row">
          <article className="">
            <img
              src="https://www.neumediatech.com/wp-content/uploads/2018/02/ecologie-informatique-web-732x380.jpg"
              alt="devellopement vert"
            />
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea
              consectetur veniam unde cumque reiciendis optio
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
