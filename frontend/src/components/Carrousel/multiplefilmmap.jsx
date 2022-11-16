import React from "react";

function Multiplefilmmap({ note, setPage }) {
  return (
    <div className="Multiplefilmmap">
      <div className="owl-item">
        <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center bbb_viewed_image">
          <input
            type="image"
            src={note.poster_path}
            className="imagecarouselligne card-img-top"
            alt={note.id}
            onClick={() => setPage({ path: "OneProduct", id: note.id })}
          />
        </div>
      </div>
    </div>
  );
}

export default Multiplefilmmap;
