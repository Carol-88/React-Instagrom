import React from "react";

function Stories() {
	const storiesFromBack = [
		{ img: "/stories/456317.png" },
		{ img: "/stories/456318.png" },
		{ img: "/stories/456323.png" },
		{ img: "/stories/456324.png" },
		{ img: "/stories/456325.png" },
		{ img: "/stories/456326.png" },
	];

	return (
		<>
			{storiesFromBack.map((storie) => {
				return <img className="storie-img" src={storie.img} alt="storie" />;
			})}
		</>
	);
}

export default Stories;
