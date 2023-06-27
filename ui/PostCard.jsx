/** @format */

import React from "react";
import Link from "next/link";
import { postsStore } from "@/store/postsStore";

export default function PostCard({ post }) {
	const { id, title, body, userName, tag } = post;
	const setSearchedPost = postsStore((state) => state.setSearchedPost);

	const handleTagClick = () => {
		setSearchedPost(tag);
	};

	return (
		<article className="bg-white shadow-md flex flex-col gap-y-4 p-4 rounded-lg sm:w-full md:max-w-lg  hover:shadow-lg hover:translate-y-[-4px] transition-all cursor-pointer">
			<Link href={`/posts/${id}`}>
				<div className="flex ">
					<span className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-lg text-white">
						{id}
					</span>{" "}
					<div className=" ml-2 flex flex-col justify-center">
						<h3 className="font-bold text-xl capitalize leading-none text-gray-500">
							{title}
						</h3>{" "}
						<h3 className="font-light text-xl capitalize text-gray-400">
							{userName}
						</h3>
					</div>
				</div>
			</Link>
			<p className="font-light text-2xl text-gray-600">{body}</p>

			<span
				className="text-blue-400 hover:underline pointer"
				onClick={handleTagClick}>
				#{tag}
			</span>
		</article>
	);
}
