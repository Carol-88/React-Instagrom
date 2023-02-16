import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import UserName from "./UserName";

function FooterPost({ location, caption, publication_Date }) {
	const [showComents, setShowComents] = useState(false);
	return (
		<>
			<img className="icon" src="/public/icons/corazon.png" alt="like" />
			<img className="icon" src="/public/icons/comentario.png" alt="comment" />
			<img className="icon" src="/public/icons/compartir.png" alt="share" />
			<img className="icon" src="/public/icons/marcador.png" alt="keep-post" />
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
