/** @format */
"use client";
import { useState } from "react";
import {formStore} from "@/store/formStore"
import {userStore} from "@/store/users"
import {useRouter} from "next/navigation"

export default function page() {
	const formData = formStore((state)=> state.formData)
	const setFormData = formStore((state)=> state.setFormData)
	const resetFormData = formStore((state)=> state.resetFormData)
	const router = useRouter()

	const addUser = userStore((state)=> state.addUser)

	const handleFormChange = e => {setFormData(e)}

	const handleFormSubmit = (e)=> {
       e.preventDefault()

	   router.push("/projects")

       addUser(formData)
	}

	return (
		<section>
			<h1 className="font-bold text-3xl capitalize text-blue-600 mx-6">
				create a user
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
						value = {formData.id}
						onChange={handleFormChange}
						className="shadow-lg px-6 py-2 rounded-full focus:outline-none focus:border-none border-gray-500 border-1"
					/>

					<label htmlFor="name">user name</label>
					<input
						type="text"
						name="name"
						id="name"
						value = {formData.name}
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
