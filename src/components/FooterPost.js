import React from "react";
import CommentForm from "./CommentForm";

function FooterPost() {
	return (
		<>
			<img src="./public/like.png" alt="like" />
			<img src="./public/like.png" alt="comment" />
			<img src="./public/like.png" alt="share" />
			<img src="./public/like.png" alt="keep-post" />
			<p>Le gusta a X usuarios</p>
			<p>Ver comentarios</p>
			<p>
				<CommentForm />
			</p>
		</>
	);
}

export default FooterPost;
