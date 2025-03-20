"use client";
import Image from "next/image";
import MySkills from "./MySkills";
import GitHub from "./GitHub";
import person from "@/public/img/programmer.svg";

const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col py-12 bg-opacity-0 text-left">
      <div className="text-center ">
        <h1 className="text-purple-300 text-5xl font-bold p-4">ABOUT ME</h1>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className={`flex flex-col md:flex-row`}>
        <div className="basis-1/2">
          <div className="text-4xl text-left justify-center font-semibold py-6">
            Get to
            <strong className="text-purple-300"> know </strong>
            me!
          </div>
          <p className="mb-4">
            {" "}
            I am passionate Full-Stack developer and Computer Engineer with
            expertise in Typescript, Node, Nest, Django, Django rest-framework,
            React.js, Next.js, and Express.js.
          </p>
          <p className="mb-4">
            I am known for my strong work ethics, team-oriented approach and
            problem-solving skills.
          </p>
          <p className="mb-4">
            {" "}
            I'm open to Job opportunities where I can contribute learn and grow
            If you have a good opportunity that matches my skills and experience
            then don't hesitate to contact me.
          </p>
        </div>
        <div className=" basis-1/2 my-auto ">
          <Image src={person} width={450} height={450} alt="card-image" />
        </div>
      </div>

      <MySkills />
      {/* <GitHub/> */}
    </div>
  );
};

export default AboutMe;
