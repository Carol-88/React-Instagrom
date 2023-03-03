// import React, { useEffect, useState } from "react";

function ContentPost({ photoName, caption, location, publicationDate }) {
  return (
    <div style={{ border: "1px solid red" }}>
      <figure>
        <img
          className="photo-post"
          src={`${process.env.REACT_APP_BACKEND}/photos/${photoName}`}
          alt={caption}
        />
      </figure>
      <h2>{caption}</h2>

      {location && <p>Ubicación:{location}</p>}

      <p>{new Date(publicationDate).toLocaleString()}</p>
    </div>
  );
}

export default ContentPost;
