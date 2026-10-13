import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full h-12.5 flex justify-center items-center gap-2 bg-gray-600 '>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/service"}>Service</Link>
      <Link href={"/gallery"}>Gallery</Link>
      <Link href={"/posts"}>Posts</Link>
      <Link href={"/contact"}>Contact</Link>
    </nav>
  )
}
