/** @format */

"use client";
import React, { useEffect } from "react";
import { postsStore } from "@/store/postsStore";
import { GETPOSTS, DELETEPOST } from "@/functions/requests";
import { useRouter } from "next/navigation";

export default function page({ params }) {
	const setPosts = postsStore((state) => state.setPosts);
	const posts = postsStore((state) => state.posts);
	const getPost = postsStore((state) => state.getPost);
	let post = getPost(params.postId);
	const router = useRouter();

	useEffect(() => {
		(async () => {
			const posts = await GETPOSTS();
			setPosts(posts);
		})();
	}, []);

	const handleEditClick = () => {
		router.push(`/posts/edit/${post.id}`);
	};
	const handleDeleteClick = async () => {
	  const confirmDelete = confirm("Are you sure you want to delete this post?")

	  if(confirmDelete) await DELETEPOST(post.id)
	  router.push("/posts")
	};

	return (
		<section>
			<h1 className="headline">Post {params.postId} </h1>
			<p className="text-xl ">
				Here is where you can view the details of a post and perform some action
				on it if you want
			</p>

			{post && (
				<article className="mt-8">
					<div className="text-2xl flex flex-col gap-y-2 text-blue-600">
						<p>
							Post Title : <span className="text-gray-600">{post.title}</span>
						</p>

						<p>
							Post id : <span className="text-gray-600">{post.id}</span>{" "}
						</p>
						<p>
							Post Username :{" "}
							<span className="text-gray-600">{post.userName}</span>
						</p>

						<p>
							Post body : <span className="text-gray-600">{post.body}</span>
						</p>

						<p>
							Post tag : <span className="text-gray-600">{post.tag}</span>
						</p>
					</div>
				</article>
			)}

			<div className="mt-8 flex w-60 justify-between">
				<button className="btn bg-yellow-400" onClick={handleEditClick}>
					edit
				</button>
				<button
					className="btn bg-red-500 text-white"
					onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</section>
	);
}
