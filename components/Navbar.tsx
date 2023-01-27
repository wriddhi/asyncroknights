"use client";

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className={`text-xl flex justify-between w-11/12 items-center font-semibold 
    absolute top-0 left-1/2 -translate-x-1/2 my-8`}>
      <div className='flex justify-center items-center gap-2'>
        <Image className="bg-black rounded-full p-2" src='/icon.png' alt='logo' width={75} height={75} />
        <span className='text-sky-400'>ASYNCRO</span>
        <span className='text-fuchsia-500'>KNIGHTS</span>
      </div>
      <nav className='text-white text-sm cursor-pointer flex justify-center items-center gap-4 uppercase'>
        <a className='scroll-smooth' href='#home'>Home</a>
        <a className='scroll-smooth' href='#about'>About</a>
        <a className='scroll-smooth' href='#projects'>Projects</a>
        <a className='scroll-smooth' href='#team'>Team</a>
      </nav>
    </header>
  )
}

export default Navbar