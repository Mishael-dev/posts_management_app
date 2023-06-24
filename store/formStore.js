/** @format */

import { create } from "zustand";

export const formStore = create((set, get) => ({
	formData: {},

	setFormData: (data) => set({ formData: data }),

	clearForm: () => set({ formData: {} }),
}));