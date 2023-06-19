/** @format */

import React from "react";
import {useRouter} from "next/navigation"

export default function UserCard({ data }) {
	const { name, id, intro } = data;
	const router = useRouter()
	const handleEditBtnClick = ()=> {
		router.push(`edit-user/${id}`)
	}
	return (
		<article className="p-4 rounded-lg w-full md:w-60 bg-white shadow-lg flex flex-col gap-y-2">
			<div className="flex items-center gap-2">
				<span className="rounded-lg p-2 text-white bg-blue-600 ">{id}</span>

				<span className="text-gray-500">{name}</span>

				<></>
			</div>

			<p className="tracking-wide text-gray-600">{intro}</p>

			<div className="flex justify-evenly">
				<button className="btn bg-green-500 text-white" onClick={handleEditBtnClick}>Edit</button>

				<button className="btn text-white bg-red-500">Delete</button>
			</div>
		</article>
	);
}
