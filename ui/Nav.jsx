import Link from "next/link"

export default function Nav() {
  return (
    <nav className='fixed w-full top-0 z-10 '>
        <div className="shadow-md bg-white px-10 py-4 flex " >
            <Link href="/" className="flex flex-shrink"><h1 className='md:text-4xl text-xl text-blue-600 capitalize flex-shrink'>learning zustand State management :)</h1></Link>
        </div>
    </nav>
  )
}
