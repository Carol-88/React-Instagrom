import "./App.css";
import PostList from "./components/PostList";
import Post from "./components/Post";

function App() {
	return (
		<>
			<PostList />
			<p>
				Post de prueba
				<Post />
			</p>
		</>
	);
}

export default App;
