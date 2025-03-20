"use client";

import Image from "next/image";
import { useState } from "react";
import JobBadge from "./job-badge";
// import SingleJob from "./single-job-page";
import JobFeedRating from "./job-feed-rating";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Button, Drawer, Text, Title } from "rizzui";
import {
  PiMapPin,
  PiSealCheckFill,
  PiBookmarkSimpleFill,
  PiBookmarkSimpleThin,
} from "react-icons/pi";
import { jobFeedData, JobType } from "@/data/experienceData";

let countPerPage = 4;

export default function Experience({ className }: { className?: string }) {
  const [nextPage, setNextPage] = useState(countPerPage);

  return (
    <div className={className}>
      {jobFeedData.slice(0, nextPage).map((job, index) => {
        return <ExpFeedCard key={index} data={job} />;
      })}
    </div>
  );
}

function ExpFeedCard({ data }: { data: JobType }) {
  const [isBookMark, setIsBookMark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="mb-6 flex w-full cursor-pointer flex-col gap-y-4 rounded-[10px] border border-gray-700 p-4 @lg:gap-y-6 sm:p-[30px]"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative flex items-start justify-between gap-4">
          <div className="flex flex-col items-start gap-4 @xl:flex-row">
            <div className=" flex items-center gap-4">
              <Image
                src={data.logo}
                alt="job feed image"
                width={56}
                height={56}
                className="size-12 @6xl:size-14"
              />
              <Title as="h2" className="text-lg font-medium @xl:text-xl">
                {data.companyName}
              </Title>
            </div>

            <div className="space-y-1">
              <Title as="h3" className="text-base font-medium @xl:text-lg">
                {data.jobTitle}
              </Title>
              <Breadcrumb
                separator=""
                separatorVariant="circle"
                className="flex-wrap gap-y-1 [&>a]:text-xs  [&>a]:!text-gray-500 @7xl:[&>a]:text-sm"
              >
                {data.breadcrumb.map((item) => (
                  <Breadcrumb.Item key={item.name}>
                    {item.name} {item.value}
                  </Breadcrumb.Item>
                ))}
              </Breadcrumb>
            </div>
          </div>
        </div>

        <Text className="text-sm font-normal leading-normal @xl:leading-relaxed">
          {data.jobDescription[0].desc}
        </Text>

        <ul className="mt-2 space-y-2">
          {data.subData.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-x-2 text-sm font-medium"
            >
              <span className="w-2 h-2 bg-black rounded-full"></span>{" "}
              {/* Bullet Indicator */}
              {item}
            </li>
          ))}
        </ul>

        <JobBadge skills={data.skills} />

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 @lg:gap-x-8">
          <div className="flex gap-x-1.5">
            <PiSealCheckFill size={20} className="text-primary" />
            <Text className="text-sm font-medium">{data.reviewType}</Text>
          </div>
          <JobFeedRating rating={[data.rating]} />
          <div className="flex gap-x-1.5">
            <PiMapPin size={20} />
            <Text className="text-sm font-medium">{data.location}</Text>
          </div>
        </div>
      </div>

      {/* <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => setIsOpen(false)}
        containerClassName="max-w-full xl:max-w-[60%] dark:bg-gray-50"
      >
        <SingleJob data={data} onClose={() => setIsOpen(false)} />
      </Drawer> */}
    </>
  );
}
