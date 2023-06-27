/** @format */

import mongoose from "mongoose";

export const connectToDb = async () => {
	try {
		await mongoose.connect(
			"mongodb://127.0.0.1"
			// "mongodb+srv://Mishael:12341234@post-mannagement-projec.4zwnjik.mongodb.net/?retryWrites=true&w=majority"
		);

		return console.log("database is connected");
	} catch (error) {
		console.log(error.message);
	}
};
