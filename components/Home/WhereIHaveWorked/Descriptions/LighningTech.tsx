import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function LightningTech() {
  const tasks = [
    {
      text: "Contributed significantly to MarketMind v2, a full-featured ERP platform for the APMC ecosystem, enhancing productivity through cloud integration and real-time analytics.",
      keywords: ["MarketMind v2", "ERP platform", "real-time analytics", "cloud integration"],
    },
    {
      text: "Developed real-time analytics dashboards with Chart.js, delivering 30% faster insights through dynamic visualizations.",
      keywords: ["Chart.js", "real-time analytics dashboards", "30% faster insights"],
    },
    {
      text: "Implemented virtualized AG Grid tables, reducing high-volume vehicle record data load time by 60%.",
      keywords: ["AG Grid", "virtualized tables", "60%"],
    },
    {
      text: "Collaborated on and integrated a shared React.js/TypeScript UI component system, improving maintainability and reducing code duplication by 35%.",
      keywords: ["React.js", "TypeScript", "shared UI component system", "35%"],
    },
    {
      text: "Engineered secure and modular Node.js/Express.js backend services, leveraging AWS for reliable cloud-hosted data storage and seamless data exchange.",
      keywords: ["Node.js", "Express.js", "AWS", "cloud-hosted data storage", "secure backend"],
    },
  ];

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-800">
      <div className="flex flex-col space-y-6 max-w-xl">
        <div className="flex justify-between items-baseline border-b border-gray-700 pb-3">
          {/* Title and company */}
          <div>
            <h3 className="text-gray-100 font-semibold text-lg md:text-xl font-Arimo tracking-wide">
              SDE Intern
            </h3>
            <h4 className="text-AAsecondary font-medium text-sm md:text-base">Lightning Technologies</h4>
          </div>
          {/* Date with badge styling */}
          <span className="font-mono text-xs bg-gray-800 text-gray-300 py-1 px-2 rounded-full">
            Jan 2025 - Apr 2025
          </span>
        </div>
        
        <div className="flex flex-col space-y-4">
          {/* Tasks Description */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex group hover:bg-gray-800/30 p-2 rounded-lg transition-colors duration-200">
                <ArrowIcon className="h-5 w-5 text-AAsecondary flex-none mt-0.5 transform group-hover:translate-x-1 transition-transform duration-200" />
                <span
                  className="text-gray-400 ml-3 text-sm md:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {/* Skills tags */}
          {['React.js', 'TypeScript', 'Chart.js', 'AG Grid', 'Node.js', 'Express.js', 'AWS'].map((skill) => (
            <span 
              key={skill} 
              className="text-xs font-mono bg-gray-800 text-gray-300 px-3 py-1 rounded-full hover:bg-AAsecondary/20 hover:text-AAsecondary transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
