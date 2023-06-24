/** @format */

"use client";
import React from "react";
import { formStore } from "@/store/formStore";
import { CREATEPOST } from "@/functions/requests";
import { useRouter } from "next/navigation";

export default function page() {
	const formData = formStore((state) => state.formData);
	const setFormData = formStore((state) => state.setFormData);
  const router = useRouter()

	const handleFormChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleFromSubmit = async (e) => {
    router.push("/posts")
		e.preventDefault();
		await CREATEPOST(formData);
	};

	return (
		<section>
			<h1 className="headline">Create Post</h1>

			<form
				onSubmit={handleFromSubmit}
				className="bg-white p-4 rounded flex flex-col gap-y-2 text-lg">
				<div className="bg-gray-200 rounded-full px-2 py-px flex">
					<label htmlFor="id" className="text-lg capitalize text-blue-600">
						id:
					</label>
					<input
						type="number"
						id="id"
						name="id"
						value={formData.id}
						onChange={handleFormChange}
						className="bg-gray-200 w-full focus:border-none focus:outline-none px-2"
					/>
				</div>

				<div className="bg-gray-200 rounded-full px-2 py-px flex">
					<label htmlFor="title" className="text-lg capitalize text-blue-600">
						title:
					</label>
					<input
						type="text"
						id="title"
						name="title"
						value={formData.title}
						onChange={handleFormChange}
						className="bg-gray-200 w-full focus:border-none focus:outline-none px-2"
					/>
				</div>

				<div className="bg-gray-200 rounded-full px-2 py-px flex">
					<label
						htmlFor="userName"
						className="text-lg capitalize text-blue-600">
						Username:
					</label>
					<input
						type="text"
						id="userName"
						name="userName"
						value={formData.userName}
						onChange={handleFormChange}
						className="bg-gray-200 w-full focus:border-none  focus:outline-none px-2"
					/>
				</div>

				<div className="bg-gray-200 rounded-lg p-4 flex flex-col">
					<label htmlFor="body" className="text-lg capitalize text-blue-600">
						body:
					</label>
					<textarea
						id="body"
						name="body"
						onChange={handleFormChange}
						className="bg-gray-200 w-full focus:border-none focus:outline-none px-2"
						cols="20"
						rows="8"
						value={formData.body}></textarea>
				</div>

				<div className="bg-gray-200 rounded-full px-2 py-px flex">
					<label htmlFor="tag" className="text-lg capitalize text-blue-600">
						tag:
					</label>
					<input
						type="text"
						id="tag"
						name="tag"
						value={formData.tag}
						onChange={handleFormChange}
						className="bg-gray-200 w-full focus:border-none focus:outline-none px-2"
					/>
				</div>

				<button type="submit" className="btn bg-green-400">
					create
				</button>
			</form>
		</section>
	);
}
