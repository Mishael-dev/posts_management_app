/** @format */

"use client";
import { useEffect } from "react";
import { userStore } from "@/store/users";
import { formStore } from "@/store/editFormStore";

export default function page({ params }) {

	const getUser = userStore((state) => state.getUser);
	const user = getUser(params.id);
	const setFormData = formStore((state) => state.setFormData);
	const formData = formStore((state) => state.formData);
	setFormData(user)

	

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	const handleFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section>
			<h1 className="my-4 text-3xl text-blue-500 capitalize tracking-wide">
				{" "}
				edit <span className="text-yellow-400">{user.name}</span>
			</h1>

			<form
				onSubmit={handleFormSubmit}
				className="mt-2 p-4 rounded-lg shadow-lg ">
				<div className="flex gap-2 flex-col">
					<label htmlFor="id">user id</label>
					<input
						type="number"
						name="id"
						id="id"
						value={formData.id}
						onChange={handleFormChange}
						className="shadow-lg px-6 py-2 rounded-full focus:outline-none focus:border-none border-gray-500 border-1"
					/>

					<label htmlFor="name">user name</label>
					<input
						type="text"
						name="name"
						id="name"
						value={formData.name}
						onChange={handleFormChange}
						className="shadow-lg px-6 py-2 rounded-full focus:outline-none focus:border-none border-gray-500 border-1"
					/>

					<label htmlFor="intro">user bio</label>
					<textarea
						name="intro"
						id="intro"
						cols="10"
						rows="10"
						value={formData.intro}
						onChange={handleFormChange}
						className="shadow-lg p-6 rounded-lg focus:outline-none focus:border-none border-gray-500 border-1"></textarea>
				</div>

				<button
					type="submit"
					className="p-4 text-white rounded-lg bg-green-500 mt-4">
					Create
				</button>
			</form>
		</section>
	);
}
