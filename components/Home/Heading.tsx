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


const Heading = ()=>{
    return( 
    <div id="heading" className="flex flex-col pb-12 pt-20 w-full md:h-screen">
        <div className="flex flex-1 flex-col flex-wrap md:flex-nowrap md:flex-row items-center">
            <div className="flex-1">
                <div className="max-w-2xl text-white">

                    <div className="pb-6">
                        <h1 className="text-6xl font-bold">
                            Hi, I'am <span className="text-purple-300">Emran</span>
                            <br/>Kamil
                        </h1>
                    </div>

                    <div className="pb-2">
                    <h2 className="text-2xl font-medium">A FULL-STACK DEVELOPER</h2>
                    </div>

                    <div className="flex space-x-4 my-4">
                        <Link href="mailto:emran.kamil@a2sv.org" target="_blank" rel="noopener noreferrer">
                            <MdOutlineEmail size={24} />
                        </Link>
                        <Link href="https://github.com/emrankamil" target="_blank" rel="noopener noreferrer">
                            <FiGithub size={24} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/emran-kamil" target="_blank" rel="noopener noreferrer">
                            <CiLinkedin size={24} />
                        </Link>
                        <Link href="https://t.me/emex_nord" target="_blank" rel="noopener noreferrer">
                            <PiTelegramLogo size={24} />
                        </Link>
                        <Link href="https://leetcode.com/emrankamil" target="_blank" rel="noopener noreferrer">
                            <SiLeetcode  size={24} />
                        </Link>
                    </div>

                    <div className="pb-8">
                        <Link href={'#contact'}>
                            <div className='bg-purple-300 hover:bg-purple-200 rounded-none font-bold text-black px-4 py-2 inline-block min-w-min'>
                                Hire Me
                            </div>
                        </Link>
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

export default Heading;


// "@emotion/react": "^11.11.4",