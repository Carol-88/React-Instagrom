import React from "react";
import FooterPost from "./FooterPost";
import HeaderPost from "./HeaderPost";
import ContentPost from "./ContentPost";

function Post({
  photoName,
  location,
  caption,
  publicationDate,
  id,
  idUser,
  likes,
  likedByLogguedUser,
}) {
  return (
    <>
      <HeaderPost />
      <ContentPost
        photoName={photoName}
        location={location}
        caption={caption}
        publicationDate={publicationDate}
      />
      <FooterPost likes={likes} likedByLogguedUser={likedByLogguedUser} />
    </>
  );
}

export default Post;
