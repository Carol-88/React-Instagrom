import React, { useState } from "react";
import Avatar from "./Avatar";

function PostForm() {
  const [newPost, setNewPost] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addPost = {
      caption: "caption",
      idUser: 1,
    };

    console.log("pasa por aquí");

    const serializedData = JSON.stringify(addPost);
    const res = await fetch("http://localhost:4000/addPhoto", {
      method: "POST",
      body: serializedData,
      headers: {
        "Content-type": "application/json",
      },
    });

    const responseBody = await res.json();
    const textPost = responseBody;
    setNewPost(textPost);
  };

  return (
    <>
      <Avatar />
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-post"></label>
        <input
          id="text-post"
          onChange={(e) => setNewPost(e.target.value)}
          type="text"
          placeholder="Escribe.."
        ></input>
        {/* FALTA FILE PARA SUBIR FOTO */}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default PostForm;
