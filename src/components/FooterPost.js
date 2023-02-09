import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

function FooterPost() {
	return (
		<>
			<img src="/public/like.png" alt="like" />
			<img src="./public/like.png" alt="comment" />
			<img src="./public/like.png" alt="share" />
			<img src="./public/like.png" alt="keep-post" />
			<p>Numero de likes</p>
			<p>
				<CommentForm />
			</p>
			<p>
				<CommentList />
			</p>
		</>
	);
}

export default FooterPost;
