/** @format */

import "@/globals.css";
import Nav from "@/ui/Nav";

export const metadata = {
	title: "learning zustand || Landing page",
};

export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<Nav />
				<main className=" px-8 md:px-20 mt-20 text-gray-500 md:mt-28 pb-20">{children}</main>
			</body>
		</html>
	);
}
