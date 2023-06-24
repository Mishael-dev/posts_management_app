/** @format */

import { NextResponse } from "next/server";
import Post from "@/models/postModel";
import { connectToDb } from "@/database/connect";

export const PUT = async (req) => {
	try {
		await connectToDb();
		const data = await req.json()
		await Post.updateOne({id:data.id} , data)
		
		return new Response(JSON.stringify({ message: "posts updated" }));
	} catch (error) {
		console.log(error.message);
	}
};

export const DELETE = async (req, { params }) => {
	try {
		await connectToDb();
		await Post.deleteOne({ id: params.postId });
		return new Response(JSON.stringify({ message: "posts updated" }));
	} catch (error) {
		console.log(error.message);
	}
};

export const POST = async (req, { params }) => {
	try {
		await connectToDb();
		const data = await req.json();
		const post = new Post(data);
		await post.save();
		return new NextResponse(JSON.stringify({ message: "posts updated" }));
	} catch (error) {
		console.log(error.message);
	}
};
