import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import ArrowIcon from "../../Icons/ArrowIcon";


// Custom Tag Component for tech stack
const TechTag = ({ label }) => (
  <span className="text-xs bg-gray-700/70 text-gray-300 px-2 py-1 rounded-md">
    {label}
  </span>
);

// Project Card Component
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-AAtertiary rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-AAsecondary/20 transition-opacity duration-300 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 500ms'
          }}
        />
      </div>

      {/* Project Content */}
      <div className="p-5">
        <div className="mb-1">
          <span className="text-AAsecondary text-sm font-medium">{project.category}</span>
        </div>
        
        <a 
          href={project.liveLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <h3 className="text-gray-200 text-lg font-bold mb-2 hover:text-AAsecondary transition-colors duration-300">
            {project.title}
          </h3>
        </a>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech, index) => (
              <TechTag key={index} label={tech} />
            ))}
            {project.techStack.length > 4 && (
              <TechTag label={`+${project.techStack.length - 4}`} />
            )}
          </div>
        </div>
        
        {/* Links */}
        <div className="flex gap-3">
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-AAsecondary transition-colors duration-300"
          >
            <FiGithub size={18} />
          </a>
          <a 
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-AAsecondary transition-colors duration-300"
          >
            <FiExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

// Projects Data
const projectsData = [
  {
    title: "MedicalRx",
    category: "Healthcare",
    description: "AI-driven healthcare platform with symptom-based diagnosis and prescription generation using Gemini API. Features pharmacy locator, voice-assisted chatbot, and recovery progress tracking.",
    image: "/MedicalRx.png",
    techStack: ["Next.js", "Clerk", "MongoDB", "Rect-Dnd", "Redis", "React-Leaflet", "OpenStreetMap", "Gemini API"],
    githubLink: "https://github.com/ashu6783/medicalRx",
    liveLink: "https://medical-rx.vercel.app"
  },
  {
    title: "ClipUrl",
    category: "Web Tool",
    description: "URL shortener dashboard with analytics, QR code generation, and comprehensive management features built with React, Redux, and Tailwind CSS.",
    image: "/clipurl.png",
    techStack: ["React.js", "Recharts.js", "Redux", "React-qr-code", "Tailwind CSS"],
    githubLink: "https://github.com/ashu6783/clipURL-frontend",
    liveLink: "https://clip-url-frontend.vercel.app"
  },
  {
    title: "MedSynth",
    category: "Research",
    description: "Platform leveraging NVIDIA's AI MolMIM model, RDKit, and PubChem API for molecular structure design and therapeutic compound identification.",
    image: "/medsynth.png",
    techStack: ["Next.js", "Ably", "MongoDB", "NextAuth", "Nvidia-MIM", "PubChem"],
    githubLink: "https://github.com/ashu6783/medicalRx",
    liveLink: "https://med-synth.vercel.app/"
  },
  {
    title: "Shop-Bizz",
    category: "E-commerce",
    description: "Sustainable eco-friendly e-commerce platform with role-based permissions, product management dashboard, and Stripe payment integration.",
    image: "/eco.png",
    techStack: ["React.js", "MongoDB", "Express.js", "Node.js", "Stripe"],
    githubLink: "https://github.com/ashu6783/shopbizzz",
    liveLink: "https://shopbizzz-frontend.onrender.com/"
  },
  {
    title: "Zentrix",
    category: "Dashboard",
    description: "Real-time dashboard for cryptocurrency prices, weather updates, and news featuring Redux WebSocket, Chart.js visualizations, and multi-API integration.",
    image: "/zentrix.png",
    techStack: ["React.js", "Charts.js", "WebSocket", "OpenWeatherApi", "CoinCapApi", "NewsApi"],
    githubLink: "https://github.com/ashu6783/userology",
    liveLink: "https://userology.vercel.app"
  }
];

// Main Projects Component
export default function SomethingIveBuilt() {
  return (
    <div
      id="SomethingIveBuiltSection"
      className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* Section Header */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">03.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      {/* Projects Grid */}
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      
      {/* View More Projects Button */}
      <div data-aos="fade-up" className="mt-8 text-center">
        <a 
          href="https://github.com/ashu6783"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-AAsecondary text-AAsecondary rounded-md hover:bg-AAsecondary/10 transition-all duration-300 inline-block"
        >
          View More on GitHub
        </a>
      </div>
    </div>
  );
}