import React from "react";
import FooterPost from "./FooterPost";
import HeaderPost from "./HeaderPost";
import ContentPost from "./ContentPost";

function Post({ name, location, caption, publication_date }) {
  return (
    <>
      <HeaderPost />
      <ContentPost
        name={name}
        location={location}
        caption={caption}
        publication_date={publication_date}
      />
      <FooterPost />
    </>
  );
}

export default Post;
