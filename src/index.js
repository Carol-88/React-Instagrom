import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Perfil from "./components/Perfil";
import PostList from "./components/PostList";
import CommentForm from "./components/CommentForm";
import useLocalStorage from "./hooks/useLocalStorage";
import PostForm from "./components/PostForm";
import LogoutForm from "./components/LogoutForm";

export const TokenContext = React.createContext();
const TokenProvider = (props) => {
  const [token, setToken] = useLocalStorage("token");
  ///Aquí se carga el usuario

  return (
    <TokenContext.Provider value={[token, setToken]}>
      {props.children}
    </TokenContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TokenProvider>
      <BrowserRouter>
        <nav id="main-menu">
          <h2>Instagrom</h2>
          <NavLink to="inicio">Inicio</NavLink>
          <NavLink to="newUser">Registro</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="perfil">Perfil</NavLink>
          <NavLink to="create">Crear</NavLink>
          <NavLink to="logout">Cerrar sesión</NavLink>
        </nav>
        <Routes>
          <Route path="/inicio" element={<App />} />
          <Route path="/newUser" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="postlist" element={<PostList />} />
          <Route path="comment" element={<CommentForm />} />
          <Route path="create" element={<PostForm />} />
          <Route path="logout" element={<LogoutForm />} />
        </Routes>
      </BrowserRouter>
    </TokenProvider>
  </React.StrictMode>
);

reportWebVitals();
