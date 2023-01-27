import React from 'react'
import Image from 'next/image'

const Card = ({ img, name, role, about }: { img: string, name: string, role: string, about: string }) => {
  return (
    <section className='flex flex-col items-center justify-center h-full w-1/4 rounded-tr-2xl rounded-bl-2xl overflow-hidden'>
      <div className='w-full h-1/3 bg-amber-400 relative'>
        <Image className='rounded-full scale-150 absolute top-16 left-1/2 -translate-x-1/2 bg-black grayscale
        before:inset-0 before:absolute before:bg-red-500 before:scale-150 before:z-10'
          src={img} alt='Wriddhi Hazra' width={150} height={150} />
      </div>
      <div className='w-full h-2/3 bg-black flex flex-col justify-center items-center' >
        <h3 className='text-white text-base'>{name}</h3>
        <h4 className='text-slate-300 text-base font-medium'>{role}</h4>
        <p className='text-white font-medium text-base p-6 text-center'>{about}</p>
      </div>
    </section>
  )
}

export default Card