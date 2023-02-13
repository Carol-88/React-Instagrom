import React, { useContext } from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";
import PostList from "./PostList";
import { TokenContext } from "..";
import { Navigate } from "react-router-dom";

const Perfil = ({ img, name }) => {
  const [token, setToken] = useContext(TokenContext);

  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <article class="user">
      <Avatar img={img} name={name} />
      <UserName name={name} />
      <PostList />
    </article>
  );
};

export default Perfil;
