import Post from "./Post";
const PostList = ({ photos }) => {
	return (
		<ul className="postList">
			{photos?.map((photo) => {
				return (
					<li key={photo.photoName}>
						<Post
							photoName={photo.photoName}
							location={photo.location}
							caption={photo.caption}
							publicationDate={photo.publication_date}
							id={photo.id}
							idUser={photo.idUser}
							likes={photo.likes}
							likedByLogguedUser={photo.likedByLogguedUser}
							photo={photo}
						/>
					</li>
				);
			})}
		</ul>
	);
};
export default PostList;
