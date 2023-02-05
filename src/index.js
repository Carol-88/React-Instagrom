import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Perfil from "./components/Perfil";
import Post from "./components/Post";
import CommentForm from "./components/CommentForm";

//Contexto de usuario logueado
export const LoginContext = React.createContext();
const LoginProvider = (props) => {
	const [loginUser, setLoginUser] = useState(null);
	return (
		<LoginContext.Provider value={[loginUser, setLoginUser]}>
			{props.children}
		</LoginContext.Provider>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<LoginProvider>
			<BrowserRouter>
				<nav id="main-menu">
					<NavLink to="/">Inicio</NavLink>
					<NavLink to="register">Registro</NavLink>
					<NavLink to="login">Login</NavLink>
					<NavLink to="perfil">Perfil</NavLink>
				</nav>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="register" element={<RegisterForm />} />
					<Route path="login" element={<LoginForm />} />
					<Route path="perfil" element={<Perfil />} />
					<Route path="post" element={<Post />} />
					<Route path="comment" element={<CommentForm />} />
				</Routes>
			</BrowserRouter>
		</LoginProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
