import Image from 'next/image'

const skillsData={
    "languages": [
      "/skills/css-3.svg",
      "/skills/html-svgrepo-com.svg",
      "/skills/javascript-logo-svgrepo-com.svg",
      "/skills/python-svgrepo-com.svg",
      "/skills/java-svgrepo-com.svg",
      "/skills/typescript-logo-svgrepo-com.svg"
    ],
    "frameworks": [
      "/skills/react-svgrepo-com.svg",
      "/skills/nextjs-svgrepo-com (1).svg",
      "/skills/tailwind-svgrepo-com.svg",
      "/skills/django-icon-svgrepo-com.svg",
      "/skills/nestjs-svgrepo-com.svg",
      "/skills/express-svgrepo-com (1).svg"
    ],
    "databases": [
      "/skills/mongo-svgrepo-com.svg",
      "/skills/postgresql-svgrepo-com.svg",
    ],
    "other": [
      "/skills/figma-svgrepo-com.svg",
      "/skills/git-svgrepo-com.svg",

    ]
  }
  

const MySkills = ()=>{
    return (
        <div className="items-left">
            <div>
               <h1 className="text-4xl font-bold py-6 text-left">My <strong className="text-purple-300 font-semibold">Skills</strong></h1>
                <p>I Like to take responsibility to craft aesthetic user experience using modern fronend architectures.</p>
            </div>
            <br></br>
            <div>
                <h4 className='p-1'>LANGUANGE AND TOOLS</h4>
                <div className="flex flex-wrap">
                    {skillsData["languages"].map((data, index)=>(
                        <Image width={75} height={75} src={data} alt={''} className="p-2"/>
                    ))}
                </div>
                <br></br>
            </div>
            <div>
                <h4 className='p-1'>LIBRARIES AND FRAMEWORKS</h4>
                <div className="flex flex-wrap">
                    {skillsData["frameworks"].map((data, index)=>(
                        <Image width={100} height={100} src={data} alt={''} className="p-2"/>
                    ))}
                </div>
                <br></br>
            </div>
            <div>
                <h4 className='p-1'>DATABASES</h4>
                <div className="flex flex-wrap">
                    {skillsData["databases"].map((data, index)=>(
                        <Image width={100} height={100} src={data} alt={''} className="p-2"/>
                    ))}
                </div>
                <br></br>
            </div>
            
            <div>
                <h4 className='p-1'>OTHER</h4>
                <div className="flex flex-wrap">
                    {skillsData["other"].map((data, index)=>(
                        <Image width={100} height={100} src={data} alt={''} className="p-2"/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MySkills