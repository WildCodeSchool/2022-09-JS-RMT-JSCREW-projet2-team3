function Articles({ text, image, alt, position }) {
  return (
    <div className="my-4 mx-2">
      {position === "right" ? (
        <article className="row">
          <div className="col-5 col-md-8">
            <img src={image} alt={alt} className="w-100" />
          </div>
          <p className="col-7 col-md-4">{text}</p>
        </article>
      ) : (
        <article className="row">
          <p className="col-7 col-md-4">{text}</p>
          <div className="col-5 col-md-8">
            <img src={image} alt={alt} className="w-100" />
          </div>
        </article>
      )}
    </div>
  );
}

export default Articles;
