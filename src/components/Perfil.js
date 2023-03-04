import React, { useContext, useEffect, useState } from "react";
// import Avatar from "./Avatar";
import UserName from "./UserName";
import PostList from "./PostList";
import { TokenContext } from "..";
import { Navigate } from "react-router-dom";
// import AvatarForm from "./AvatarForm";

const Perfil = (data) => {
	const [token] = useContext(TokenContext);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const [userName, setUserName] = useState(null);
	const [photos, setPhotos] = useState(null);

	const [name, setName] = useState("");
	const [lastname, setLastName] = useState("");
	const [birthday, setBirthday] = useState(null);

	useEffect(() => {
		async function loadUserProfile() {
			try {
				const response = await fetch(
					`${process.env.REACT_APP_BACKEND}/profile`,
					{ headers: { Authorization: token } }
				);
				const { data } = await response.json();

				setUserName(data.username);
				setPhotos(data.photos);
				setName(data.name);
				setLastName(data.lastname);
				setBirthday(data.birthday);
			} catch (error) {
				setError(error.message);
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
	if (error) return <p>{error}</p>;

	return (
		<article class="user">
			{/* <Avatar src={data.avatar} /> <AvatarForm /> */}
			<h2 className="username">
				<UserName name={userName} />
			</h2>
			<p className="name-perfil">
				{name} {lastname}
			</p>
			<p className="cumple">{birthday}</p>
			<div className="postlist-perfil">
				<PostList photos={photos} />
			</div>
		</article>
	);
};

export default Perfil;
