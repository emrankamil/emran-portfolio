//import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";

export interface SocialLink {
  url: string;
  //icon: IconDefinition;
  iconClass: string;
}

export interface CardData {
  category: string;
  title: string;
  content: string;
  imageUrl: StaticImageData;
}

export interface ProjectData {
  id: number;
  title:string;
  background:any;
  description: string;
  techstacks: any;
  github: string;
}

export interface testimonyData {
  id:number;
  name:string;
  image:string;
  content:string;
  title:string;
}