/** @format */

import { create } from "zustand";
import { returnLowered } from "@/functions/utils";

export const postsStore = create((set, get) => ({
	posts: [],

	setPosts: (posts) => set({ posts }),

	getPost: (id) => get().posts.find((post)=> post.id==id),

	searchedPost: "",

	setSearchedPost: (term) => set({ searchedPost: term }),
}));
