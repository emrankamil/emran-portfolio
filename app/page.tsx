import Heading from '@/components/Heading'
import AboutMe from '@/components/AboutMe'
import NavBar from '@/components/NavBar'
import Projects from '@/components/projects/Projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <Heading/>
      <NavBar/>
      <Projects/>
      <AboutMe/>
      
    </main>
  )
}
