import React from "react";
// import Avatar from "./Avatar";
import UserName from "./UserName";
import PostDate from "./PostDate";

function HeaderPost({ userName, avatar, date }) {
	return (
		<>
			{/* <Avatar img={avatar} /> */}
			<p className="username-headerpost">
				<UserName name={userName} />
			</p>
			<PostDate date={date} />
		</>
	);
}

export default HeaderPost;
