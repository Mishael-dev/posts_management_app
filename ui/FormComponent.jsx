/** @format */

"use client";
import { formStore } from "@/store/formStore";
import { useEffect } from "react";
import { EDITPOST, GETPOSTS, DELETEPOST } from "@/functions/requests";
import { useRouter } from "next/navigation";

export default function FormComponent({ post, action }) {
	const formData = formStore((status) => status.formData);
	const setFormData = formStore((status) => status.setFormData);
	const clearForm = formStore((status)=> status.clearForm)
	const router = useRouter();

	useEffect(() => {
		(() => setFormData(post))();
	}, []);

	const handleFormChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleFromSubmit = async (e) => {
		e.preventDefault();
		await EDITPOST(formData, post.id);
		router.push("/posts");
		clearForm()
	};

	return (
		<form
			onSubmit={handleFromSubmit}
			className="bg-white p-4 rounded flex flex-col gap-y-2 text-lg">
			<div className="bg-gray-200 rounded-full px-2 py-px hidden">
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
				<label htmlFor="userName" className="text-lg capitalize text-blue-600">
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
				{action}
			</button>
		</form>
	);
}
