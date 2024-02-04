
import React from 'react';
import { ProjectData } from '@/types/types';
import Image from 'next/image'

const ProjectCard = ({ project }: { project: ProjectData }) => {

  const backgroundImageUrl = '/img/projectImg.jpg';

  const cardStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`,
    height:project.height,
  };

  return (
    <div className="block rounded-lg bg-cover m-2 shadow-lg" style={cardStyle}>
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 text-white dark:text-neutral-50">
        {project.title}
      </h5>
      <p className="mb-4 text-base text-neutral-600 text-white dark:text-neutral-200">
        {project.description}
      </p>
      <p>Technologies: {project.techstacks.join(', ')}</p>
      <p className="mb-4 text-base text-neutral-600 text-white dark:text-neutral-200">
        Website: <a href={project.website} target="_blank" rel="noopener noreferrer">{project.website}</a>
      </p>
      <button
        type="button"
        className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        data-te-ripple-init
      >
        Visit
      </button>
    </div>

  );
}

export default ProjectCard;
    // <div>
    //   <Image src="/public/img/projectImg.jpg" width={500} height={500} alt=''/>
    //   <h1>{project.title}</h1>
    //   <p>{project.description}</p>
    //   <p>Technologies: {project.techstacks.join(', ')}</p>
    //   <p>
    //     Website: <a href={project.website} target="_blank" rel="noopener noreferrer">{project.website}</a>
    //   </p>
    // </div>


  // <div className="">
  //       <Card className="w-full max-w-[20rem] sm:m-5 shadow-lg">
  //         <CardHeader floated={false} color="blue-gray">
  //           <img
  //             src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  //             alt="ui/ux review check"
  //           />
  //           <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
  //         </CardHeader>
  //         <CardBody>
  //           <div className="mb-2 flex items-center justify-between">
  //             <Typography variant="h5" color="blue-gray" className="font-medium">
  //               Wooden House, Florida
  //             </Typography>
  //           </div>
  //           <Typography color="gray">
  //             Enter a freshly updated and thoughtfully furnished peaceful home
  //             surrounded by ancient trees, stone walls, and open meadows.
  //           </Typography>
  //           <div className="group mt-8 inline-flex flex-wrap items-center gap-3"></div>
  //         </CardBody>
  //         <CardFooter className="pt-3">
  //           <Button className="bgbrown" size="lg" fullWidth={true}>
  //             View more
  //           </Button>
  //         </CardFooter>
  //       </Card>
  //     </div>