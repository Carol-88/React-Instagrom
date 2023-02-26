import React, { useEffect, useState } from "react";

function ContentPost({ name, location, caption }) {
	return (
		<div style={{ border: "1px solid red" }}>
			<figure>
				<img
					className="photo-post"
					src={`${process.env.REACT_APP_BACKEND}/photos/${name}`}
					alt={caption}
				/>
			</figure>
			<h2>{caption}</h2>
			{location ? <p>{location}</p> : null}
		</div>
	);
	// return <img className="post-img" src={photo} alt={photoName} />;
}

export default ContentPost;
