import Comment from "./Comment";

const CommentList = ({ comments }) => {
	console.log("FOTOS", comments);
	return (
		<ul className="commentList">
			{comments?.map((comment) => {
				return (
					<li key={comment.id}>
						<Comment body={comment.body} />
					</li>
				);
			})}
		</ul>
	);
};

export default CommentList;
