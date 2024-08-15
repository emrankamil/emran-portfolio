'use client'

import Image from 'next/image'
import gif from '@/public/img/thoughtworks-gif_dribbble.gif'
import Button from '@mui/material/Button';

import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";
import { SiLeetcode } from "react-icons/si";
import Link from 'next/link';


const Header = ()=>{
    return( 
        <div id="header" className="w-full md:h-screen flex flex-col pb-12 pt-20">  

            <div className="flex flex-1 flex-col flex-wrap md:flex-nowrap md:flex-row items-center">
                <div className="flex-1">
                    <div className="max-w-2xl text-white">

                        <div className="pb-4">
                        <h1 className="text-6xl font-bold py-4">
                            Hi, I'am <span className="text-purple-300">Emran</span>
                            <br/>Kamil
                        </h1>
                        </div>

                        <div className="pb-2">
                        <h2 className="text-2xl font-medium">A FULL-STACK DEVELOPER</h2>
                        </div>

                        <div className="flex space-x-4 my-4">
                            <a href="mailto:emran.kamil@a2sv.org">
                                <MdOutlineEmail size={24} />
                            </a>
                            <a href="https://instagram.com">
                                <FiGithub size={24} />
                            </a>
                            <a href="https://facebook.com">
                                <CiLinkedin size={24} />
                            </a>
                            <a href="https://twitter.com">
                                <PiTelegramLogo size={24} />
                            </a>
                            <a href="https://linkedin.com">
                                <SiLeetcode  size={24} />
                            </a>
                            <a href="https://www.google.com" target="_blank">Go to Google</a>

                        </div>
            
                        <div className="pb-8">
                            <a href={'#contact'}>
                                <div className='bg-purple-300 hover:bg-purple-200 rounded-none font-bold text-black px-4 py-2 inline-block min-w-min'>
                                    Hire Me
                                </div>
                            </a>
                        </div>
                    </div>
                </div>  
                <div className='flex-1'>
                    <Image width={500} height={500} alt="" src={gif} />
                </div>      
            </div>         
        </div>


    )    
}

export default Header;


