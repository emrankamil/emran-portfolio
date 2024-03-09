'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link'
import { Button, Alert } from '@material-tailwind/react';


function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  
const Result = ()=>{
    return (
    <Alert
    icon={<Icon />}
    className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
    >
    Your message have been successfully submited. Thanks for reaching out to me.
    </Alert>
    )
}

const ContactMe = ()=>{

    const form: React.RefObject<HTMLFormElement> = useRef(null);
    const [result, showResult] = useState(false);

    const sendEmail = (e:any) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('serve_1f8lepj', 'template_365ecqb', form.current, {
                    publicKey: 'QXToY77Rfsvi-RS3v',
                })
                .then(
                    () => {
                        showResult(true);
                        // location.reload();
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            console.error('Form element is undefined');
        }
    };

    return (
    <div id="contact" className='flex flex-col gap-4 '>
        
        <div className="text-center " >
            <h1 className="text-purple-300 text-5xl font-bold p-4">CONTACT ME</h1>
            <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        </div>

        <div className="p-6 rounded-lg ">
            <h1 className="text-4xl font-bold py-6 text-left">Get <strong className="text-purple-300 font-semibold">In Touch</strong></h1>
            <form className="mt-8 space-y-4 mx-auto w-full sm:w-3/5" ref={form} onSubmit={sendEmail}>
                <input type='text' name="user_name" placeholder='Full Name'
                    className="w-full rounded-md py-3 px-4 text-sm bg-transparent border-2 border-gray-300 shadow-lg shadow-purple-900 " required/>
                <input type='email' name="user_email"  placeholder='Email'
                    className="w-full rounded-md py-3 px-4 text-sm bg-transparent border-2 border-purple-300" required/>
                <textarea name="message" placeholder='Message' rows={6}
                    className="w-full rounded-md px-4 text-sm pt-3 bg-transparent border-2 border-purple-300" required></textarea>
                <div>
                    {result ? <Result/> : null}
                </div>
                <Button type='submit' value="Send"
                    className="text-white bg-transparent border-2 border-purple-300 shadow-purple-900 shadow-lg hover:shadow-xl font-semibold rounded-md text-sm px-4 py-3 flex gap-2 items-center justify-center w-full" placeholder={undefined}>
                    Send
                </Button>
                
            </form>
        </div>
        <div className="absolute top-4 right-4">
            {result ? <Result/> : null}
        </div>
    </div>
    )
}

export default ContactMe

