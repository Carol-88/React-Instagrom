import React from "react";
import FooterPost from "./FooterPost";
import HeaderPost from "./HeaderPost";
import ImgPost from "./ImgPost";
// import PostForm from "./PostForm";

function Post() {
	return (
		<>
			<HeaderPost />
			<ImgPost />
			{/* <PostForm /> NO VA AQUI, esto es para publicar un post */}
			<FooterPost />
		</>
	);
}

export default Post;
