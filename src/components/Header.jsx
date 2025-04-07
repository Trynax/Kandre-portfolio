import React from 'react'

export default function Header() {
  return (
    <header className='flex '>

        <h1 className=''>Portfolio</h1>

      <nav>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <button>
        Download Resume
      </button>

    </header>
  )
}
