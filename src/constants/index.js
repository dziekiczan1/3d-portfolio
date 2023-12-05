import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Syndicate Crime",
    description:
      "Syndicate Crime is an immersive and thrilling mafia-themed game that puts you in the shoes of a mobster trying to climb the ranks of organized crime. Step into the dark underbelly of a sprawling city teeming with corruption, intrigue, and danger.",
    link: "https://github.com/dziekiczan1/syndicateCrime",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Peter's Portfolio",
    description:
      "I am a self-taught person and I derive my knowledge from people more experienced in the industry. I currently live in Warsaw, and I focus all my free time on developing my skills and learning about new technologies that will make my projects even better.",
    link: "https://github.com/dziekiczan1/portfolio",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "eRZet",
    description:
      "eRZet is a company that designs and creates websites for various industries. From the beginning of our activity, we have focused on providing the highest quality services, tailored to the individual needs of our clients. Our team consists of experienced specialists who have extensive knowledge in the field of website development. Thanks to their commitment and professionalism, we are able to provide our clients with the best solutions.",
    link: "https://github.com/dziekiczan1/eRZet",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "TikTik",
    description:
      "TikTik is your ultimate destination for a diverse and engaging experience in the world of short-form video content. Our platform mirrors the popular TikTok, offering a vibrant space for creativity, entertainment, and connection. From hilarious skits to heartfelt moments, TikTik caters to a wide array of interests and passions.",
    link: "https://github.com/dziekiczan1/tiktik",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "NBApp",
    description:
      "In this application I focused on fetching the data from an API and handling the state with the help of Redux Toolkit. The user can check the details of his favorite team as well as the latest news from around the world. The current standings, last game results and the list of players are also available. For contact form I decided to use Herotofu.",
    link: "https://github.com/dziekiczan1/nbapp",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Where To? Dive!",
    description:
      "Welcome to Where To? DIVE - a place where you can share and find the best diving spots from all over the world. Our website will help you find the best places in your area and more. Are you interested in wrecks, caves, or maybe beautiful coral reefs? You can find everything with us! Regardless of the level of your training. The website was created to share the best diving sites with people from all over the world.",
    link: "https://github.com/dziekiczan1/dive",
  },
];
