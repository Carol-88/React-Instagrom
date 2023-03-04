// import React, { useEffect, useState } from "react";

function ContentPost({ photoName, caption, location, publicationDate }) {
	return (
		<div className="post">
			<figure>
				<img
					className="photo-post"
					src={`${process.env.REACT_APP_BACKEND}/photos/${photoName}`}
					alt={caption}
				/>
			</figure>
			<h2 className="caption-post">{caption}</h2>

			<p className="location-post">{location && <p>Ubicación:{location}</p>}</p>

			<p>{new Date(publicationDate).toLocaleString()}</p>
		</div>
	);
}

export default ContentPost;
