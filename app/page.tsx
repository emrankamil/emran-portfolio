import Heading from '@/components/Home/Heading'
import AboutMe from '@/components/About/AboutMe'
import NavBar from '@/components/NavBar'
import Project from '@/components/projects/Project'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  return (
    <main className="text-mainColor text-lg md:text-xl md:w-4/5 mx-auto text-left px-6 ">
      
      <Heading/>
      {/* <SocialLinks/>*/}
      <NavBar/>
      <AboutMe/>
      <Project/>
      
      
    </main>
  )
}

