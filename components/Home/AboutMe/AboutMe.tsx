import React from "react";
import Img from "../../../components/smallComp/image/Img";
import { ChevronRight, Briefcase, GraduationCap, MapPin, Code } from "lucide-react";

export default function AboutMe(props) {
  const technologies = [
    {
      category: "Frontend",
      techs: ["React/Next.js", "TypeScript/JavaScript", "Redux/Context API", "Tailwind CSS"]
    },
    {
      category: "Backend",
      techs: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"]
    },
    {
      category: "Tools",
      techs: ["Git/GitHub", "VS Code", "Postman", "Figma"]
    }
  ];

  return (
    <div 
      id="aboutSection" 
      data-aos="fade-up" 
      className="snap-start flex flex-col items-center py-20 bg-AAprimary relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-AAsecondary opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-AAsecondary opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="flex flex-col space-y-12 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1000px] z-10">
        {/* Section Header */}
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <span className="text-AAsecondary font-mono text-lg sm:text-xl"> 01.</span>
            <h2 className="text-gray-200 font-bold tracking-wider text-xl sm:text-3xl pl-2">
              About Me
            </h2>
          </div>
          <div className="bg-gray-500 h-[0.2px] w-full sm:w-96 ml-4 opacity-30"></div>
        </div>
        
        {/* Content Container */}
        <div className="w-full flex flex-col lg:flex-row gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-3/5 space-y-6">
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-base leading-relaxed">
              <div className="font-medium text-gray-300">
                Hola! Myself <span className="text-white font-semibold">Ashutosh Gaurav</span>, and I am a passionate{" "}
                <span className="text-AAsecondary font-semibold">Full Stack Software Developer</span> with strong problem-solving skills.
              </div>
              
              <div className="flex items-start space-x-2 text-gray-400">
                <GraduationCap className="flex-shrink-0 w-5 h-5 text-AAsecondary mt-1" />
                <p>
                  Pre-final year (6th semester) student at the{" "}
                  <span className="text-AAsecondary font-medium">Indian Institute of Information Technology Ranchi (IIIT R)</span>,
                  pursuing a degree in Electronics and Communication Engineering (ECE).
                </p>
              </div>
              
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="flex-shrink-0 w-5 h-5 text-AAsecondary mt-1" />
                <p>
                  I hail from <span className="text-AAsecondary font-medium">Lakhimpur Kheri, Uttar Pradesh, India</span>, and my dedication
                  to software development has driven me to explore full-stack engineering extensively.
                </p>
              </div>
              
              <div className="flex items-start space-x-2 text-gray-400">
                <Briefcase className="flex-shrink-0 w-5 h-5 text-AAsecondary mt-1" />
                <p>
                  I gained valuable industry experience during my internship at{" "}
                  <span className="text-AAsecondary font-medium">Lightning Technologies</span> as a
                  <span className="text-AAsecondary font-medium"> SDE Intern</span>. There, I worked extensively on
                  data visualization, handling real-time data streams, and integrating dashboards to present meaningful
                  insights.
                </p>
              </div>
              
              <p className="text-gray-400">
                My journey in software engineering has been driven by a strong passion for problem-solving, innovation,
                and continuous learning. I am always interested to keep learning and improve my skills to make a positive impact in the tech world.
              </p>
            </div>
            
            {/* Technologies Section */}
            <div className="pt-4">
              <div className="flex items-center mb-4 space-x-2">
                <Code className="w-5 h-5 text-AAsecondary" />
                <h3 className="text-lg font-semibold text-gray-300">Technologies I have been working with:</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {technologies.map((techGroup, groupIndex) => (
                  <div key={groupIndex} className="space-y-3">
                    <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider">{techGroup.category}</h4>
                    <div className="space-y-2">
                      {techGroup.techs.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center space-x-2">
                          <ChevronRight className="h-3.5 w-3.5 text-AAsecondary" />
                          <span className="text-gray-400 text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <div className="relative max-w-xs">
              {/* Border frame */}
              <div 
                className="absolute w-full h-full border-2 border-AAsecondary rounded-md translate-x-4 translate-y-4 
                transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6"
              ></div>
              
              {/* Image container */}
              <div className="relative group rounded-md overflow-hidden border border-gray-700">
                {/* Overlay */}
                <div className="absolute inset-0 bg-AAsecondary/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                
                {/* Image */}
                <Img
                  src={"/ashutosh.jpg"}
                  className="w-full h-full object-cover rounded-md grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
                  alt="Ashutosh Gaurav"
                />
                
                {/* Hover effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-AAsecondary/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}