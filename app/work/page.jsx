"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
  {
    num: '01', 
    category: 'front-end',
    title: 'project 1',
    description: 'Build a simple front page of resume.',
    stack: [{ name: 'HTML 5, CSS 3' }],
    image: '/assets/work/resume.jpg',
    live: 'https://resume-eta-teal.vercel.app/',
    github: ""
  },
  {
    num: '02', 
    category: 'fullstack',
    title: 'project 2',
    description: 'Build my Portfolio.',
    stack: [{ name: 'HTML 5, CSS 3, JavaScript' }],
    image: '/assets/work/portfolio.jpg',
    live: 'https://my-portfolio-mtm-iota.vercel.app/',
    github: ""
  },
  {
    num: '03', 
    category: 'front-end',
    title: 'project 3',
    description: 'Build front-end site of hitmarker',
    stack: [{ name: 'HTML 5, CSS 3' }],
    image: '/assets/work/hitmarker.jpg',
    live: 'https://hitmarker-jade.vercel.app/',
    github: ""
  },
  {
    num: '04', 
    category: 'Multipul pages front-end',
    title: 'project 4',
    description: 'Build project of mike keon',
    stack: [{ name: 'HTML 5, CSS 3' }],
    image: '/assets/work/mike.jpg',
    live: 'https://mike-koen-qy9o.vercel.app/',
    github: ""
  },
  {
    num: '05', 
    category: 'front-end',
    title: 'project 5',
    description: 'Build a copy of Digital Marketing Agency website, main page.',
    stack: [{ name: 'HTML 5, CSS 3' }],
    image: '/assets/work/dma.jpg',
    live: 'https://digital-marketing-agency-peach.vercel.app/',
    github: ""
  },
  {
    num: '06',
    category: 'front-end',
    title: 'project 6',
    description: 'Build a simple front page of growthware, a workplace of innovative thinkers.',
    stack: [{ name: 'HTML 5, CSS 3' }],
    image: '/assets/work/growthware.jpg',
    live: 'https://growthware-delta.vercel.app/',
    github: ""
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project store based on current slide index
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease:'easeIn'} }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:jusify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">{item.name}</li>
                  );
              })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full " >
                    <div className="w-full h-[460px] relative flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image}
                        fill 
                        className="object-cover" 
                        alt=""  />
                    </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slidder buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work