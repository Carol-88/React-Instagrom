import React from "react";
import FooterPost from "./FooterPost";
import HeaderPost from "./HeaderPost";
import ContentPost from "./ContentPost";

function Post({ name, location, caption }) {
	return (
		<>
			<HeaderPost />
			<ContentPost name={name} location={location} caption={caption} />
			<FooterPost />
		</>
	);
}

export default Post;
