import React, { useContext, useState } from "react";
import { TokenContext } from "..";
import Avatar from "./Avatar";

function PostForm({ name, caption, location }) {
	const [newPost, setNewPost] = useState("");
	const [token] = useContext(TokenContext);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const addPost = {
			photoname: { name },
			caption: { caption },
			location: { location },
		};

		console.log("pasa por aquí");

		const serializedData = JSON.stringify(addPost);
		const res = await fetch(`${process.env.REACT_APP_BACKEND}/addPhoto`, {
			method: "POST",
			body: serializedData,
			headers: {
				"Content-type": "application/json",
				Authorization: token,
			},
		});

		const responseBody = await res.json();
		const textPost = responseBody;
		setNewPost(textPost);
	};

	return (
		<>
			<Avatar />
			<form onSubmit={handleSubmit}>
				<label htmlFor="text-post"></label>
				<input
					id="text-post"
					onChange={(e) => setNewPost(e.target.value)}
					type="text"
					placeholder="Escribe.."
				></input>
				<label htmlFor="location"></label>
				<input
					id="location"
					onChange={(e) => setNewPost(e.target.value)}
					type="text"
					placeholder="Localización"
				></input>
				<label htmlFor="photo-post">Subir archivo</label>
				<input
					type="file"
					id="photo-post"
					accept="image/png, image/jpg"
				></input>
				<button type="submit">Enviar</button>
			</form>
		</>
	);
}

export default PostForm;
