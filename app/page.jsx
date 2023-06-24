/** @format */

"use client";
import React from "react";
import Link from "next/link";

export default async function page() {
	return (
		<section>
			<h1 className="text-xl mb-8">
				This is my pratic project and in this project i will be learning:
				<ul className="list-disc p-6 pl-8 shadow-lg bg-blue-100/50 rounded-lg my-8 text-gray-500">
					<li>State mannagement with zustand</li>
					<li>how to add search functionality to my app</li>
					<li>CRUD functionality to my app</li>
					<li>Next js API routes</li>
					<li>Saving stuff to database</li>
					<li>Data modeling with mongoose</li>
					<li>search and filter</li>
				</ul>
				its a post mannagement app where you can create posts search by title,
				body, username, id, and tag
			</h1>

			<Link href="/posts" className="mt-8 text-blue-500">Follow this link to visit the posts page</Link>
		</section>
	);
}
