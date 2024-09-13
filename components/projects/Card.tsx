'use client'

import React from "react";
import Image from 'next/image'
import { ProjectData } from '@/types/types';
import {Tags } from 'astro-boilerplate-components';
import { Button } from "@material-tailwind/react";
import { BsGithub } from "react-icons/bs";
import { FiLink } from "react-icons/fi";

export default function PorjectCard({ project }: { project: ProjectData }) {
  return (
    <>
    <div className="flex flex-col gap-2 w-full h-72 m-4 px-2">
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
                {project.id > 2 ? (
                  
                    <Button
                      variant="gradient"
                      placeholder={undefined}
                      className="flex items-center gap-2 text-xs bg-black p-1 rounded-sm"
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <BsGithub className="" />
                      Github
                    </Button>
                ) : (
                  
                    <Button
                      variant="gradient"
                      placeholder={undefined}
                      className="flex items-center gap-2 text-xs bg-black p-1 rounded-sm"
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <FiLink className="" />
                      Website
                    </Button>
                )}
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
              {project.demo && (        
                <a href={project.demo} className="p-0 m-0">
                  <Button
                    variant="gradient"
                    placeholder={undefined}
                    className="flex items-center gap-2 text-xs bg-cyan-900 p-1 rounded-md"
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <FiLink className="" />
                    Demo
                  </Button>
                </a>
              )}  
            </div>    
          </div>
          
          
          
        </div>
        <div className="z-10 absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        
        
      </div>

    </div>


    </>    
  );
}