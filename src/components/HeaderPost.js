import React from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";
import PostDate from "./PostDate";

function HeaderPost({ name, date }) {
	return (
		<>
			<Avatar img="/stories/456328.png" />
			<UserName name={name} />
			<PostDate date={date} />
		</>
	);
}

export default HeaderPost;
