"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Footer from '@/components/Footer'



export default function Home() {

  const [timing, setTiming] = useState<number>(0)

  const colorScheme = [

  ]

  return (
    <>
      <main className={`font-inter text-8xl font-extrabold p-10 flex flex-col gap-8 relative`}>
        <header className='gradient-01 h-8'></header>
        <Navbar />
        <section id="home"
          className='h-[36rem] overflow-hidden 
      bg-[url(/hero.png)] bg-cover bg-left-top bg-no-repeat bg-fixed 
      rounded-xl my-10'>
          <div className="text-right w-1/2 ml-auto h-full grid place-items-center backdrop-blur-lg bg-gradient-to-r from-transparent to-black">
            <h1 className='bg-transparent text-white p-10 font-bold text-8xl flex flex-col' >
              <span className=" bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent p-2">Into. </span>
              <span className=" bg-gradient-to-r from-orange-600 via-red-600 to-fuchsia-600 bg-clip-text text-transparent p-2">The. </span>
              <span className=" bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent p-2">Metaverse. </span>
            </h1>
          </div>
        </section>
        <h1 className='bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent flex justify-start items-center gap-4 w-full mx-auto py-10'>
          About Us
        </h1>

        <section id="about"
          className='text-lg font-medium text-white scroll-smooth cursor-default duration-700
        flex justify-between items-center rounded-2xl overflow-hidden shadow-black shadow-lg border-t-2 border-black' >
          <div className='h-full p-12 backdrop-blur-lg'>
            We are team
            <text className='bg-gradient-to-r from-sky-300 to-blue-600 bg-clip-text text-transparent
        hover:from-fuchsia-500 hover:to-purple-600'>
              &nbsp;
              AsyncroKnights
            </text>
            , a group of passionate developers and designers who are dedicated to creating immersive experiences.
            <br />
            <br />
            With <strong className='text-white'> XR </strong>, we can blend the physical and digital worlds to create truly engaging and interactive experiences.
            Whether it's for gaming, education, or enterprise, we have the skills and experience to bring your ideas to life.
            <br />
            <br />
            Our goal is to create immersive products that run seamlessly across a variety of platforms,
            including virtual reality, augmented reality, and mixed reality.
            to help bring mundane experiences to the next level by leveraging the power of extended reality.
            From ideation to development to deployment, we're here to see our dream every step of the way.
            <br />
            <br />
            Join us on the forefront of technological innovation and
            let's create something truly amazing together
            that revolutionizes the way we interact with the world.
          </div>
          <Image alt='about' src='/about.png' width={2000} height={2000} />
        </section>

        <h1 className='bg-gradient-to-r from-sky-300 to-purple-500 bg-clip-text text-transparent flex justify-end items-center gap-4 w-full mx-auto py-10'>
          Projects
        </h1>
        <section id="projects"
          className='overflow-hidden 
      bg-[url(/therapy.png)] bg-contain bg-right bg-fixed bg-no-repeat
      rounded-xl my-10'>
          <div className="text-right w-1/2 mr-auto h-full flex flex-col justify-start items-center backdrop-blur-lg bg-gradient-to-l from-purple-700 via-purple-900 to-black">
            <h1 className='text-black p-10 font-bold text-6xl w-full' >
              Cyber Therapy
            </h1>
            <p className='text-base text-white font-medium p-10 text-le'>
              This project, is a virtual reality experience that aims to help people with mental health issues.
              It is an integration of XR and AI, two of the most cutting-edge technologies in the world today.
              The project is currently in development, and we hope to release it in the near future.
              <br />
              <br />

              The basic idea involves a user interacting with a virtual therapist in a virtual environment.
              <br />
              <br />
              The therapist will then use a combination of AI and human psychology to help the user overcome their issues.
              <br />
              <br />
              The user will be able to interact with the therapist in a variety of ways, including through speech and gesture.
              <br />
              <br />
              The therapist will then use this information to help the user overcome their issues.
              <br />
              <br />

              On ocassion that the therapist is not available, the user will be able to interact with a virtual therapist,
              which is nothing but a very powerful NLP model that is to be trained using the real, natural flow of conversations
              between real patients and real therapists, which can then appropriately guide the user through a series of questions
              and exercises to help them overcome their issues.

            </p>
          </div>
        </section>
        <h1 className='bg-gradient-to-r from-sky-300 to-purple-500 bg-clip-text text-transparent flex justify-start items-center gap-4 w-full mx-auto py-10'>
          Our Team
        </h1>
        <section className='w-11/12 h-[30rem] mx-auto flex justify-center items-center gap-10' id="team">
          <Card
            img={'/Me.png'}
            name={'Wriddhi Hazra'}
            role={'Founder'}
            about={'Web Developer, working with Unity, Blender, and WebGL 3D technology to enchance UX'}
          />
          <Card
            img={'/Tirthajyoti.png'}
            name={'Tirthajyoti Nag'}
            role={'Co-Founder'}
            about={'Machine Learning Engineer, working with GAN, NLP, and AI to power the XR experience'}
          />
        </section>
      </main>
      <Footer />
    </>
  )
}
