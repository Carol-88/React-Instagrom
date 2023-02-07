/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { useEffect } from "react";
import { TokenContext } from "..";
export const useRemotePosts = (interval = 5000) => {
	const [myToken, setMyToken] = useContext(TokenContext);
	/* Estado */
	const [posts, setPosts] = useState([]);
	/*Efecto */
	async function loadPostsFromServer() {
		if (myToken) {
			try {
				const res = await fetch("http://localhost:3050/messages", {
					headers: {
						Authorization: `Bearer ${myToken}`,
					},
				});
				if (!res.ok) {
					setMyToken(null);
				}
				const postsFromServer = await res.json();
				setPosts(postsFromServer);
			} catch (err) {
				console.error("Err:", err);
			}
		} else {
			setPosts([]);
		}
	}
	useEffect(() => {
		const tempId = setInterval(() => {
			loadPostsFromServer();
		}, interval);

		return () => clearInterval(tempId);
	}, [myToken, interval, loadPostsFromServer]);

	return posts;
};
