/** @format */

export const GETPOSTS = async () => {
	try {
		const response = await fetch(`/api/posts`,{next : {revalidate : 60}});
		if (!response.ok) {
			throw new Error("Request failed");
		}
		const data = await response.json();
		// Handle the response data
		return data;
	} catch (error) {
		// Handle any errors
		console.error("Error:", error);
	}
};

export const CREATEPOST = async (data,postId) => {
	try {
		const response = await fetch(`/api/posts/${postId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (!response.ok) {
			throw new Error("Request failed");
		}
		const responseData = await response.json();
		return responseData;
		console.log(responseData);
	} catch (error) {
		console.error("Error:", error);
	}
};

export const EDITPOST = async (data, postId) => {
	try {
		const response = await fetch(`/api/posts/${postId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (!response.ok) {
			throw new Error("Request failed");
		}
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.error("Error:", error.message);
	}
};

export const DELETEPOST = async (postId) => {
	try {
		const response = await fetch(`/api/posts/${postId}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			throw new Error("Request failed");
		}
		console.log("Resource deleted successfully.");
	} catch (error) {
		// Handle any errors
		console.error("Error:", error);
	}
};
