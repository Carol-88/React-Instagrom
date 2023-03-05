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
  photo,
}) {
  return (
    <div className="post-all">
      <HeaderPost />
      <ContentPost
        photoName={photoName}
        location={location}
        caption={caption}
        publicationDate={publicationDate}
      />
      <FooterPost
        likes={likes}
        photo={photo}
        likedByLogguedUser={likedByLogguedUser}
      />
    </div>
  );
}
export default Post;
