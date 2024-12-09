import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 w-full bg-black px-20 data-aos="fade-right" '>
       <div className='grid md:grid-cols-2 gap-10 ' >
        <div className='space-y-8'>
           <h2 className='text-5xl text-pink-400' >Get in Touch</h2>
           <p className=' text-pink-400 pt-2' >
            Drop me a line, give me a call, or send me a message by submitting the form.
           </p>
           <div className='flex gap-3 items-center text-pink-400'>
                   <CiMail size={30}/> Rameshajaved1@gmail.com
           </div>
           <div className='flex gap-3 items-center text-pink-400' >
                   <FaWhatsapp size={30}/> (+92) 314-1234569
           </div>
           <div className='flex gap-3 items-center text-pink-400' >
                   <FaGithub size={30}/>https://github.com/Ramesha-sheikh
           </div>
           <div className='flex gap-3 items-center text-pink-400' >
                   <CiLinkedin size={30}/>https://www.linkedin.com/in/ramesha-sheikh-4408a5244/
           </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' >
                <label htmlFor="name" className='text-gray-600'>Name</label>
                <input type="text"
                 className='h-[40px] bg-transparent border text-pink-400 focus:ring-2' 
                id='name'/>

            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='text-gray-600'>Email</label>
                <input type="text"
                 className='h-[40px] bg-transparent border text-pink-400 focus:ring-2  ' 
                id='email'/>

            </div>

            <div className='flex flex-col gap-1' >
                <label htmlFor="message" className='text-gray-600'>Message</label>
                <textarea 
                 className='bg-transparent border border-pink-400 focus:ring-2 ' 
                id='message' rows={8}>
                </textarea>

            </div>
        </div>
        <button className='bg-pink-400 p-2 px-6 w-48 text-white hover:bg-pink-400' data-aos="fade-right">
          Send
        </button>
      </div>      
    </div>
  )
}

export default Contact

