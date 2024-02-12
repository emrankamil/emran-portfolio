"use client"

import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="py-8">
      <div className="flex flex-col">
        <div className="text-center ">
          <h1 className="text-purple-300 text-5xl font-bold p-4">Resume</h1>
          <p>Here You can find my Resume</p>
        </div>

        <div className="resume">
          <Document file="/EmranKamilResume.pdf" className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>

        <div style={{ justifyContent: "center", position: "relative" }}>
          <a href="/EmranKamilResume.pdf" download="EmranKamilResume.pdf">
            <Button variant="gradient" style={{ maxWidth: "250px" }} placeholder={undefined}>
              <AiOutlineDownload />
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;