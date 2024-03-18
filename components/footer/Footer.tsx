'use client'

import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { PiTelegramLogo } from "react-icons/pi";
import { SiLeetcode } from "react-icons/si";
 
const currentYear = new Date().getFullYear();
 
export function FooterNew() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
                      variant="small"
                      className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0" placeholder={undefined}          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Emran Kamil</a>.
          </Typography>
          <div className="flex space-x-4 my-4">
            <Link href="mailto:emran.kamil@a2sv.org" target="_blank" rel="noopener noreferrer">
                <MdOutlineEmail size={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FiGithub size={24} />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <CiLinkedin size={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <PiTelegramLogo size={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <SiLeetcode  size={24} />
            </Link>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterNew