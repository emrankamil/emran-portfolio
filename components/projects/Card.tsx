'use client'

import React from "react";
import Image from 'next/image'
import { ProjectData } from '@/types/types';
import {Tags } from 'astro-boilerplate-components';
import { Button } from "@material-tailwind/react";
import { BsGithub } from "react-icons/bs";

export default function PorjectCard({ project }: { project: ProjectData }) {
  return (
    <>

    <div className="flex flex-col gap-2 w-full h-72">
      <div className="absolute inset-0 bg-center dark:bg-black"></div>

      <div className="group relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <Image src={project.background} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" width={500} height={500}/>
        </div>
        <div className=" gap-4 absolute bottom-0 z-20 m-0 pb-3 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <div>
            <div className="flex gap-3 items-end">
              <div className=''>
                <h1 className="font-serif text-2xl font-bold text-white shadow-xl">{project.title}</h1>
              </div>
              <a href={project.github} className="p-0 m-0">
                <Button variant="gradient" placeholder={undefined} className="flex items-center gap-2 text-xs bg-black p-1 rounded-sm" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <BsGithub className=""/>
                  Github
                </Button>
                </a> 
            </div>
            <h1 className="text-sm text-gray-100 ">{project.description}</h1>          
            <div className="flex gap-1 bg-transparent flex-wrap pt-1 text-xs">
              <div className="bg-gray-500 rounded">
                <Tags color="BLUE" >{project.techstacks[0]}</Tags>
              </div>
              <div className="bg-red-700 rounded">
                <Tags color="BLUE" >{project.techstacks[1]}</Tags>
              </div>
              <div className="bg-amber-800 rounded">
                <Tags color="BLUE" >{project.techstacks[2]}</Tags>
              </div>     
            </div>    
          </div>
          
          
          
        </div>
        <div className="z-10 absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        
        
      </div>

    </div>


    </>    
  );
}

{/* <div className="max-w-sm bg-white border border-gray-200 h-96 rounded-lg shadow flex-col shadow-lg hover:shadow-md hover:shadow-blue-700">
      <div className="h-2/3 ">
        <a href="#" >
            <Image className="rounded-t-lg object-fill" src="/projects/blog-hosting-sites.jpg" alt="" />
        </a>
      </div>
        
      <div className="h-1/3">
          <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">4K-Labs Website</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
      </div>
      
    </div> */}