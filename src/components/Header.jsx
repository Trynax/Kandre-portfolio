import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between items-center px-6 lg:px-20 py-4 fixed bg-white z-50 top-0 right-0 left-0'>
      <h1 className='text-3xl md:text-5xl font-playfair font-semibold'>Portfolio.</h1>

      <nav className='hidden md:flex gap-10 md:gap-20 items-center text-gray text-lg '>
        <a href="#" className='text-black hover:text-black transition-colors'>Home</a>
        <a href="#" className='hover:text-black transition-colors'>Projects</a>
        <a href="#" className='hover:text-black transition-colors'>About</a>
        <a href="#" className='hover:text-black transition-colors'>Contact</a>
      </nav>

      <button className='bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors'>
        Download Resume
      </button>
    </header>
  )
}