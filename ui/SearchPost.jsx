import React from 'react'
import { postsStore } from '@/store/postsStore';

export default function SearchPost() {
    const posts = postsStore((state) => state.posts);
	const setPosts = postsStore((state) => state.setPosts);
  const searchedPost = postsStore((state)=> state.searchedPost)
  const setSearchedPost = postsStore((state)=> state.setSearchedPost)

	const handleFormSubmit = () => {};
	const handleFormChange = (e) => {
		setSearchedPost(e.target.value)
	};

	return (
		<form className="w-full" onSubmit={handleFormSubmit}>
			<input
				type="search"
				className="bg-blue-300/20 rounded-full px-4 py-2 focus:outline-0 focus:border-0 text-yellow-400  md:w-80 w-full"
				placeholder="search by id, title, userName, tag, body"
				onChange={handleFormChange}
				value={searchedPost}
			/>
		</form>
	);
}
