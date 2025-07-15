const App2 = () => {
  return <div>App2</div>;
};

export default App2;

// <style>
//     :root {
//         --bg-light: #f8f7f4;
//         --text-light: #1f2937;
//         --accent-light: #f59e0b;
//         --accent-light-hover: #fbbf24;
//         --card-light: #ffffff;
//         --border-light: #e5e7eb;

//         --bg-dark: #111827;
//         --text-dark: #d1d5db;
//         --accent-dark: #fcd34d;
//         --accent-dark-hover: #fde047;
//         --card-dark: #1f2937;
//         --border-dark: #374151;
//     }
//     body {
//         background-color: var(--bg-light);
//         color: var(--text-light);
//         font-family: 'Inter', sans-serif;
//     }
//     .dark body {
//         background-color: var(--bg-dark);
//         color: var(--text-dark);
//     }
//     @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');

//     .timeline-item::before {
//         content: '';
//         position: absolute;
//         left: -30px;
//         top: 5px;
//         width: 20px;
//         height: 20px;
//         border-radius: 50%;
//         background-color: var(--accent-light);
//         border: 4px solid var(--bg-light);
//     }
//     .dark .timeline-item::before {
//         background-color: var(--accent-dark);
//         border-color: var(--bg-dark);
//     }
//     .timeline-path {
//         position: absolute;
//         left: -21px;
//         top: 5px;
//         width: 2px;
//         height: 100%;
//         background-color: var(--border-light);
//     }
//     .dark .timeline-path {
//         background-color: var(--border-dark);
//     }
// </style>

// <!-- Header & Navigation -->
// <header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
//     <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
//         <a href="#" class="text-xl font-bold transition-colors hover:text-yellow-500 dark:hover:text-yellow-300">Alex Doe</a>
//         <div class="flex items-center space-x-4 md:space-x-8">
//             <ul class="hidden md:flex items-center space-x-8">
//                 <li><a href="#about" class="transition-colors hover:text-yellow-500 dark:hover:text-yellow-300">About</a></li>
//                 <li><a href="#skills" class="transition-colors hover:text-yellow-500 dark:hover:text-yellow-300">Skills</a></li>
//                 <li><a href="#projects" class="transition-colors hover:text-yellow-500 dark:hover:text-yellow-300">Projects</a></li>
//                 <li><a href="#experience" class="transition-colors hover:text-yellow-500 dark:hover:text-yellow-300">Experience</a></li>
//             </ul>
//             <button id="theme-toggle" class="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
//                 <span id="theme-icon-light" class="hidden">☀️</span>
//                 <span id="theme-icon-dark" class="hidden">🌙</span>
//             </button>
//         </div>
//     </nav>
// </header>

// <main class="container mx-auto px-6">

//     <!-- Hero Section -->
//     <section id="hero" class="min-h-screen flex items-center">
//         <div class="w-full text-center md:text-left">
//             <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//                 <div class="md:col-span-2">
//                     <h1 class="text-5xl md:text-7xl font-extrabold mb-4">Frontend Developer</h1>
//                     <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0 text-gray-600 dark:text-gray-400">I build beautiful, responsive, and user-centric web applications that solve real-world problems.</p>
//                     <div class="flex justify-center md:justify-start space-x-4">
//                         <a href="#projects" class="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300">View My Work</a>
//                         <a href="#contact" class="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">Contact Me</a>
//                     </div>
//                 </div>
//                 <div class="flex justify-center">
//                     <img src="https://placehold.co/300x300/fcd34d/111827?text=AD" alt="Alex Doe" class="rounded-full w-48 h-48 md:w-72 md:h-72 object-cover border-4 border-yellow-400 dark:border-yellow-300">
//                 </div>
//             </div>
//         </div>
//     </section>

//     <!-- About Section -->
//     <section id="about" class="py-20 md:py-32">
//          <div class="text-center mb-12">
//             <h2 class="text-4xl font-bold">About Me</h2>
//             <div class="w-24 h-1 bg-yellow-500 dark:bg-yellow-400 mx-auto mt-4"></div>
//             <p class="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">This section introduces me, my passion for web development, and my professional philosophy. It provides a narrative that goes beyond a list of skills, giving you insight into how I approach my work and what drives me to create exceptional digital experiences.</p>
//         </div>
//         <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
//             <div class="md:col-span-2">
//                 <img src="https://placehold.co/600x600/e0e0e0/333333?text=Developer+at+Work" alt="Developer working" class="rounded-lg shadow-xl w-full">
//             </div>
//             <div class="md:col-span-3">
//                 <p class="text-lg mb-4 text-gray-700 dark:text-gray-300">Hello! I'm Alex, a passionate Frontend Developer with a knack for turning complex problems into beautiful, intuitive, and performant web applications. My journey into web development started from a deep curiosity for how things work on the internet, which quickly grew into a career where I can blend my love for design with my passion for technology.</p>
//                 <p class="text-lg mb-4 text-gray-700 dark:text-gray-300">I specialize in the modern JavaScript ecosystem, with a strong focus on **React, TypeScript, and Next.js**. I'm driven by the challenge of creating seamless user experiences and believe that a great UI is one that feels invisible to the user. My philosophy is to write clean, scalable, and maintainable code, adhering to the best practices in the industry.</p>
//                  <p class="text-lg text-gray-700 dark:text-gray-300">When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or hiking in the great outdoors.</p>
//             </div>
//         </div>
//     </section>

//     <!-- Skills Section -->
//     <section id="skills" class="py-20 md:py-32 bg-gray-50 dark:bg-gray-800 rounded-xl">
//          <div class="text-center mb-12">
//             <h2 class="text-4xl font-bold">My Tech Stack</h2>
//             <div class="w-24 h-1 bg-yellow-500 dark:bg-yellow-400 mx-auto mt-4"></div>
//              <p class="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Here is a collection of the key technologies and tools I work with. This isn't just a list; it represents the toolkit I use to build robust, scalable, and visually appealing applications. By hovering over each skill, you can get a feel for the technologies I am most proficient in.</p>
//         </div>
//         <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
//             <div class="skill-card flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform hover:-translate-y-2">
//                 <span class="text-4xl mb-2"></span>
//                 <h3 class="font-semibold">JavaScript</h3>
//             </div>
//             <div class="skill-card flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform hover:-translate-y-2">
//                 <span class="text-4xl mb-2"></span>
//                 <h3 class="font-semibold">TypeScript</h3>
//             </div>
//             <div class="skill-card flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform hover:-translate-y-2">
//                 <span class="text-4xl mb-2"></span>
//                 <h3 class="font-semibold">React</h3>
//             </div>
//              <div class="skill-card flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform hover:-translate-y-2">
//                 <span class="text-4xl mb-2"></span>
//                 <h3 class="font-semibold">Next.js</h3>
//             </div>
//             <div class="skill-card flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform hover:-translate-y-2">
//                 <span class="text-4xl mb-2"></span>
//                 <h3 class="font-semibold">Node.js</h3>
//             </div>
//             <div class="skill-card flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform hover:-translate-y-2">
//                 <span class="text-4xl mb-2"></span>
//                 <h3 class="font-semibold">Tailwind CSS</h3>
//             </div>
//             <div class="skill-card flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform hover:-translate-y-2">
//                 <span class="text-4xl mb-2"></span>
//                 <h3 class="font-semibold">Figma</h3>
//             </div>
//             <div class="skill-card flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform hover:-translate-y-2">
//                 <span class="text-4xl mb-2"></span>
//                 <h3 class="font-semibold">Git & GitHub</h3>
//             </div>
//             <div class="skill-card flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform hover:-translate-y-2">
//                 <span class="text-4xl mb-2"></span>
//                 <h3 class="font-semibold">MongoDB</h3>
//             </div>
//             <div class="skill-card flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform hover:-translate-y-2">
//                 <span class="text-4xl mb-2"></span>
//                 <h3 class="font-semibold">PostgreSQL</h3>
//             </div>
//         </div>
//     </section>

//     <!-- Projects Section -->
//     <section id="projects" class="py-20 md:py-32">
//          <div class="text-center mb-12">
//             <h2 class="text-4xl font-bold">Featured Projects</h2>
//             <div class="w-24 h-1 bg-yellow-500 dark:bg-yellow-400 mx-auto mt-4"></div>
//              <p class="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">This is where I showcase my work. Each project is more than just code; it's a case study in problem-solving. Click on any project to see a detailed breakdown of its purpose, the development process, and the technologies used. This section provides tangible proof of my skills in action.</p>
//         </div>
//         <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         </div>
//     </section>

//     <!-- Experience Section -->
//     <section id="experience" class="py-20 md:py-32">
//         <div class="text-center mb-16">
//             <h2 class="text-4xl font-bold">Career Journey</h2>
//             <div class="w-24 h-1 bg-yellow-500 dark:bg-yellow-400 mx-auto mt-4"></div>
//             <p class="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">This timeline highlights my professional growth and the key roles I've held. It illustrates my journey through different companies and projects, showing the evolution of my skills and responsibilities over time. This section provides context for my experience and the environments in which I've thrived.</p>
//         </div>
//         <div class="relative max-w-2xl mx-auto">
//             <div class="timeline-path"></div>
//             <div id="experience-timeline"></div>
//         </div>
//     </section>

// </main>

// <footer id="contact" class="bg-gray-800 text-white dark:bg-gray-900 py-16">
//     <div class="container mx-auto px-6 text-center">
//         <h2 class="text-3xl font-bold mb-4">Let's Connect</h2>
//         <p class="text-gray-400 mb-8 max-w-lg mx-auto">I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out.</p>
//         <a href="mailto:alex.doe@example.com" class="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors hover:bg-yellow-300">alex.doe@example.com</a>
//         <div class="flex justify-center space-x-6 mt-12">
//              <a href="#" class="text-gray-400 hover:text-yellow-400">GitHub</a>
//              <a href="#" class="text-gray-400 hover:text-yellow-400">LinkedIn</a>
//              <a href="#" class="text-gray-400 hover:text-yellow-400">Twitter</a>
//         </div>
//     </div>
// </footer>

<div
  key={index}
  className="rounded-[2rem] pb-4 shadow-xl shadow-[#FFCC33] border-[#bad63b] border overflow-hidden group"
>
  <a href={link} target="_blank" rel="noreferrer">
    <div className="relative overflow-hidden flex h-[250px]">
      <img
        src={image}
        alt={name}
        className="w-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
      />
    </div>
    <div className="text-base flex flex-col gap-2 p-4 min-h-[180px]">
      <h2 className="text-3xl font-bold mb-1 text-portfolio-mc">{name}</h2>
      <p className="text-lg my-1 mb-2"> {details}</p>
      <p className="text-lg my-1">{stack}</p>
    </div>
  </a>
</div>;
// <!-- Project Modal -->
// <div id="project-modal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 hidden">
//     <div id="modal-content" class="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
//          <button id="modal-close-btn" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">&times;</button>
//         <img id="modal-image" src="" alt="Project Image" class="w-full h-64 object-cover rounded-t-lg">
//         <div class="p-8">
//             <h3 id="modal-title" class="text-3xl font-bold mb-2"></h3>
//             <div id="modal-tags" class="flex flex-wrap gap-2 mb-6"></div>

//             <h4 class="text-xl font-semibold mb-2 text-yellow-600 dark:text-yellow-400">Motivation</h4>
//             <p id="modal-motivation" class="mb-6 text-gray-700 dark:text-gray-300"></p>

//             <h4 class="text-xl font-semibold mb-2 text-yellow-600 dark:text-yellow-400">Development Process</h4>
//             <p id="modal-process" class="mb-6 text-gray-700 dark:text-gray-300"></p>

//             <h4 class="text-xl font-semibold mb-2 text-yellow-600 dark:text-yellow-400">Outcomes & Lessons</h4>
//             <p id="modal-outcome" class="mb-6 text-gray-700 dark:text-gray-300"></p>

//             <div class="flex space-x-4 mt-8">
//                 <a id="modal-live-link" href="#" target="_blank" class="bg-yellow-500 text-white font-bold py-2 px-5 rounded-lg transition-transform hover:scale-105 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300">Live Demo</a>
//                 <a id="modal-repo-link" href="#" target="_blank" class="bg-gray-200 text-gray-800 font-bold py-2 px-5 rounded-lg transition-transform hover:scale-105 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">GitHub Repo</a>
//             </div>
//         </div>
//     </div>
// </div>
