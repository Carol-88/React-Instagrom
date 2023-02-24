import React, { useContext, useEffect, useState } from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";
import PostList from "./PostList";
import { TokenContext } from "..";
import { Navigate } from "react-router-dom";

const Perfil = ({ img, name }) => {
	const [token] = useContext(TokenContext);
	const [loading, setLoading] = useState(true);

	//faltaría un estado para gestionar errores posibles (usar en el catch de abajo)
	const [userName, setUserName] = useState(null);

	useEffect(() => {
		async function loadUserProfile() {
			try {
				const response = await fetch(
					`${process.env.REACT_APP_BACKEND}/profile`,
					{ headers: { Authorization: token } }
				);
				const { data } = await response.json();

				console.log(data.data); //esto es lo que hay que renderizar
				setUserName(data.username);
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
			<Avatar img={img} name={name} />
			<UserName name={userName} />
			<PostList />
		</article>
	);
};

export default Perfil;
