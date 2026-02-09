import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Wiingy() {
  const tasks = [
    {
      text: "Contributed to the core tutor discovery and matching platform at Wiingy, enabling scalable subject-based search and filtering.",
      keywords: ["tutor discovery", "matching platform", "subject-based search", "filtering"],
    },
    {
      text: "Designed and implemented backend subject-to-tutor mapping APIs, enabling fast, accurate filtering across large tutor datasets.",
      keywords: ["backend APIs", "subject-to-tutor mapping", "filtering"],
    },
    {
      text: "Implemented subject-ID-based filtering end-to-end, connecting frontend filters to backend APIs for consistent, efficient data retrieval.",
      keywords: ["subject-ID-based filtering", "frontend filters", "backend APIs", "data retrieval"],
    },
    {
      text: "Migrated tutor discovery pages from server-side to client-side rendering, removing filter reload delays and improving responsiveness.",
      keywords: ["server-side", "client-side rendering", "responsiveness"],
    },
    {
      text: "Improved web performance by removing unused code and optimizing assets, increasing Lighthouse score from 67 to 85.",
      keywords: ["web performance", "Lighthouse score", "67 to 85"],
    },
  ];

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-800">
      <div className="flex flex-col space-y-6 max-w-xl">
        {/* Company Image */}
        <div className="flex items-center gap-4 pb-3 border-b border-gray-700">
          <img
            src="/img/wiingy.jpeg"
            alt="Wiingy"
            className="h-20 md:h-24 w-auto object-contain rounded-lg bg-white/5 p-3"
          />
        </div>

        <div className="flex justify-between items-baseline border-b border-gray-700 pb-3">
          {/* Title and company */}
          <div>
            <h3 className="text-gray-100 font-semibold text-lg md:text-xl font-Arimo tracking-wide">
              SDE Intern
            </h3>
            <h4 className="text-AAsecondary font-medium text-sm md:text-base">Wiingy</h4>
          </div>
          {/* Date with badge styling */}
          <span className="font-mono text-xs bg-gray-800 text-gray-300 py-1 px-2 rounded-full">
            Oct 2025 - Dec 2025
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
          {['React.js', 'TypeScript', 'Node.js', 'Backend APIs', 'Performance Optimization', 'Client-side Rendering'].map((skill) => (
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

