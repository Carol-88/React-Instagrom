import Post from "./Post";

const PostList = ({ photos }) => {
	return (
		<ul className="postList">
			{photos?.map((post) => {
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
