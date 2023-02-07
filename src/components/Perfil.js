import React from "react";
import Avatar from "./Avatar";
import PostList from "./PostList";

function Perfil() {
	return (
		<div>
			<Avatar />
			<h3>Username</h3>
			<h4>Email</h4>
			<ul>
				<PostList />
			</ul>
		</div>
	);
}

export default Perfil;
