import "./App.css";

import Post from "./components/Post";
import Nav from "./components/Nav";

function App() {
	return (
		<div className="App">
			<header>
				<h1>Instagrom</h1>
				<nav>
					<Nav />
				</nav>
			</header>
			<main>
				<Post />
			</main>
			<footer>Carolina y Marta, Hackaboss 2023@</footer>
		</div>
	);
}

export default App;
