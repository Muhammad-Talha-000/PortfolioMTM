"use client";

import { Info } from 'lucide-react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs } from 'react-icons/si'

// about data
const about = {
  title: 'About Me', 
  description: "I am a Frontend Developer with a passion for creating beautiful and functional websites and applications. I have a strong understanding of HTML, CSS, and JavaScript, and I am experienced in using React and Next.js to build dynamic and interactive user interfaces. I am also familiar with Tailwind CSS and Figma, which I use to create visually appealing designs.",
  Info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammad Talha"
    },
    {
      fieldName: "Phone",
      fieldValue: "+92 333 529 5244"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years"
    },
    {
      fieldName: "Age",
      fieldValue: "20"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu, Punjabi"
    },
    {
      fieldName: "Email",
      fieldValue: "talhahere000@gmail.com"
    },
  ]
}

// experience data
const experience = {
  icon: '',
  title: 'My Experience',
  description: 'I have worked on several projects, both individually and as part of a team, using a variety of technologies and frameworks. I have experience with HTML, CSS, JavaScript, React and Next.js, and I am always looking to learn new skills and technologies. I am passionate about creating high-quality, user-friendly websites and applications.',
  items: [
    {
      company: "Stellar Stack",
      position: "Internship in Front-end Development",
      duration: "Jan-May, 2024"
    },
    {
      company: "IIUI Research Lab",
      position: "Internship in Machine learning",
      duration: "July-August, 2023"
    },
    {
      company: "Soluton of Technology",
      position: "Learn Languagues (C++ and OOP)",
      duration: "July-August, 2022"
    },
  ]
}

// education data
const education = {
  icon: '',
  title: 'My Education',
  description: 'I completed my fsc (12 year study period) and currently doing Bachelor of Science (4 year) degree.',
  items: [
    {
      institute: "Internation Islamic University",
      degree: "Bs Computer Engineering",
      duration: "2022 - present"
    },
    {
      institute: "Global college",
      degree: "Fsc ICS",
      duration: "2020 - 2022"
    },
    {
      institute: "502 Model College",
      degree: "Matric",
      duration: "2018 - 2020"
    },
    {
      institute: "Richard Academy",
      degree: "English course",
      duration: "2019"
    },
  ]
}

// skills data 
const skills = {
  icon: '',
  title: 'My Skills',
  description: 'I have a good knowledge of Programming languages, C++, DSA and Object oriented programming including development languages',
  items: [
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS3',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaReact />,
      name: 'React JS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next JS',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <FaNodeJs />, 
      name: 'Node JS',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'}
       }}
       className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue='experience' 
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" >Experience</TabsTrigger>
            <TabsTrigger value="education" >Education</TabsTrigger>
            <TabsTrigger value="skills" >Skills</TabsTrigger>
            <TabsTrigger value="about" >About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index} 
                          className='bg-[#232329] h-[184px] py-6 px-10 rouunded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                            <div className='flex items-center gap-3'>
                              {/* dots */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.company}</p>
                            </div>
                        </li>
                      );
                    })}
                      
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index} 
                          className='bg-[#232329] h-[184px] py-6 px-10 rouunded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                            <div className='flex items-center gap-3'>
                              {/* dots */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.institute}</p>
                            </div>
                        </li>
                      );
                    })}
                      
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.items.map((items, index) => {
                    return (
                      <li
                      key={index}
                      className="flex items-center gap-3"
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{items.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{items.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.Info.map((items, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{items.fieldName}</span>
                        <span className='text-xl'>{items.fieldValue}</span> 
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume