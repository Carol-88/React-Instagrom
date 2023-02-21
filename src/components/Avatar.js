import React from "react";

function Avatar(props) {
	console.log(props);
	return (
		<>
			{/* para que se vea algo */}

			<img className="avatar-img" src={props.img} alt={props.name} />
		</>
	);
}

export default Avatar;
