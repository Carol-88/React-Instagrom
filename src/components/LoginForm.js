import React, { useContext, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { TokenContext } from "..";
// import { useEffect } from "react";

function LoginForm() {
  ////// TEMPORAL, MIENTRAS NO HAY "LOGOUT" /////

  //   useEffect(() => {
  //     localStorage.clear();
  //   }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useContext(TokenContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerUser = {
      email: email,
      password: password,
    };

    const serializedData = JSON.stringify(registerUser);
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
      method: "POST",
      body: serializedData,
      headers: {
        "Content-type": "application/json",
      },
    });

    const responseBody = await res.json();
    const token = responseBody.authToken;

    setToken(token);
    setEmail("");
    setPassword("");
  };

  if (token) {
    return <Navigate to="/inicio" />;
  } else {
    <Navigate to="/login" />;
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
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
          onChange={handleChangePassword}
          type="password"
          value={password}
          required={true}
        ></input>

        <button type="submit">Enviar</button>
      </form>
      <p>
        <NavLink to="/newUser">Regístrate</NavLink>
      </p>
    </div>
  );
}

export default LoginForm;
