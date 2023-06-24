/** @format */

"use client";
import FormComponent from "@/ui/FormComponent";
import { useEffect } from "react";
import { GETPOSTS, EDITPOST } from "@/functions/requests";
import { postsStore } from "@/store/postsStore";

export default function editPage({ params }) {
	const setPosts = postsStore((state) => state.setPosts);
	const getPost = postsStore((state) => state.getPost);
	const posts = postsStore((state) => state.posts);
	let post = getPost(params.postId);

	useEffect(() => {
		(async () => {
			const posts = await GETPOSTS();
			setPosts(posts);
		})();
	}, []);

	return (
		<section>
			<h1 className="headline">edit post {params.postId}</h1>

			{post && <FormComponent post={post} action={"edit"} />}
		</section>
	);
}
