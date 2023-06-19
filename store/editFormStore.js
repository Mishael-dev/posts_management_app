/** @format */

import { create } from "zustand";

export const formStore = create((set)=> ({
    formData: {
		name: "",
		id: "",
		intro: "",
	},

    setFormData : (data)=> set({formData : data})
}))
