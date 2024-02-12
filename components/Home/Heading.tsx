'use client'

import Image from 'next/image'
import Type from './Type';
import gif from '@/public/img/thoughtworks-gif_dribbble.gif'

const Heading = ()=>{
    return( 
        <section id="heading" className="w-full">
            <div className="flex flex-col pb-12 pt-20">
                <div className="flex flex-1 flex-col flex-wrap md:flex-nowrap md:flex-row items-center">
                    <div className="flex-1">
                        <div className="max-w-2xl text-4xl">
                            <div className="">
                                <h1 className=" pb-4 text-2xl text-white">
                                Hi,
                                </h1>

                                <h1 className="heading-name text-white">
                                    I'M
                                    <strong className="main-name text-CYAN-400"> EMRAN KAMIL</strong>
                                </h1>
                            </div>
                            

                            <div style={{ textAlign: "left" }} className="py-12 text--400">
                                <Type />
                            </div>

                        </div>
                    </div>   
                    <div className='flex-1'>
                        <Image width={500} height={500} alt="" src={gif} />
                    </div>      
                </div>         
            </div>
        </section>

    )    
}

export default Heading;


