'use client'
import {Logo} from './Logo';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

const NavBar = ()=>{
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        // Close the mobile menu when the screen size changes to a larger breakpoint
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setMobileMenuOpen(false);
            }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <div className="fixed w-full top-0 bg-opacity-15 backdrop-blur-sm z-50 mx-auto px-4 sm:px-6 lg:px-8 font-mono">
            <div className="relative flex h-16 items-center justify-between">
                <div className={`relative flex h-16 items-center justify-between ${isMobileMenuOpen ? '' : 'sm:hidden'}`}>
                    {/* <!-- Mobile menu button--> */}
                    <button type="button" 
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
                        aria-controls="mobile-menu" 
                        aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                        onClick={toggleMobileMenu}>

                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        {/* <!--Icon when menu is closed.*/}
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        {/* <!--Icon when menu is open. */}
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center items-stretch ">
                    <div className="px-2">
                        <a href="" className="flex" aria-current="page">
                            <Logo
                            icon={
                                <svg
                                className="mr-1 h-8 w-8 stroke-purple-300 text-cyan-600"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                >
                                <path d="M0 0h24v24H0z" stroke="none"></path>
                                <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                                <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                                <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                                <path d="M4 20h14"></path>
                                </svg>
                            }
                            name=""
                            />
                            <strong className="text-blue-gray-300 pt-1 text-2xl">EK.</strong>
                        </a>
                    </div>
                    
                    <div className="hidden sm:ml-6 sm:block text-primary">
                        <div className="flex space-x-4">
                            
                            <a href="#about" className=" text-white rounded-md px-1 py-2 text-lg font-medium">About Me</a>
                            <a href="#projects" className=" text-white rounded-md px-1 py-2 text-lg font-medium">Projects</a>
                            <a href="#resume" className=" text-white rounded-md px-1 py-2 text-lg font-medium">Resume</a>
                            <a href="#contact" className=" text-white rounded-md px-1 py-2 text-lg font-medium">Contact Me</a>

                        </div>
                </div>
            </div>

            </div>
            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={`${isMobileMenuOpen ? '' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="space-y-1 mr-8 pb-3 pt-2 mx-auto"> 
                    <a href="" className="text-gray-300 hover:border-2 hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
                    <a href="#about" className="text-gray-300 hover:border-2 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About Me</a>
                    <a href="#projects" className="text-gray-300 hover:border-2 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                    <a href="#resume" className="text-gray-300 hover:border-2 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Resume</a>
                    <a href="#contact" className="text-gray-300 hover:border-2 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact Me</a>

                </div>
            </div>
    </div>

)
}

export default NavBar
