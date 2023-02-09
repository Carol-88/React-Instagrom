import Post from "./Post";

const PostList = ({ posts }) => {
	return (
		<ul className="postList">
			{/* {posts.map((post) => { ENLAZAR A NUESTRO SERVER */}
				const {
					name: { title, first, last },
					location: {
						city,
						country,
						street: { number: portalNumber, name: street },
					},
					picture: { large: img },
					login: { uuid: id },
					dob: { age },
				} = post;

				const fullName = `${title} ${first} ${last}`;
				const address = `${street} ${portalNumber}, ${city} (${country})`;

				return (
					<li key={id}>
						<Post img={img} name={fullName} address={address} age={age} />
					</li>
				);
			})}
		</ul>
	);
};

export default PostList;
