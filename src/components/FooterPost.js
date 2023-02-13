import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import UserName from "./UserName";

function FooterPost({ location, caption, publication_Date }) {
  return (
    <>
      <img src="/public/like.png" alt="like" />
      <img src="./public/like.png" alt="comment" />
      <img src="./public/like.png" alt="share" />
      <img src="./public/like.png" alt="keep-post" />
      <p>Numero de likes</p>
      <p> {location} </p>
      <p>
        <UserName /> {caption}
      </p>
      <p> {publication_Date}</p>
      <button>
        Ver comentarios <CommentList />
      </button>
      <p>
        <CommentForm />
      </p>
    </>
  );
}

export default FooterPost;
