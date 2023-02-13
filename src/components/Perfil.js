import React from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";
import PostList from "./PostList";

const Perfil = ({ img, name }) => {
  return (
    <article class="user">
      <Avatar img={img} name={name} />
      <UserName name={name} />
      <PostList />
    </article>
  );
};

export default Perfil;
