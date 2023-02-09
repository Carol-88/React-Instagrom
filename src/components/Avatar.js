import React from "react";

function Avatar(img, name) {
	return (
		<>
			{/* para que se vea algo */}

			<img className="avatar-img" src={img} alt={name} />
		</>
	);
}

export default Avatar;
