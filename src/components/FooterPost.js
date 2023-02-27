import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import FooterIcons from "./FooterIcons";
import UserName from "./UserName";

function FooterPost({ caption, publication_Date }) {
  const [showComents, setShowComents] = useState(false);
  return (
    <>
      <FooterIcons />

      <p>Número de likes</p>

      <p>
        <UserName /> {caption}
      </p>
      <p> {publication_Date}</p>
      <button
        className="showComments"
        onClick={() => {
          setShowComents(!showComents);
        }}
      >
        Ver comentarios
      </button>

      {showComents && <CommentList />}
      <p className="commentForm">
        <CommentForm />
      </p>
    </>
  );
}

export default FooterPost;
