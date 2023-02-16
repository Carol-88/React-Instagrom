import Post from "./Post";

const PostList = ({ photo }) => {
	return (
		<ul className="postList">
			{photo.map((post) => {
				const {
					name: { photoName },
					location: { location },
					caption: { caption },
				} = post;

				return (
					<li>
						<Post name={photoName} location={location} caption={caption} />
					</li>
				);
			})}
			;
		</ul>
	);
};

export default PostList;
