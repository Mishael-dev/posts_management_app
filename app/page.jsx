import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex items-center flex-col mt-[6rem] '>
      <h1 className='text-5xl capitalize max-w-[30rem] text-center'>Hello this is my landing page click the button bellow to visit project page 😊</h1>

      <Link href={"/projects"} className='text-2xl font-bold uppercase mt-[4rem] text-blue-600'>Projects</Link>
    </div>
  )
}
