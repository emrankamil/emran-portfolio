import Heading from '@/components/Home/Heading'
import AboutMe from '@/components/About/AboutMe'
import NavBar from '@/components/Home/NavBar'
import Project from '@/components/projects/Project'
import SocialLinks from '@/components/SocialLinks'
import ContactMe from '@/components/contact/ContactMe'
import Footer from '@/components/footer/Footer'
import FooterNew from '@/components/footer/FooterNew'
import Resume from '@/components/Resume/Resume'

export default function Home() {
  return (
    <main className="text-mainColor text-lg w-full md:text-xl mx-auto text-left text-white">
      <div className="md:w-4/5 mx-auto px-6 ">
        <Heading/>
        <SocialLinks/>
        <NavBar/>
        <AboutMe/>
        <Project/>
        {/* <Resume/> */}
        <ContactMe/>
      </div>

      <FooterNew/>

    </main>
  )
}

