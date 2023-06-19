/** @format */

"use client";
import React from "react";
import UserCard from "@/components/UserCard";
import { userStore } from "@/store/users";
import Link from "next/link";

export default function Projects() {
	const users = userStore((state) => state.users);

	return (
		<>
			<section className="mt-4 h-full">
				<h1 className="text-blue-600 text-3xl font-bold mb-8">Users</h1>

				<div className="flex flex-wrap gap-3  justify-evenly">
					{users.length > 0 &&
						users.map((user) => <UserCard key={user.id} data={user} />)}
				</div>
			</section>

			<Link href="create-user">
				<button className="fixed bottom-0 p-4 rounded bg-green-500 text-lg uppercase text-white mb-2">
					create user
				</button>
			</Link>
		</>
	);
}
