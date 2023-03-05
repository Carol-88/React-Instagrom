import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import FooterIcons from "./FooterIcons";
import UserName from "./UserName";
import { useEffect, useContext, useState } from "react";
import { TokenContext } from "..";
function FooterPost({ likes, likedByLogguedUser, id, idUser, photo }) {
	const [token] = useContext(TokenContext);
	const [showComents, setShowComents] = useState(false);
	return (
		<>
			<FooterIcons photo={photo} />
			<p className="likes-footer">{likes} Me gusta</p>
			<p>
				<UserName />
			</p>
			<button
				className="showComments"
				onClick={() => {
					setShowComents(!showComents);
				}}
			>
				Ver comentarios
			</button>
			{showComents && <CommentList />}
			<p className="commentForm">
				<CommentForm />
			</p>
		</>
	);
}
export default FooterPost;
