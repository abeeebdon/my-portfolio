import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export const project = [
  {
    name: "Devlinks",
    image: "/img/devlinks.webp",
    link: "https://devlinks-my.vercel.app/",
    details:
      "Devlinks is a web application that allows developers to store, organize and share thier links easily and at a second.",
    github: "https://github.com/abeeebdon/Devlinks",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    name: "Lasom center",
    image: "/img/lasom.png",
    link: "https://lasom.vercel.app/",
    details:
      "Lasom is a jewelry e-commerce platform that offers timeless jewelry collections to elevate beauty",
    github: "https://github.com/abeeebdon/lasom",

    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    name: "Sushi Food App",
    image: "/img/Majestic Sushi.png",
    link: "https://majestic-sushi.netlify.app",
    details:
      "Sushi is an e commerse application for a  food restaurant that allows user to order different kinds of sushi.",
    github: "https://github.com/abeeebdon/majestic-sushi",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },

  {
    name: "Countries App",
    image: "/img/desktop.jpg",
    link: "https://count-app-sable.vercel.app/",
    details:
      "Fylo landing page is simple landing page. It is a practice project from frontend Mentor . ",
    github: "https://github.com/abeeebdon/count-app",

    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    name: "Fylo Landing Page",
    image: "/img/desktop.jpg",
    link: "https://fylo-don.vercel.app/",
    details:
      "Fylo landing page is simple landing page. It is a practice project from frontend Mentor . ",
    github: "https://github.com/abeeebdon/fyloLanding",

    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
];
export const socials = [
  {
    href: "https://www.facebook.com/abeeb.maroof",
    icon: <FaFacebook />,
  },
  {
    href: "https://www.twitter.com/AbeebMaroof",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.linkedin.com/in/abeebmaroof/",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/abeeebdon",
    icon: <FaGithub />,
  },
];
export const skills = [
  { id: 1, image: "./img/html.png", name: " HTML" },
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
    date: "March 2024 - September 2024",
    info: "Participated as the major frontend developer in the development of an ERP application built with React JS and tailwind CSS. This enhanced my skills in React JS and tailwind CSS.  Participated in the development of organisation landing page, code review. Contributed to the development of a gospel application for uploading, listening and downloading of gospel music",
    heading: "Entacrest Nexus",
    role: "Frontend Developer Intern",
  },
  {
    date: "July 2024 - September 2024",
    info: "As one of the 523 finalists in the HNG Internship Program (out of 24,123 participants), I collaborated with a diverse team, including frontend developers, backend developers, UI/UX designers, data analysts, project managers, and QA testers. We worked on Tifi, an AI-powered platform, where I contributed to key frontend development tasks. This experience provided a real-world agile environment, enhancing my ability to deliver scalable and high-quality solutions while working with cross-functional teams under tight deadlines. It also enhanced my skills in Next JS, Shadcn, Tailwind CSS",
    heading: "Frontend Developer Intern @ HNG",
    role: "Frontend Developer Intern",
  },
  {
    date: "January 2024 - February 2024",
    info: "Participated in a team of frontend developers to create highly responsive and dynamic webpages using React Js and SCSS.",
    heading: "CodeConure ",
    role: "Frontend Developer Intern",
  },
];

export const buttons = [
  { id: "home", text: "Home" },
  { id: "about", text: "About" },
  { id: "skill", text: "My Skills" },
  { id: "projects", text: "Projects" },
];

const projectsData = [
  {
    title: "E-Commerce Platform",
    summary:
      "A full-featured e-commerce site with a modern UI, product filtering, and a seamless checkout process.",
    image: "https://placehold.co/600x400/34d399/ffffff?text=E-Commerce",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    motivation:
      "The goal was to build a highly performant, scalable, and user-friendly online store from scratch to understand the core complexities of e-commerce, from state management to payment integration.",
    process:
      "I started with designing the UI/UX in Figma, then developed the frontend with React for a dynamic user interface. The backend API was built with Node.js and Express, connected to a MongoDB database for product and user data. State management was handled with React Context API for the shopping cart.",
    outcome:
      "The result is a fully functional e-commerce platform that supports user authentication, product Browse and searching, cart management, and a mock checkout process. This project deepened my understanding of full-stack development and complex state management.",
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Task Management App",
    summary:
      "A responsive and interactive task management application with drag-and-drop functionality.",
    image: "https://placehold.co/600x400/60a5fa/ffffff?text=Task+Manager",
    tags: ["TypeScript", "React", "Firebase"],
    motivation:
      "I wanted to create a productivity tool that was both powerful and delightful to use. The primary challenge was to implement intuitive drag-and-drop functionality for task reordering and status updates.",
    process:
      "The application was built with React and TypeScript to ensure type safety and code quality. Firebase was used for real-time database and user authentication, allowing for seamless data synchronization across clients. The drag-and-drop feature was implemented using the `react-beautiful-dnd` library.",
    outcome:
      "A clean, fast, and collaborative task management app where users can create projects, add tasks, and manage their workflow visually. The project was a great exercise in real-time data handling and third-party library integration.",
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Portfolio Website",
    summary:
      "My personal portfolio to showcase my skills and projects (the one you are currently viewing).",
    image: "https://placehold.co/600x400/f59e0b/ffffff?text=Portfolio",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    motivation:
      "The objective was to create a fast, accessible, and visually appealing single-page application to serve as my digital resume. It needed to effectively tell my professional story and demonstrate my frontend skills.",
    process:
      "Built from the ground up with vanilla JavaScript for performance and simplicity. Tailwind CSS was used for rapid, utility-first styling and to ensure a fully responsive design. I focused on clean code, subtle animations, and implementing a seamless light/dark mode experience.",
    outcome:
      "A lightweight, and easy-to-navigate portfolio that effectively showcases my work. It demonstrates my proficiency in core web technologies and my eye for design and user experience.",
    liveLink: "#",
    repoLink: "#",
  },
];
const experienceData = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description:
      "Led the development of a new customer-facing analytics dashboard using React and TypeScript. Mentored junior developers and improved code quality by implementing a new linting and testing pipeline.",
  },
  {
    role: "Frontend Developer",
    company: "Innovate Co.",
    period: "2019 - 2021",
    description:
      "Developed and maintained components for a large-scale design system. Collaborated with designers and backend engineers to build new features for the main web application, improving user engagement by 15%.",
  },
  {
    role: "Junior Web Developer",
    company: "Web Crafters LLC",
    period: "2017 - 2019",
    description:
      "Built and styled responsive marketing websites for various clients using HTML, CSS, and JavaScript. Gained foundational experience in version control with Git and collaborating in an agile environment.",
  },
];
