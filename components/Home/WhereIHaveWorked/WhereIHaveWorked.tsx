import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import LightningTech from "./Descriptions/LighningTech";
import Wiingy from "./Descriptions/Wiingy";
import AdityaBirla from "./Descriptions/AdityaBirla";

export default function WhereIHaveWorked() {
  // Initialize the state with the default company
  const [selectedJob, setSelectedJob] = React.useState("AdityaBirla");
  
  const renderJobDescription = () => {
    switch (selectedJob) {  
      case "AdityaBirla":
        return <AdityaBirla />;
      case "Wiingy":
        return <Wiingy />;
      case "LightningTech":
        return <LightningTech />;
      default:
        return null;
    }
  };

  return (
    <div 
      data-aos="fade-up" 
      className="flex flex-col items-center justify-center py-24 space-y-12 "
    >
      {/* Section Title */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary" />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 02.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      
      {/* Content section */}
      <section className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0
        justify-center items-center md:items-start w-full max-w-5xl px-4 md:px-0">
        {/* Company selector */}
        <CompaniesBar 
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob} 
        />
        
        {/* Job description */}
        <div className="md:flex-grow w-full md:max-w-xl">
          {renderJobDescription()}
        </div>
      </section>
    </div>
  );
}

const CompaniesBar = ({ selectedJob, setSelectedJob }) => {
  // Companies data
  const companies = React.useMemo(() => [
    {
      id: "AdityaBirla",
      name: "Aditya Birla (TMRW)",
      period: "Dec 2025 - Present"
    },
    {
      id: "Wiingy",
      name: "Wiingy",
      period: "Oct 2025 - Dec 2025"
    },
    {
      id: "LightningTech",
      name: "Lightning Tech",
      period: "Jan 2025 - April 2025"
    }
  ], []);

  const buttonRefs = React.useRef({});
  const [buttonHeight, setButtonHeight] = React.useState(64);

  React.useEffect(() => {
    // Measure the actual height of a button
    const firstButton = buttonRefs.current[companies[0]?.id];
    if (firstButton) {
      setButtonHeight(firstButton.offsetHeight);
    }
  }, [companies]);

  // Calculate indicator position and height based on selected job
  const getIndicatorPosition = () => {
    const index = companies.findIndex(company => company.id === selectedJob);
    return index >= 0 ? index * buttonHeight : 0;
  };

  // Calculate mobile indicator position in pixels
  const getMobileIndicatorPosition = () => {
    const index = companies.findIndex(company => company.id === selectedJob);
    const segmentWidth = 100 / companies.length;
    return index >= 0 ? `${segmentWidth * index}%` : "0%";
  };

  return (
    <div className="flex flex-col w-full md:w-64 bg-gray-900/20 rounded-lg overflow-hidden">
      {/* Company buttons */}
      <div className="relative flex flex-col">
        {/* Animated indicator */}
        <div className="hidden md:block absolute left-0 w-1 bg-gray-700 h-full">
          <motion.div
            animate={{ 
              y: getIndicatorPosition(),
              height: buttonHeight
            }}
            className="absolute w-1 bg-AAsecondary"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          ></motion.div>
        </div>
        
        {/* Company buttons */}
        {companies.map((company) => (
          <button
            key={company.id}
            ref={(el) => { buttonRefs.current[company.id] = el; }}
            onClick={() => setSelectedJob(company.id)}
            className={`flex flex-col items-start py-3 px-4 border-l-2 transition-all duration-300 ${
              selectedJob === company.id 
                ? "border-AAsecondary text-AAsecondary bg-ResumeButtonHover" 
                : "border-transparent text-gray-500 hover:text-AAsecondary hover:bg-ResumeButtonHover/50"
            }`}
          >
            <span className="font-mono text-sm md:text-base">{company.name}</span>
            <span className="font-mono text-xs opacity-70">{company.period}</span>
          </button>
        ))}
      </div>
      
      {/* Mobile indicator (horizontal) */}
      <div className="md:hidden h-0.5 w-full bg-gray-700 mt-1 relative overflow-hidden">
        <motion.div 
          animate={{ 
            x: getMobileIndicatorPosition()
          }}
          className="h-full bg-AAsecondary absolute left-0"
          style={{ width: `${100 / companies.length}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        ></motion.div>
      </div>
    </div>
  );
};