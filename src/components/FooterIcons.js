function FooterIcons({ photo }) {
	///LAMAR AL BACK
	const likePost = () => {
		console.log("LIKE", photo.likes);
		console.log("USERLIKER", photo.likedByLoggedUser);
		photo.likes++;
		photo.likedByLoggedUser = true;
		console.log("LIKE", photo.likes);
		console.log("USERLIKER", photo.likedByLoggedUser);
	};
	const unlikePost = () => {
		console.log("LIKE", photo.likes);
		console.log("USERLIKER", photo.likedByLoggedUser);
		photo.likes--;
		photo.likedByLoggedUser = false;
		console.log("LIKE", photo.likes);
		console.log("USERLIKER", photo.likedByLoggedUser);
	};
	return (
		<div className="footer-icons">
			<div className="footer-icons-img">
				{!photo.likedByLogguedUser ? (
					<img
						onClick={likePost}
						className="icon"
						src="/icons/corazon.png"
						alt="like"
					/>
				) : (
					<img
						onClick={unlikePost}
						className="icon"
						src="/icons/red-heart-icon.webp"
						alt="liked"
					/>
				)}
				<img className="icon" src="/icons/comentario.png" alt="comment" />
				<img className="icon" src="/icons/compartir.png" alt="share" />
			</div>
			<div className="icon-last">
				<img className="icon" src="/icons/marcador.png" alt="keep-post" />
			</div>
		</div>
	);
}
export default FooterIcons;
