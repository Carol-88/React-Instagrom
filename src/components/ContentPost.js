import React from "react";

function ContentPost({ photoName, photo }) {
  return <img className="post-img" src={photo} alt={photoName} />;
}

export default ContentPost;
