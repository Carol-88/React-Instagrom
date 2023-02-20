import React, { useEffect, useState } from "react";

function CommentForm({ username, comment }) {
	const [comments, setComments] = useState([]);
	const loadComments = async () => {
		const r = await fetch(`${process.env.REACT_APP_BACKEND}/comments`);
		const body = await r.json();
		console.log("body", body);
		setComments(body.data);
	};
	useEffect(() => {
		loadComments();
	}, []);
	console.log("Comentarios", comments);
	return (
		<div style={{ border: "1px solid red" }}>
			{comments?.map((comment) => (
				<p>
					src={`${process.env.REACT_APP_BACKEND}/static/photos/${comment}`}
					alt=""
				</p>
			))}
		</div>
	);
}

export default CommentForm;
