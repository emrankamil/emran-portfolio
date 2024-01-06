"use client";

import { Typography } from "@material-tailwind/react";
import { ProjectCard } from "./ProjectCard";

const Project = () => {
  return (
    <main className="... mt-24">
      <div className="flex text-3xl ">
        <div className="flex-1 w-screen lg:flex-auto lg:w-7/12 lg:h-7/12 md:h-7/12 md:7/12 sm:7/12  py-56 px-16 justify-start items-center ">
          <div>
            <Typography variant="h4" className="text-4xl  ">
              Discover The Projects We Are Proud Of
            </Typography>
          </div>
          <br />
          <Typography
            className="
          "
          >
            {" "}
            Lorem ipsum dolor sit consectetur adipisicing elit. Sequi, dolores
            repellendus voluptas consequuntur accusamus cupiditate! Asperiores
            iusto rerum quae, magnam itaque voluptas facilis totam aliquid quasi
            nobis quos. Explicabo, m ipsum dolor sit amet consectetu
          </Typography>
        </div>
      </div>
      <div className="flex flex-row flex-wrap  md:gap-12 items-center justify-center  ">
        {(() => {
          const cards = [];

          for (let i = 0; i < 8; i++) {
            cards.push(<ProjectCard />);
          }
          return cards;
        })()}
      </div>
    </main>
    
  );
};

export default Project;
