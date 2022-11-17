function Articles({ text, image, alt, position }) {
  return (
    <div className="col-lg-4 col-12">
      <div className="my-4 mx-2">
        {position === "right" ? (
          <article className="row align-items-center">
            <div className="col-5 col-lg-6">
              <img src={image} alt={alt} className="w-100" />
            </div>
            <p className="col-7 col-lg-6">{text}</p>
          </article>
        ) : (
          <article className="row align-items-center">
            <div className="col-5 col-lg-6 	d-none d-sm-block">
              <img src={image} alt={alt} className="w-100" />
            </div>
            <p className="col-7 col-lg-6 ">{text}</p>
            <div className="col-5 col-lg-6 d-block d-sm-none">
              <img src={image} alt={alt} className="w-100" />
            </div>
          </article>
        )}
      </div>
    </div>
  );
}

export default Articles;
