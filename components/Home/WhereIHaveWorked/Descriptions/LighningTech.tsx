import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function LightningTech() {
  const tasks = [
    {
      text: "Built responsive React components using TypeScript, boosting app performance and engagement by 35%.",
      keywords: ["TypeScript", "responsive React components", "35%"],
    },
    {
      text: "Developed interactive data grids with AG Grid, enhancing data visualization and user insights.",
      keywords: ["data grids", "AG Grid", "data visualization"],
    },
    {
      text: "Created 12 reusable components, reducing development time by 40% and improving maintainability.",
      keywords: ["12 reusable components", "40%", "improving maintainability"],
    },
    {
      text: "Implemented Redux state management with type-safe slices for efficient data flow and centralized control.",
      keywords: ["Redux state management", "type-safe slices", "centralized control", "efficient data flow"]
    },
    {
      text: "Developed backend APIs in Node.js, optimizing data transactions and improving system efficiency.",
      keywords: ["backend APIs", "Node.js", "data transactions", "system efficiency"]
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
            <h4 className="text-AAsecondary font-medium text-sm md:text-base">Lightning Tech</h4>
          </div>
          {/* Date with badge styling */}
          <span className="font-mono text-xs bg-gray-800 text-gray-300 py-1 px-2 rounded-full">
            Jan 2025 - Mar 2025
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
          {['React', 'TypeScript', 'Redux', 'Node.js', 'AG Grid'].map((skill) => (
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