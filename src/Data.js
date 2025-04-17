import { FaHtml5 } from "react-icons/fa";
export const project = [
  {
    id: 1,
    name: "Devlinks",
    image: "/img/devlinks.webp",
    link: "https://devlinks-my.vercel.app/",
    details:
      "Devlinks is a web application that allows developers to store, organize and share thier links easily and at a second.",
    stack:
      "Devlinks is developed using Next JS, Tailwind CSS,Context API, Firebase, Github",
  },
  {
    id: 2,
    name: "Lasom center",
    image: "/img/lasom.png",
    link: "https://lasom.vercel.app/",
    details:
      "Lasom is an online store specialized in the sales of women jewelry. Features include browsing, shopping and checkout.",
    stack:
      "Lasom is developed using react js with vite, typescript, shadcn, tailwindcss, firebase, Redux, Stripe",
  },
  {
    id: 3,
    name: "Sushi Food App",
    image: "/img/Majestic Sushi.png",
    link: "https://majestic-sushi.netlify.app",
    details:
      "Sushi is a restaurant food app that allows user to order different kinds of sushi.",
    stack:
      "Sushi Restaurant is developed using react js with vite, javascript, SCSS",
  },

  {
    id: 5,
    name: "Fylo Landing Page",
    image: "/img/desktop.jpg",
    link: "https://fylo-don.vercel.app/",
    details:
      "Fylo landing page is simple landing page. It is a practice project from frontend Mentor . ",
    stack: "It is built with React JS, Typescript,Tailwind CSS ",
  },
];

export const skills = [
  { id: 1, image: "./img/html.png", iconSrc: <FaHtml5 />, name: " HTML" },
  { id: 2, image: "./img/css.png", name: "CSS" },
  { id: 3, image: "./img/javas.jfif", name: "JAVASCRIPT" },
  { id: 4, image: "./img/react_image.png", name: "REACT" },
  { id: 5, image: "./img/react_image.png", name: "React Native" },

  { id: 6, image: "./img/Next.png", name: "NEXT" },
  { id: 7, image: "./img/bootstrap_image.jpg", name: "BOOTSTRAP" },
  { id: 8, image: "./img/tailwind_image.png", name: "TAILWIND" },
  { id: 9, image: "./img/SASS.png", name: "SASS" },
  { id: 10, image: "./img/firebase.png", name: "Firebase" },
  { id: 11, image: "./img/supabase.jpeg", name: "Supabase" },

  { id: 12, image: "./img/expo.jpeg", name: "Expo" },
];

export const experience = [
  {
    id: 1,
    date: "March 2024 - September 2024",
    info: "Participated as the major frontend developer in the development of an ERP application built with React JS and tailwind CSS. This enhanced my skills in React JS and tailwind CSS.  Participated in the development of organisation landing page, code review. Contributed to the development of a gospel application for uploading, listening and downloading of gospel music",
    heading: "Entacrest Nexus",
  },
  {
    id: 2,
    date: "July 2024 - September 2024",
    info: "As one of the 523 finalists in the HNG Internship Program (out of 24,123 participants), I collaborated with a diverse team, including frontend developers, backend developers, UI/UX designers, data analysts, project managers, and QA testers. We worked on Tifi, an AI-powered platform, where I contributed to key frontend development tasks. This experience provided a real-world agile environment, enhancing my ability to deliver scalable and high-quality solutions while working with cross-functional teams under tight deadlines. It also enhanced my skills in Next JS, Shadcn, Tailwind CSS",
    heading: "Frontend Developer Intern @ HNG",
  },
  {
    id: 3,
    date: "January 2024 - February 2024",
    info: "Participated in a team of frontend developers to create highly responsive and dynamic webpages using React Js and SCSS.",
    heading: "CodeConure ",
  },
];

export const buttons = [
  { id: "home", text: "Home" },
  { id: "about", text: "About" },
  { id: "skill", text: "My Skills" },
  { id: "projects", text: "Projects" },
];
