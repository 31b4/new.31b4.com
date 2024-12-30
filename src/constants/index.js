import {
  projectmanagement,
  softdev,
  creator,
  competitive,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mariaradio,
  orthograph,
  univerx,
  lcbypass,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: softdev,
  },
  {
    title: "Project Manager",
    icon: projectmanagement,
  },
  {
    title: "Competitive Programmer",
    icon: competitive,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Ortho Graph",
    icon: orthograph,
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      "Building and maintaining backend systems using Laravel and MySQL.",
      "Developing interactive frontend features with React and Three.js.",
      "Managing containerized environments with Docker to streamline development and deployment.",
      "Focusing on backend tasks while also contributing to frontend development when needed.",
    ]
  },
  {
    title: "Production Technician",
    company_name: "Mária Rádió",
    icon: mariaradio,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Jan 2022",
    points: [
      "Organizing daily tracks to ensure smooth and consistent broadcasts.",
      "Recording and editing podcasts to deliver polished and engaging content.",
      "Handling technical issues promptly to keep everything running seamlessly.",
      "Coordinating with the team to produce high-quality audio content.",
    ]
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "UniverX",
    description:
      "Class and exam manager for university students with seamless integration with the Neptun API. (No longer supported)",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "app distribution",
        color: "pink-text-gradient",
      },
    ],
    image: univerx,
    source_code_link: "https://github.com/univerx/UniverX",
  },
  {
    name: "Leetcode+ Bypass",
    description:
      "An extension that integrates premium content into the website from an exported database, ensuring full functionality and providing a seamless premium experience.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "browser extension",
        color: "pink-text-gradient",
      },
    ],
    image: lcbypass,
    source_code_link: "https://github.com/31b4/Leetcode-Premium-Bypass",
  },
];

export { services, technologies, experiences, testimonials, projects };
