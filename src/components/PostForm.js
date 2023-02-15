import React, { useState } from "react";
import Avatar from "./Avatar";

function PostForm(photoName, caption) {
	const [newPost, setNewPost] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const addPost = {
			photoname: { photoName },
			caption: { caption },
			idUser: 1,
		};

		console.log("pasa por aquí");

		const serializedData = JSON.stringify(addPost);
		const res = await fetch("http://localhost:4001/addPhoto", {
			method: "POST",
			body: serializedData,
			headers: {
				"Content-type": "application/json",
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
				<label htmlFor="photo-post">Subir archivo</label>
				<input
					type="file"
					id="photo-post"
					accept="image/png, image/jpeg"
				></input>
				<button type="submit">Enviar</button>
			</form>
		</>
	);
}

export default PostForm;
