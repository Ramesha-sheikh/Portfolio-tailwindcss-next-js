// import { title } from 'process'
import React from 'react'
import Heading from '@/components/Heading'
import Card from './Card'
// import { strict } from 'assert'


const data =[ 
    {
        id:0,
        title:"Resume Builder App",
        desc:" Built a seamless Resume BuliderApp using Html ,CSS,Typescript to showcase my skills in creating fast, responsive, and dynamic web applications",
        img:"/resume.png",
        tags:["React","Tailwind"]
    },
    {
        id:1,
        title:"GIAIC Website",
        desc:"Built a seamless GIAIC website clone using Next.js to showcase my skills in creating fast, responsive, and dynamic web applications",
        img:"/next.png",
        tags:["Next.js","Tailwind"]
    },
    {
        id:2,
        title:"Fast Food",
        desc:"Developed a Fast Food website to demonstrate my ability to build fast, responsive, and dynamic by using cutting-edge technologies.",
        img:"/fastfood.png",
        tags:["next.js","typescript","React.js","TailwindCSS"]
    },
   
    {
        id:3,
        title:" Landing page website ",
        desc:"Built a seamless Landing page experience website to showcase my skills in creating fast, responsive, and dynamic web applications.",
        img:"/landing.png",
        tags:["HTML5","TailwindCSS","typescript"]
    },{
        id:4,
        title:"Portfolio website",
        desc:"Created a professional portfolio website to showcase my skills in building fast, responsive, and dynamic web applications using modern technologies",
        img:"/portfolo.png",
        tags:["HTML5","CSS3","Javascript"]

    
    },
    {
        id:5,
        title:"Facebook Clone",
        desc:"Built a Facebook clone using HTML5 and CSS3, featuring login, sign-in, and forgotten password pages to showcase my skills in creating dynamic web applications",
        img:"/j.jpg",
        tags:["Html","Css","Typescript"]
        
    },
   
    {
        id:6,
        title:"Quiz Application Cli",
        desc:"Built a  website using HTML, CSS, and TypeScript, providing personalized quiz results with interactive features",
        img:"/quiz.png",
        tags:["Typescript"]
    },
    {
        id:7,
        title:"Next.js Portfolio",
        desc:" Built a seamless ToDo app using React.js to showcase my skills in creating fast, responsive, and dynamic web applications",
        img:"/nextresume.png",
        tags:["React","Tailwind" ,"Next.js","typescript"]
    },
    {
        id:8,
        title:"Easypaisa CLI",
        desc:"Built an EasyPaisa CLI application using TypeScript and Node.js, offering a simple and efficient way to interact with payment services",
        img:"/app.png",
        tags:["Html","Css","Typescript"]
        
    },
]

  
const Projects = () => {
  return (
    <div id='projects' className='pt-32 no-underline  bg-black w-full  text-pink-400'>
        <Heading title='My Projects ' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2  text-wrap lg:grid-cols-2 place-items-center no-underline'>
            {data.map((el) => (
           <Card
            key ={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags} 
            
            />
            ))}
        </div>
      
    </div>
  )
}

export default Projects
