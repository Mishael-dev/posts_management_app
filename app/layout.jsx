/** @format */
import Nav from "@/components/Nav";
import "@/globals.css"

export const metadata ={
  title : "Learning Zustand",
  description : "site for Learning zustand "
}

export default function rootlayout({children}) {
	return (
		<html>
			<body>
				<header>
          <Nav />
        </header>
				<main className="mx-[4rem]">{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
