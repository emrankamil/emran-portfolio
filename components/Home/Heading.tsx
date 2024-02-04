'use client'

import Image from 'next/image'
import Type from './Type';

const Heading = ()=>{
    return(
        <section id="heading" className="w-full">
            <div className="flex flex-col pb-12 pt-20">
                <div className="flex flex-1 flex-col flex-wrap md:flex-nowrap md:flex-row items-center">
                    <div className="flex-1">
                        <div className="max-w-2xl text-4xl">
                            <div className="">
                                <h1 className=" pb-4 text-white">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
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
                        <Image width={450} height={450} alt="" src="/img/home-main.svg"/>
                    </div>      
                </div>         
            </div>
        </section>

    )    
}

export default Heading;


