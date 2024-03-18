import { Button } from "@mui/material";
import { AiOutlineDownload } from "react-icons/ai";

const TempResume = () => {
  return (
    <div id="resume" className="py-8">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-purple-300 text-5xl font-bold p-4">Resume</h1>
          <p className=" mb-4">
            Explore my professional journey and skills by downloading my resume.
          </p>
        </div>

        <div className="flex justify-center items-center mt-4">
          <a href="/EmranKamilResume.pdf" download="EmranKamilResume.pdf">
            <Button className="max-w-md bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-500 hover:to-indigo-600" variant="contained" endIcon={<AiOutlineDownload />}>
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TempResume;
