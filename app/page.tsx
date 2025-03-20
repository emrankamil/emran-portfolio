import Heading from "@/components/Home/Heading";
import AboutMe from "@/components/About/AboutMe";
import NavBar from "@/components/Home/NavBar";
import Project from "@/components/projects/Project";
import SocialLinks from "@/components/SocialLinks";
import ContactMe from "@/components/contact/ContactMe";
import Footer from "@/components/footer/Footer";
import Resume from "@/components/Resume/Resume";
import TempResume from "@/components/Resume/TempResume";
import Header from "@/components/Home/Header";
import Experience from "@/components/Experience/exp";

export default function Home() {
  return (
    <main className="text-mainColor text-lg w-full md:text-xl mx-auto text-left text-white">
      <div className="md:w-4/5 mx-auto px-6 ">
        <NavBar />
        <Header />
        {/* <SocialLinks/> */}
        <AboutMe />
        <Experience />
        <Project />
        <TempResume />
        {/* <Resume/> */}
        <ContactMe />
      </div>

      <Footer />
    </main>
  );
}
