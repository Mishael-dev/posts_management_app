/** @format */

"use client";
import PostCard from "@/ui/PostCard";
import { GETPOSTS } from "@/functions/requests";
import { useEffect } from "react";
import { postsStore } from "@/store/postsStore";
import { returnLowered } from "@/functions/utils";
import SearchPost from "@/ui/SearchPost";
import { useRouter } from "next/navigation";
import { AuthHandler } from "next-auth/core";

export default function posts() {
	const posts = postsStore((state) => state.posts);
	const setPosts = postsStore((state) => state.setPosts);
	const filterPosts = postsStore((state) => state.filterPosts);
	const { searchedPost } = postsStore();
	const router = useRouter();

	useEffect(() => {
		(async function () {
			const posts = await GETPOSTS();

			console.log(posts);
			setPosts(posts);
		})();
	}, [GETPOSTS]);

	const handleCreateBtnClick = () => {
		router.push("/posts/create");
	};

	return (
		<section>
			<SearchPost />

			<h1 className="headline">Posts</h1>

			<div className="grid md:grid-cols-2  gap-4 ">
				{posts.length > 0 &&
					posts
						.filter((post) => {
							const { id, title, userName, body, tag } = post;

							const loweredTitle = returnLowered(title);
							const loweredUserName = returnLowered(userName);
							const loweredBody = returnLowered(body);
							const loweredTag = returnLowered(tag);

							const searchTerm = returnLowered(searchedPost);

							return searchTerm == ""
								? post
								: id == searchTerm ||
										loweredTitle.includes(searchTerm) ||
										loweredUserName.includes(searchTerm) ||
										loweredBody.includes(searchTerm) ||
										loweredTag.includes(searchTerm);
						})
						.map((post) => <PostCard id={post.id} post={post} />)}
			</div>
			<button
				className="btn bg-green-400 w-full mt-8"
				onClick={handleCreateBtnClick}>
				Create Post
			</button>
		</section>
	);
}
