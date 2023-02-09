import React from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";

const Perfil = ({ img, name }) => {
	return (
		<article class="user">
			<Avatar img={img} name={name} />

			<UserName name={name} />
		</article>
	);
};

export default Perfil;
