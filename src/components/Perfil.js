import React, { useContext, useEffect, useState } from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";
import PostList from "./PostList";
import { TokenContext } from "..";
import { Navigate } from "react-router-dom";

const Perfil = (data) => {
  const [token] = useContext(TokenContext);
  const [loading, setLoading] = useState(true);

  //faltaría un estado para gestionar errores posibles (usar en el catch de abajo)
  const [userName, setUserName] = useState(null);
  const [photos, setPhotos] = useState(null);

  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [birthday, setBirthday] = useState(null);

  useEffect(() => {
    async function loadUserProfile() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND}/profile`,
          { headers: { Authorization: token } }
        );
        const { data } = await response.json();

        console.log("DATA", data); //esto es lo que hay que renderizar

        setUserName(data.username);
        setPhotos(data.photos);
        // setName(data.name);
        // setLastName(data.lastName);
        // setBirthday(data.birthday);
      } catch (error) {
        console.log("PENDIENTE GESTIONAR MEJOR ESTE ERROR");
      } finally {
        setLoading(false);
      }
    }

    if (token) loadUserProfile();
  }, [token]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (loading) return <p>Cargando...</p>;

  return (
    <article class="user">
      <Avatar />
      <UserName name={userName} />
      <p>{data.name}</p>
      <PostList photos={photos} />
    </article>
  );
};

export default Perfil;
