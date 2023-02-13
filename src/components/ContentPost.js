import React, { useEffect, useState } from "react";

function ContentPost({ photoName, photo }) {
	const [photos, setPhotos] = useState([]);
	const loadPhotos = async () => {
		const r = await fetch("http://localhost:4001/photos");
		const body = await r.json();
		console.log("body", body);
		setPhotos(body.data);
	};
	useEffect(() => {
		loadPhotos();
	}, []);
	console.log("Fotos", photos);
	return (
		<div style={{ border: "1px solid red" }}>
			{photos.map((photo) => (
				<img
					src={`http://localhost:4001/photos/${photo.photoName}`}
					alt="post"
				/>
			))}
		</div>
	);
	// return <img className="post-img" src={photo} alt={photoName} />;
}

export default ContentPost;
