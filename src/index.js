import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Perfil from "./components/Perfil";
import PostList from "./components/PostList";
import CommentForm from "./components/CommentForm";
import useLocalStorage from "./hooks/useLocalStorage";

//Contexto de usuario logueado
export const TokenContext = React.createContext();
const TokenProvider = (props) => {
	const [token, setToken] = useLocalStorage("token");
	return (
		<TokenContext.Provider value={[token, setToken]}>
			{props.children}
		</TokenContext.Provider>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* en nuestro instagrom un usuario sin loguear ni 
		registrar puede ver el contenido, pero no interactuar */}
		<TokenProvider>
			<BrowserRouter>
				<nav id="main-menu">
					<h2>Instagrom</h2>
					<NavLink to="/">Inicio</NavLink>
					<NavLink to="register">Registro</NavLink>
					<NavLink to="login">Login</NavLink>
					<NavLink to="perfil">Perfil</NavLink>
				</nav>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/register" element={<RegisterForm />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/perfil" element={<Perfil />} />
					<Route path="postlist" element={<PostList />} />
					<Route path="comment" element={<CommentForm />} />
				</Routes>
			</BrowserRouter>
		</TokenProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
