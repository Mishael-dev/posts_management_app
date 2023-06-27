/** @format */
import Link from "next/link";

export default function PostsLayout({ children }) {
	return (
		<section>
			<p className="mb-6">
				<span className="text-lg">Instructions:</span> click on the text at the
				header to go to the home page, click on a card tag (small blue text with
				a hash tag under the card) to search for all posts with that tag name,
				click on a card title to visit the post details page where you can edit
				or delete the post, if you dont see a create button scroll to the buttom
				of all the posts, you will find it there made by{" "}
				<Link
					href="https://twitter.com/DaapMishae85585"
					className="text-sm text-blue-600">
					Mishael 🐤
				</Link>{" "}
				happy using :){" "}
			</p>
			<div>{children}</div>
		</section>
	);
}
