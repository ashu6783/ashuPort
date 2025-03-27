import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function LighningTech() {
  const tasks = [
    {
      text: " Built responsive React components using TypeScript, boosting app performance and engagement by 35%.",
      keywords: ["TypeScript", "responsive React components", "35%"],
    },
    {
      text: " Developed interactive data grids with AG Grid, enhancing data visualization and user insights..",
      keywords: ["data grids", "AG Grid", "data visualization"],
    },
    {
      text: " Created 12 reusable components, reducing development time by 40% and improving maintainability.",
      keywords: ["12 reusable components", "40%", "phpMyAdmin", "improving maintainability"],
    },
    {
      text: "Implemented Redux state management with type-safe slices for efficient data flow and centralized control.",
      keywords: ["Redux state management", "type-safe slices", "centralized control", "efficient data flow"]
    },
    {
      text: " Developed backend APIs in Node.js, optimizing data transactions and improving system efficiency.",
      keywords: ["backend APIs", "Node.js", "data transactions", "system efficiency"]
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer Intern <span className="text-AAsecondary">@ Web Development</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2025 - March 2025</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-1 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
