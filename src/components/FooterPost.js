import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import FooterIcons from "./FooterIcons";
import UserName from "./UserName";

function FooterPost({ location, caption, publication_Date }) {
	const [showComents, setShowComents] = useState(false);
	return (
		<>
			<FooterIcons />

			<p>Numero de likes</p>
			<p> {location} </p>
			<p>
				<UserName /> {caption}
			</p>
			<p> {publication_Date}</p>
			<button
				onClick={() => {
					setShowComents(!showComents);
				}}
			>
				Ver comentarios
			</button>

			{showComents && <CommentList />}
			<p>
				<CommentForm />
			</p>
		</>
	);
}

export default FooterPost;
