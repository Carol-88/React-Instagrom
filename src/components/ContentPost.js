// import React, { useEffect, useState } from "react";

function ContentPost({ name, caption, location, publication_date }) {
  console.log("PROPIEDADES POST", {
    name,
    caption,
    location,
    publication_date,
  });
  return (
    <div style={{ border: "1px solid red" }}>
      <figure>
        <img
          className="photo-post"
          src={`${process.env.REACT_APP_BACKEND}/photos/${name}`}
          alt={caption}
          location={location}
          publication_date={publication_date}
        />
      </figure>
      <h2>{caption}</h2>
      <p>{name}</p>

      <p>{location ? { location } : null}Ubicación</p>

      <p>{publication_date}Fecha de publicación</p>
      {/* <p>{new Date(publication_date).toLocaleString()}Fecha de publicación</p> */}
    </div>
  );
}

export default ContentPost;
