import "./App.css";
import PostList from "./components/PostList";
// import Post from "./components/Post";
import Avatar from "./components/Avatar";
import Stories from "./components/Stories";
import UserName from "./components/UserName";
import { useEffect, useState } from "react";

// import PostForm from "./components/PostForm";

function App() {
	const [photos, setPhotos] = useState([]);

	const getPhotos = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND}/photos`);
		const responseBody = await res.json();
		console.log("RESPONSE BODY", responseBody.data);
		setPhotos(responseBody.data);
	};

	useEffect(() => {
		const photosFromServer = getPhotos();
		console.log("FOTOS SERVIDOR", photosFromServer);
	}, []);

	return (
		<>
			<header>
				<Stories />
			</header>
			<main>
				<PostList photos={photos} />
			</main>
			<footer>
				<Avatar img="/stories/456328.png" />
				<UserName />
				<p className="info">
					Información - Ayuda - Prensa - API - Empleo - Privacidad - Condiciones
					- Ubicaciones - Idioma
				</p>
				<p className="insta-footer"> © 2023 INSTAGROM FROM CAROLINA & MARTA</p>
			</footer>
		</>
	);
}

export default App;
