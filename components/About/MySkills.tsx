import Image from 'next/image'
import skillsData from '@/data/SkillsData'

const MySkills = ()=>{
    return (
        <div className="items-left">
            <div>
               <h1 className="text-4xl font-bold py-6 text-left">My <strong className="text-purple-300 font-semibold">Skills</strong></h1>
                <p>I am passionate and proficient in the following languages and modern architectures.</p>
            </div>
            <br />
            <div>
                <h4 className='p-1'>LANGUANGE AND TOOLS</h4>
                <div className="flex flex-wrap">
                    {skillsData["languages"].map((data, index)=>(
                        <Image key={index} width={75} height={75} src={data} alt={''} className="p-2"/>
                    ))}
                </div>
                <br></br>
            </div>
            <div>
                <h4 className='p-1'>LIBRARIES AND FRAMEWORKS</h4>
                <div className="flex flex-wrap">
                    {skillsData["frameworks"].map((data, index)=>(
                        <Image key={index} width={100} height={100} src={data} alt={''} className="p-2"/>
                    ))}
                </div>
                <br></br>
            </div>
            <div>
                <h4 className='p-1'>DATABASES</h4>
                <div className="flex flex-wrap">
                    {skillsData["databases"].map((data, index)=>(
                        <Image key={index} width={100} height={100} src={data} alt={''} className="p-2"/>
                    ))}
                </div>
                <br></br>
            </div>
            
            <div>
                <h4 className='p-1'>OTHER</h4>
                <div className="flex flex-wrap">
                    {skillsData["other"].map((data, index)=>(
                        <Image key={index} width={100} height={100} src={data} alt={''} className="p-2"/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MySkills