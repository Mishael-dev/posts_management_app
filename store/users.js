/** @format */

import create from "zustand";

import { users as data } from "./data";

export const userStore = create((set, get) => ({
	users: data,

	addUser: (user) => {
		set((store) => ({ users: [...store.users, user] }));
	},

	getUser: (id) => get().users.find((user)=> user.id == id),

	updateUser: (id, updatedUser) => {
		const users = get().users;

		const updatedUsers = users.map((user) => {
			if (user.id == id) {
				return { updatedUser };
			} else {
				return user;
			}
		});

		set((store) => ({ users: updatedUsers }));
	},
}));
