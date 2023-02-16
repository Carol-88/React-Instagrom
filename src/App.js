import "./App.css";
import PostList from "./components/PostList";
import Post from "./components/Post";
import Avatar from "./components/Avatar";
import Stories from "./components/Stories";
import UserName from "./components/UserName";
import PostForm from "./components/PostForm";

function App() {
	return (
		<>
			<header>
				<Stories src="/public/stories/456317.jpg" />
				<Stories src="/public/stories/456318.jpg" />
				<Stories src="/public/stories/456319.jpg" />
				<Stories src="/public/stories/456320.jpg" />
				<Stories src="/public/stories/456321.jpg" />
				<Stories src="/public/stories/456322.jpg" />
			</header>
			<main>
				<button className="add-post">
					Publica <PostForm />
				</button>

				<PostList />

				<p>
					Post de prueba
					<Post />
				</p>
			</main>
			<footer>
				<Avatar />
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
