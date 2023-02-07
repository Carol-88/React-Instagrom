import "./App.css";
import PostList from "./components/PostList";
import Post from "./components/Post";
import Avatar from "./components/Avatar";

function App() {
	return (
		<>
			<header>
				<h1>STORIES</h1>
			</header>
			<main>
				<PostList />
				<p>
					Post de prueba
					<Post />
				</p>
			</main>
			<footer>
				<Avatar />
				<p className="username">username</p>
				<p className="info">
					Información - Ayuda - Prensa - API - Empleo - Privacidad - Condiciones
					- Ubicaciones - Idioma
				</p>
				<p className="insta-footer"> @ 2023 INSTAGROM FROM CAROLINA $ MARTA</p>
			</footer>
		</>
	);
}

export default App;
