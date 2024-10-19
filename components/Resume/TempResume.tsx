"use client";

import { Button } from "@mui/material";
import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";

const TempResume = () => {
  const [showResume, setShowResume] = useState(false);

  const handleClick = () => {
    setShowResume(!showResume);
  };

  return (
    <div id="resume" className="py-8">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-purple-300 text-5xl font-bold p-4">Resume</h1>
          <p className="mb-4">
            Explore my professional journey and skills by downloading my resume.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center mx-auto w-contain mt-4">
          <div className="flex justify-center items-center p-4">
            <a href="/EmranKamilResume.pdf" download="EmranKamilResume.pdf">
              <Button
                className="max-w-md bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-500 hover:to-indigo-600"
                variant="contained"
                endIcon={<AiOutlineDownload />}
              >
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex justify-center items-center p-4">
            <Button
              className="max-w-md bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-500 hover:to-indigo-600"
              variant="contained"
              endIcon={showResume ? <GrFormViewHide /> : <BiShow />}
              onClick={handleClick}
            >
              {showResume ? "Hide Resume" : "Show Resume"}
            </Button>
          </div>
        </div>
        {/* Resume */}
        {showResume && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "141.4286%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src="https://www.canva.com/design/DAGQ45HhOaw/yqbW_EfOE5K82rj-Uu_Imw/view?embed"
              allowFullScreen
              allow="fullscreen"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default TempResume;
