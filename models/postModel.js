/** @format */

import mongoose, {models} from "mongoose";

const postSchema = mongoose.Schema(
	{
		title: String,
		userName: String,
		body: String,
		tag: String,
		id: Number,
	},
	{ timeStamps: true }
);

const Post = models.Post || mongoose.model("Post", postSchema);

export default Post;
