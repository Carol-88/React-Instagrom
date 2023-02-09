import React from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";
import PostDate from "./PostDate";

function HeaderPost({ name, date }) {
	return (
		<>
			<Avatar />
			<UserName name={name} />
			<PostDate date={date} />
		</>
	);
}

export default HeaderPost;
