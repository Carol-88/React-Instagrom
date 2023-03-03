import React, { useContext, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
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

    const res = await fetch(`${process.env.REACT_APP_BACKEND}/newUser`, {
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

  if (token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="allForm">
      <div className="formulario">
        <h2 className="title">Instagrom</h2>

        <p
          className="pForm"
          style={{
            paddingBottom: "20px",
            paddingTop: "20px",
            fontSize: "20px",
            alignContent: "center",
          }}
        >
          Regístrate para ver fotos y videos de tus amigos.
        </p>

        <button className="buttonForm" type="submit">
          Iniciar sesión con Facebook
        </button>

        <p className="separation">______________ o ______________</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="spaceForm">
            <label htmlFor="userform"></label>
            <input
              className="input"
              id="userform"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              required={true}
            ></input>
          </div>

          <div className="spaceForm">
            <label htmlFor="emailform"></label>
            <input
              className="input"
              id="emailform"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Correo eletrónico"
              value={email}
              required={true}
            ></input>
          </div>

          <div className="spaceForm">
            <label htmlFor="password"></label>
            <input
              className="input"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Contraseña"
              value={password}
              required={true}
            ></input>
          </div>

          <div className="allForm">
            <button className="buttonForm" type="submit">
              Siguiente
            </button>
          </div>
        </form>
      </div>

      <div className="formulario">
        <p className="text">
          ¿Tienes una cuenta?
          <NavLink className="link" to="/login">
            Inicia sesión
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
