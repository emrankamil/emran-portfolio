import { IconType } from "react-icons";
import {
  PiMapPinLight,
  PiClockLight,
  PiCurrencyCircleDollarLight,
  PiCalendarBlankLight,
  PiShoppingBagLight,
  PiBuildingsLight,
} from "react-icons/pi";

export const jobFeedBannerLogo =
  "https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/public/food/job-feed-banner.webp";

export const jobFeedLogo =
  "https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/public/job-feed-logo.webp";

export type JobDescription = {
  descTitle: string;
  desc: string;
};

export type JobInfoProps = {
  title: string;
  value: string[];
  badge?: boolean;
  icon: IconType;
};

export type JobType = {
  type: string;
  companyName: string;
  logo: string;
  jobTitle: string;
  price: string;
  time: string;
  jobDescription: JobDescription[];
  subData: string[];
  reviewType: string;
  skills: string[];
  rating: number;
  location: string;
  support: {
    email: string;
    desc: string;
  };
  breadcrumb: {
    name: string;
    value?: string;
  }[];
  info: JobInfoProps[];
};

export const jobFeedData = [
  {
    type: "company",
    companyName: "WAVIC",
    logo: "/experience/wavic_image.png",
    jobTitle: "Full-stack Developer",
    price: "$50-$60",
    time: "6 Month",
    breadcrumb: [
      {
        name: "Remote (Barcelona-Spain)",
      },
      {
        name: "Est Time:",
        value: "1-3 Month",
      },
    ],
    jobDescription: [
      {
        descTitle: "Who were looking for",
        desc: "Wavic is a secure hub space for a band, producer, engineer, manager, and A&R to keep collaborations in motion and in perfect harmony. Wavic empowers professionals with seamless project management, real-time collaboration, and role-based access control.",
      },
      {
        descTitle: "Dashboard Earth Benefits",
        desc: "We are a small climate tech startup on a big mission to drive citizen engagement in climate change adaptation. If your excited by the challenge of how to turn recycling and using less plastic into a fun mobile app experience, read on. Were looking for a Lead Product Designer to join us at a really important juncture, as we build the first-ever marketplace for climate outcomes. What powers the marketplace is an engaging consumer app that connects residents to local climate actions. This is an exciting and unique opportunity to design an innovative app that drives peoples real-world actions and reduces their climate anxiety, at a tipping point in public awareness and engagement in climate action",
      },
      {
        descTitle: "Dashboard Earth Benefits",
        desc: "We are a small climate tech startup on a big mission to drive citizen engagement in climate change adaptation. If your excited by the challenge of how to turn recycling and using less plastic into a fun mobile app experience, read on. Were looking for a Lead Product Designer to join us at a really important juncture, as we build the first-ever marketplace for climate outcomes. What powers the marketplace is an engaging consumer app that connects residents to local climate actions. This is an exciting and unique opportunity to design an innovative app that drives peoples real-world actions and reduces their climate anxiety, at a tipping point in public awareness and engagement in climate action",
      },
    ],
    subData: [
      "- Built and optimized backend services with Nest.js, ensuring scalability and efficiency.",
      "- I utilize Docker to ensure consistent environments.",
      "- I participate in code reviews, offering feedback to maintain high code standards.",
      "- Integrated Stripe for seamless and secure subscription payments.",
    ],
    reviewType: "Upwork review",

    skills: [
      "Nest js",
      "Next js",
      "MongoDb",
      "Stripe",
      "AWS",
      "Typescript",
      "Taiwlwindcss",
    ],
    rating: 5,
    location: "Barcelona, Spain",
    support: {
      email: "ops@dashboard.earth.",
      desc: "Dashboard.earth is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We take a holistic approach to hiring and review every application, even if you do not meet all the qualifications. If you are good at what you do and our mission speaks to you, please apply!",
    },
    info: [
      {
        title: "Location",
        value: ["New York, USA"],
        icon: PiMapPinLight,
      },
      {
        title: "Commitment",
        value: ["Full Time", "Remote"],
        badge: true,
        icon: PiClockLight,
      },
      {
        title: "Product Type",
        value: ["Management System"],
        icon: PiShoppingBagLight,
      },
      {
        title: "Salary Range",
        value: ["$60K - $80K"],
        icon: PiCurrencyCircleDollarLight,
      },
      {
        title: "Start Date",
        value: ["Dec 15, 2023"],
        icon: PiCalendarBlankLight,
      },
      {
        title: "Industry",
        value: ["IT Department"],
        icon: PiBuildingsLight,
      },
    ],
  },
  {
    type: "contract",
    companyName: "Afrochat",
    logo: "/experience/afrochat_image.png",
    jobTitle: "Backend Engineer",
    price: "$50 - $60",
    time: "3 Month",
    breadcrumb: [
      {
        name: "On-site (Addis Ababa, Ethiopia)",
      },
      {
        name: "Est Time:",
        value: "3 Month",
      },
    ],
    jobDescription: [
      {
        descTitle: "Who were looking for",
        desc: "Afrochat combines Generative AI with web search, to delivering faster, more tailored results for users queries from the web. Afrochats' concise summary for search will give the best answer from checking different sources. ",
      },
      {
        descTitle: "Dashboard Earth Benefits",
        desc: "We are a small climate tech startup on a big mission to drive citizen engagement in climate change adaptation. If your excited by the challenge of how to turn recycling and using less plastic into a fun mobile app experience, read on. Were looking for a Lead Product Designer to join us at a really important juncture, as we build the first-ever marketplace for climate outcomes. What powers the marketplace is an engaging consumer app that connects residents to local climate actions. This is an exciting and unique opportunity to design an innovative app that drives peoples real-world actions and reduces their climate anxiety, at a tipping point in public awareness and engagement in climate action",
      },
      {
        descTitle: "Dashboard Earth Benefits",
        desc: "We are a small climate tech startup on a big mission to drive citizen engagement in climate change adaptation. If your excited by the challenge of how to turn recycling and using less plastic into a fun mobile app experience, read on. Were looking for a Lead Product Designer to join us at a really important juncture, as we build the first-ever marketplace for climate outcomes. What powers the marketplace is an engaging consumer app that connects residents to local climate actions. This is an exciting and unique opportunity to design an innovative app that drives peoples real-world actions and reduces their climate anxiety, at a tipping point in public awareness and engagement in climate action",
      },
    ],
    subData: [
      "- Built and optimized backend services with Python",
      "- working as a prompt engineer,i integrated opensource ai models to the backend",
      "- I utilize kafka for real time data processing",
    ],
    skills: [
      "AI prompt engineering",
      "Python",
      "Django",
      "Django Rest Framework",
      "Kafka",
      "Docker",
    ],
    reviewType: "Manager review",
    rating: 5,
    location: "New York, USA",
    support: {
      email: "ops@dashboard.earth.",
      desc: "Dashboard.earth is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We take a holistic approach to hiring and review every application, even if you do not meet all the qualifications. If you are good at what you do and our mission speaks to you, please apply!",
    },
    info: [
      {
        title: "Location",
        value: ["Addis Ababa, Ethiopia"],
        icon: PiMapPinLight,
      },
      {
        title: "Commitment",
        value: ["Full Time", "Remote"],
        badge: true,
        icon: PiClockLight,
      },
      {
        title: "Product Type",
        value: ["Management System"],
        icon: PiShoppingBagLight,
      },
      {
        title: "Salary Range",
        value: ["$60K - $80K"],
        icon: PiCurrencyCircleDollarLight,
      },
      {
        title: "Start Date",
        value: ["Dec 15, 2023"],
        icon: PiCalendarBlankLight,
      },
      {
        title: "Industry",
        value: ["IT Department"],
        icon: PiBuildingsLight,
      },
    ],
  },
  {
    type: "company",
    companyName: "A2SV",
    logo: "/experience/a2sv_image.png",
    jobTitle: "Backend Engineer",
    price: "$50 - $60",
    time: "1-3 Month",
    breadcrumb: [
      {
        name: "On-site( Addis Ababa, Ethiopia)",
      },
      {
        name: "Est Time:",
        value: "3 Month",
      },
    ],
    jobDescription: [
      {
        descTitle: "Who were looking for",
        desc: "A2SV | Africa to Silicon Valley, backed by Google, trains top-tier software engineering talent, equipping them with world-class skills and connecting them to global opportunities at leading tech companies like Google, Palantir, Databricks, Bloomberg, and Meta.",
      },
      {
        descTitle: "Dashboard Earth Benefits",
        desc: "We are a small climate tech startup on a big mission to drive citizen engagement in climate change adaptation. If your excited by the challenge of how to turn recycling and using less plastic into a fun mobile app experience, read on. Were looking for a Lead Product Designer to join us at a really important juncture, as we build the first-ever marketplace for climate outcomes. What powers the marketplace is an engaging consumer app that connects residents to local climate actions. This is an exciting and unique opportunity to design an innovative app that drives peoples real-world actions and reduces their climate anxiety, at a tipping point in public awareness and engagement in climate action",
      },
      {
        descTitle: "Dashboard Earth Benefits",
        desc: "We are a small climate tech startup on a big mission to drive citizen engagement in climate change adaptation. If your excited by the challenge of how to turn recycling and using less plastic into a fun mobile app experience, read on. Were looking for a Lead Product Designer to join us at a really important juncture, as we build the first-ever marketplace for climate outcomes. What powers the marketplace is an engaging consumer app that connects residents to local climate actions. This is an exciting and unique opportunity to design an innovative app that drives peoples real-world actions and reduces their climate anxiety, at a tipping point in public awareness and engagement in climate action",
      },
    ],
    subData: [
      "- Designed and developed a back-end service using Golang and MongoDB. ",
      "- Performed unit testing and implemented CI/CD pipelines using GitHub Actions and containerization with Docker. ",
      "- Optimized MongoDB search strategies, improving user experience and search accuracy by around 40%. ",
      "- Automated backup, logging, and maintenance for multiple projects. ",
      "- Collaborated with developers to create and maintain technical documentation.-",
    ],
    skills: [
      "GoLang",
      "MongoDB",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Unit Testing",
    ],
    reviewType: "Team review",
    rating: 5,
    location: "Addis Ababa, Ethiopia",
    support: {
      email: "ops@dashboard.earth.",
      desc: "Dashboard.earth is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We take a holistic approach to hiring and review every application, even if you do not meet all the qualifications. If you are good at what you do and our mission speaks to you, please apply!",
    },
    info: [
      {
        title: "Location",
        value: ["New York, USA"],
        icon: PiMapPinLight,
      },
      {
        title: "Commitment",
        value: ["Full Time", "Remote"],
        badge: true,
        icon: PiClockLight,
      },
      {
        title: "Product Type",
        value: ["Management System"],
        icon: PiShoppingBagLight,
      },
      {
        title: "Salary Range",
        value: ["$60K - $80K"],
        icon: PiCurrencyCircleDollarLight,
      },
      {
        title: "Start Date",
        value: ["Dec 15, 2023"],
        icon: PiCalendarBlankLight,
      },
      {
        title: "Industry",
        value: ["IT Department"],
        icon: PiBuildingsLight,
      },
    ],
  },
  {
    type: "company",
    companyName: "4K-labs",
    logo: "/experience/4klabs_image.png",
    jobTitle: "Lead Software Engineer",
    price: "$50 - $60",
    time: "1-3 Month",
    breadcrumb: [
      {
        name: "On-site (Addis Ababa, Ethiopia)",
      },
      {
        name: "Est Time:",
        value: "2 years",
      },
    ],
    jobDescription: [
      {
        descTitle: "Who were looking for",
        desc: "4K Labs is a Research and development laboratory at Addis Ababa University (AAU) located in the College of Natural and Computational Science(CNCS), under the Computer Science department.",
      },
      {
        descTitle: "Dashboard Earth Benefits",
        desc: "We are a small climate tech startup on a big mission to drive citizen engagement in climate change adaptation. If youre excited by the challenge of how to turn recycling and using less plastic into a fun mobile app experience, read on. Were looking for a Lead Product Designer to join us at a really important juncture, as we build the first-ever marketplace for climate outcomes. What powers the marketplace is an engaging consumer app that connects residents to local climate actions. This is an exciting and unique opportunity to design an innovative app that drives peoples real-world actions and reduces their climate anxiety, at a tipping point in public awareness and engagement in climate action",
      },
      {
        descTitle: "Dashboard Earth Benefits",
        desc: "We are a small climate tech startup on a big mission to drive citizen engagement in climate change adaptation. If youre excited by the challenge of how to turn recycling and using less plastic into a fun mobile app experience, read on. Were looking for a Lead Product Designer to join us at a really important juncture, as we build the first-ever marketplace for climate outcomes. What powers the marketplace is an engaging consumer app that connects residents to local climate actions. This is an exciting and unique opportunity to design an innovative app that drives peoples real-world actions and reduces their climate anxiety, at a tipping point in public awareness and engagement in climate action",
      },
    ],
    subData: [
      "- Played an active leadership role as a team lead, guiding and supporting new developers and interns through hands-on mentorship, project management, and code reviews.",
      "- Contributed to system design, applying clean code architecture across projects and optimizing code using algorithms and data structures.",
      "- Led the development and maintenance of core back-end systems, focusing on scalability, reliability, and performance, ensuring efficient operations.",
      "- Improved development practices, introducing automated testing and debugging, leading to a 40% reduction in bugs and a 30% boost in code quality.",
    ],
    skills: [
      "Leading Development Teams",
      "Systems Design",
      "Next.js",
      "Node.js",
      "MongoDB",
    ],
    reviewType: "Manager review",
    rating: 5,
    location: "Addis Ababa, Ethiopia",
    support: {
      email: "ops@dashboard.earth.",
      desc: "Dashboard.earth is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We take a holistic approach to hiring and review every application, even if you do not meet all the qualifications. If you are good at what you do and our mission speaks to you, please apply!",
    },
    info: [
      {
        title: "Location",
        value: ["New York, USA"],
        icon: PiMapPinLight,
      },
      {
        title: "Commitment",
        value: ["Full Time", "Remote"],
        badge: true,
        icon: PiClockLight,
      },
      {
        title: "Product Type",
        value: ["Management System"],
        icon: PiShoppingBagLight,
      },
      {
        title: "Salary Range",
        value: ["$60K - $80K"],
        icon: PiCurrencyCircleDollarLight,
      },
      {
        title: "Start Date",
        value: ["Dec 15, 2023"],
        icon: PiCalendarBlankLight,
      },
      {
        title: "Industry",
        value: ["IT Department"],
        icon: PiBuildingsLight,
      },
    ],
  },
  {
    type: "company",
    companyName: "GreenTech LLC",
    logo: "https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/public/food/job-feed-1.webp",
    jobTitle: "Senior UI/UX Designer",
    price: "$50-$60",
    time: "1-3 Month",
    breadcrumb: [
      {
        name: "Hourly:",
        value: "$50-$60",
      },
      {
        name: "Remote Friendly",
      },
      {
        name: "Est Time:",
        value: "1-3 Month",
      },
    ],
    jobDescription: [
      {
        descTitle: "Who were looking for",
        desc: "Looking for an experienced UI/UX designer for an on going project? Your will work with an existing SCRUM team for this project. The SCRUM team is comprised of consultants in EU and Asia, working on a bespoke software development..",
      },
      {
        descTitle: "Dashboard Earth Benefits",
        desc: "We are a small climate tech startup on a big mission to drive citizen engagement in climate change adaptation. If your excited by the challenge of how to turn recycling and using less plastic into a fun mobile app experience, read on. Were looking for a Lead Product Designer to join us at a really important juncture, as we build the first-ever marketplace for climate outcomes. What powers the marketplace is an engaging consumer app that connects residents to local climate actions. This is an exciting and unique opportunity to design an innovative app that drives peoples real-world actions and reduces their climate anxiety, at a tipping point in public awareness and engagement in climate action",
      },
      {
        descTitle: "Dashboard Earth Benefits",
        desc: "We are a small climate tech startup on a big mission to drive citizen engagement in climate change adaptation. If your excited by the challenge of how to turn recycling and using less plastic into a fun mobile app experience, read on. Were looking for a Lead Product Designer to join us at a really important juncture, as we build the first-ever marketplace for climate outcomes. What powers the marketplace is an engaging consumer app that connects residents to local climate actions. This is an exciting and unique opportunity to design an innovative app that drives peoples real-world actions and reduces their climate anxiety, at a tipping point in public awareness and engagement in climate action",
      },
    ],
    subData: [
      "Built and optimized backend services with Nest.js, ensuring scalability and efficiency.",
      "I utilize Docker to ensure consistent environments.",
      "I participate in code reviews, offering feedback to maintain high code standards.",
      "Integrated Stripe for seamless and secure subscription payments.",
    ],
    skills: [
      "User Interface Design",
      "Figma",
      "Wire Framing",
      "User Experience",
      "Style Guide",
      "Wire Framing",
      "User Experience",
      "Style Guide",
    ],
    reviewType: "Upwork review",
    rating: 5,
    location: "Canada, USA",
    support: {
      email: "ops@dashboard.earth.",
      desc: "Dashboard.earth is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We take a holistic approach to hiring and review every application, even if you do not meet all the qualifications. If you are good at what you do and our mission speaks to you, please apply!",
    },
    info: [
      {
        title: "Location",
        value: ["New York, USA"],
        icon: PiMapPinLight,
      },
      {
        title: "Commitment",
        value: ["Full Time", "Remote"],
        badge: true,
        icon: PiClockLight,
      },
      {
        title: "Product Type",
        value: ["Management System"],
        icon: PiShoppingBagLight,
      },
      {
        title: "Salary Range",
        value: ["$60K - $80K"],
        icon: PiCurrencyCircleDollarLight,
      },
      {
        title: "Start Date",
        value: ["Dec 15, 2023"],
        icon: PiCalendarBlankLight,
      },
      {
        title: "Industry",
        value: ["IT Department"],
        icon: PiBuildingsLight,
      },
    ],
  },
  {
    type: "contract",
    companyName: "GreenTech LLC",
    logo: "https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/public/food/job-feed-2.webp",
    jobTitle: "Senior Software Engineer",
    price: "$50 - $60",
    time: "1-3 Month",
    breadcrumb: [
      {
        name: "Hourly:",
        value: "$25 - $35",
      },
      {
        name: "Remote Friendly",
      },
      {
        name: "Est Time:",
        value: "1-3 Month",
      },
    ],
    jobDescription: [
      {
        descTitle: "Who were looking for",
        desc: "Looking for an experienced UI/UX designer for an on going project? Your will work with an existing SCRUM team for this project. The SCRUM team is comprised of consultants in EU and Asia, working on a bespoke software development..",
      },
      {
        descTitle: "Dashboard Earth Benefits",
        desc: "We are a small climate tech startup on a big mission to drive citizen engagement in climate change adaptation. If your excited by the challenge of how to turn recycling and using less plastic into a fun mobile app experience, read on. Were looking for a Lead Product Designer to join us at a really important juncture, as we build the first-ever marketplace for climate outcomes. What powers the marketplace is an engaging consumer app that connects residents to local climate actions. This is an exciting and unique opportunity to design an innovative app that drives peoples real-world actions and reduces their climate anxiety, at a tipping point in public awareness and engagement in climate action",
      },
      {
        descTitle: "Dashboard Earth Benefits",
        desc: "We are a small climate tech startup on a big mission to drive citizen engagement in climate change adaptation. If your excited by the challenge of how to turn recycling and using less plastic into a fun mobile app experience, read on. Were looking for a Lead Product Designer to join us at a really important juncture, as we build the first-ever marketplace for climate outcomes. What powers the marketplace is an engaging consumer app that connects residents to local climate actions. This is an exciting and unique opportunity to design an innovative app that drives peoples real-world actions and reduces their climate anxiety, at a tipping point in public awareness and engagement in climate action",
      },
    ],
    subData: [
      "Built and optimized backend services with Nest.js, ensuring scalability and efficiency.",
      "I utilize Docker to ensure consistent environments.",
      "I participate in code reviews, offering feedback to maintain high code standards.",
      "Integrated Stripe for seamless and secure subscription payments.",
    ],
    skills: [
      "User Interface Design",
      "Figma",
      "Wire Framing",
      "User Experience",
      "Style Guide",
      "Wire Framing",
      "User Experience",
      "Style Guide",
    ],
    reviewType: "Upwork review",
    rating: 5,
    location: "USA",
    support: {
      email: "ops@dashboard.earth.",
      desc: "Dashboard.earth is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We take a holistic approach to hiring and review every application, even if you do not meet all the qualifications. If you are good at what you do and our mission speaks to you, please apply!",
    },
    info: [
      {
        title: "Location",
        value: ["New York, USA"],
        icon: PiMapPinLight,
      },
      {
        title: "Commitment",
        value: ["Full Time", "Remote"],
        badge: true,
        icon: PiClockLight,
      },
      {
        title: "Product Type",
        value: ["Management System"],
        icon: PiShoppingBagLight,
      },
      {
        title: "Salary Range",
        value: ["$60K - $80K"],
        icon: PiCurrencyCircleDollarLight,
      },
      {
        title: "Start Date",
        value: ["Dec 15, 2023"],
        icon: PiCalendarBlankLight,
      },
      {
        title: "Industry",
        value: ["IT Department"],
        icon: PiBuildingsLight,
      },
    ],
  },
];

export type jobFilterTypeProps = {
  type: string;
  available: number;
};

export const jobFeedJobTypes = [
  {
    id: "1",
    name: "Current Position",
    count: 103,
  },
  {
    id: "2",
    name: "Full Time",
    count: 38,
  },
  {
    id: "3",
    name: "Internship",
    count: 50,
  },
  {
    id: "4",
    name: "Paid Fellowship",
    count: 68,
  },
  {
    id: "5",
    name: "Part Time",
    count: 50,
  },
  {
    id: "6",
    name: "Volunteer",
    count: 83,
  },
];

export const jobFeedJobPositions = [
  {
    id: "1",
    name: "On-site",
    count: 103,
  },
  {
    id: "2",
    name: "Remote",
    count: 38,
  },
  {
    id: "3",
    name: "Hybrid",
    count: 50,
  },
];

export const jobFeedJobSpecialties = [
  {
    id: "1",
    name: "Graphic Designer",
    count: 103,
  },
  {
    id: "2",
    name: "UI Engineer",
    count: 38,
  },
  {
    id: "3",
    name: "UX Engineer",
    count: 50,
  },
  {
    id: "4",
    name: "Web Designer",
    count: 68,
  },
  {
    id: "5",
    name: "Full Stack Developer",
    count: 50,
  },
  {
    id: "6",
    name: "Front-end Developer",
    count: 83,
  },
];

export const socialInfos = [
  {
    title: "Share",
    icon: "FacebookIcon",
    href: "https://facebook.com",
  },
  {
    title: "Tweet",
    icon: "XTwitter",
    href: "https://.x.com",
  },
];

export type InitialStateType = {
  filter: string;
  recommended: [];
  startDate: string;
};

export const initialState: InitialStateType = {
  filter: "",
  recommended: [],
  startDate: "",
};
