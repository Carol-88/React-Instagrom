import "./App.css";
import PostList from "./components/PostList";
import UserName from "./components/UserName";
import Logout from "./components/Logout";
import { usePosts } from "./hooks/usePosts";

function App(data) {
	const { posts, likePost, unlikePost } = usePosts();
	console.log(posts);
	return (
		<>
			<header>
				<h1>Instagrom</h1>
			</header>
			<main>
				<PostList photos={posts} likePost={likePost} unlikePost={unlikePost} />
			</main>
			<footer>
				<div className="footerApp">
					{/* <Avatar img={data.avatar} /> */}

					<p className="username-footer spaceFooter">
						<UserName />
					</p>

					<p className="logout spaceFooter">
						<Logout />
					</p>

					<p className="info spaceFooter">
						Información - Ayuda - Prensa - API - Empleo - Privacidad -
						Condiciones - Ubicaciones - Idioma - Español
					</p>
					<p className="insta-footer">
						{" "}
						© 2023 INSTAGROM FROM CAROLINA & MARTA
					</p>
				</div>
			</footer>
		</>
	);
}

export default App;
