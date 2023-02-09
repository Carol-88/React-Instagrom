import React from "react";

function ImgPost({ img, name }) {
	return <img className="post-img" src={img} alt={name} />;
}

export default ImgPost;
