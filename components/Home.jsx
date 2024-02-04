'use client'

import React from "react";
import Type from './Home/Type'
import Image from 'next/image'


function Home() {
  return (
    <div className="flex">
      <div className="flex-2">
        <h4 className="text-gray-500">Hi, my name is</h4>
        <div className="text-6xl ">Emran Kamil.</div>
        <Type/>
        <div className="pl-16">
          <p>
            I am a Full-Stack developer specializing in building highly performant applications that solve 
            real-problems and provide users with an awsome experience. I'm currently working using React, 
            Next.js and Django.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <Image src="/img/avatar.svg" alt="Avatar" width={500} height={500}/>
      </div>
    </div>
  );
}

export default Home;