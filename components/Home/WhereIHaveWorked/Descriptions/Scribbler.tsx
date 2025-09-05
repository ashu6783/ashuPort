import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function ScribblerTech() {
  const tasks = [
    {
      text: "Developed and integrated an 'Insert Cell' feature, allowing dynamic insertion of cells below existing code cells with automatic repositioning and immediate input focus.",
      keywords: ["Insert Cell", "dynamic insertion", "automatic repositioning", "immediate input focus"],
    },
    {
      text: "Created a branded splash screen featuring a GIF during notebook loading, replacing blank screens with engaging animations.",
      keywords: ["splash screen", "GIF", "notebook loading", "engaging animations"],
    },
    {
      text: "Implemented a contextual chatbot at the bottom of the notebook, allowing developers to query the notebook code directly and get intelligent responses.",
      keywords: ["contextual chatbot", "developer queries", "notebook code", "intelligent responses"],
    },
  ];

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-800">
      <div className="flex flex-col space-y-6 max-w-xl">
        <div className="flex justify-between items-baseline border-b border-gray-700 pb-3">
          <div>
            <h3 className="text-gray-100 font-semibold text-lg md:text-xl font-Arimo tracking-wide">
              Contributor (Open-Source)
            </h3>
            <h4 className="text-AAsecondary font-medium text-sm md:text-base">Scribbler.live</h4>
          </div>
          <span className="font-mono text-xs bg-gray-800 text-gray-300 py-1 px-2 rounded-full">
            Jun 2025
          </span>
        </div>

        <div className="flex flex-col space-y-4">
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
          {['React.js', 'TypeScript', 'AI', 'Chatbot', 'Open-Source', 'Notebook'].map((skill) => (
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
