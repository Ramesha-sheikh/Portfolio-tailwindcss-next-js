import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/ramesha.png)] bg-cover bg-black px-[20px]"
      style={{ backgroundSize: "35%", backgroundPosition: "left 800px top 100px" }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
      <div className="flex items-center text-pink-400">
          <div className="text-center lg:text-left px-5">
            <h1 className="text-3xl lg:text-5xl font-bold mb-2">
              <span className="text-white">Hi,</span> I am a Full Stack Developer
            </h1>
            <p className="mb-6 text-white">
            I am a web developer with expertise in HTML, CSS, Tailwind CSS, and Next.js. I create responsive, dynamic, and accessible websites that provide seamless user experiences.
            </p>
            
            {/* Buttons Section */}
            <div className="flex justify-center lg:justify-start space-x-5">
              <button 
                aria-label="Follow Button" 
                className="flex items-center text-white gap-1 px-6 py-3 rounded-2xl bg-rose-500 font-semibold hover:bg-rose-700"
              >
                Follow
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                     stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
              <button 
                aria-label="Resume Button" 
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-pink-400 font-semibold text-black"
              >
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                     stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Optional Placeholder */}
        <div className="hidden lg:block"></div>
      </div>
    </div>
  )
}

export default Hero


