/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { useEffect } from "react";
import { TokenContext } from "..";
export const usePosts = () => {
	const [token] = useContext(TokenContext);
	/* Estado */
	const [posts, setPosts] = useState([]);

	const likePost = (id) => {
		const post = posts.find((post) => {
			return post.id === id;
		});
		post.likes++;
		post.likedByLogguedUser = true;
		setPosts([...posts]);
	};
	const unlikePost = (id) => {
		const post = posts.find((post) => {
			return post.id === id;
		});
		post.likes--;
		post.likedByLogguedUser = false;
		setPosts([...posts]);
	};

	const getPhotos = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND}/photos`, {
			headers: { authorization: token },
		});
		const responseBody = await res.json();

		setPosts(responseBody.data);
	};

	useEffect(() => {
		getPhotos();
	}, []);

	return { posts, likePost, unlikePost };
};
