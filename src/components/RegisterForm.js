import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { TokenContext } from "..";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useContext(TokenContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerUser = {
      username: username,
      email: email,
      password: password,
    };

    const serializedData = JSON.stringify(registerUser);
    // cambiar a nuestro server
    const res = await fetch("http://localhost:3050/register", {
      method: "POST",
      body: serializedData,
      headers: {
        "Content-type": "application/json",
      },
    });

    const responseBody = await res.json();
    const token = responseBody.accessToken;
    setToken(token);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  // if (!token) {
  // 	return <Navigate to="/login" />;
  // } else {
  // 	<Navigate to="/" />;
  // }

  return (
    <div style={{ border: "1px solid black" }}>
      <h2>Registro de usuario</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userform">Nombre de usuario: </label>
        <input
          id="userform"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Escribe tu nombre de usuario"
          value={username}
          required={true}
        ></input>
        <label htmlFor="emailform">Email: </label>
        <input
          id="emailform"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Escribe tu email"
          value={email}
          required={true}
        ></input>
        <label htmlFor="password">Contraseña: </label>
        <input
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          required={true}
        ></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default RegisterForm;
