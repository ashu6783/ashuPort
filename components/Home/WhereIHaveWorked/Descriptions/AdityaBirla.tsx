import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AdityaBirla() {
  const tasks = [
    {
      text: "Integrated Ops Log within the Castor module to enable structured logging and traceability of user-related activities for Bewakoof.",
      keywords: ["Ops Log", "Castor module", "structured logging", "traceability", "Bewakoof"],
    },
    {
      text: "Designed and implemented bulk user-fetch APIs reading from the secondary database (replica), improving scalability and reducing load on the primary database.",
      keywords: ["bulk user-fetch APIs", "secondary database", "replica", "scalability"],
    },
    {
      text: "Refactored subscribe/unsubscribe APIs to support multi-tenant flows (TIGC, Urbano) and implemented tenant-aware WhatsApp out-of-stock notifications via KwikEngage, integrating inventory threshold checks through the Inventory service using SKU-based subscriptions.",
      keywords: ["multi-tenant flows", "TIGC", "Urbano", "KwikEngage", "WhatsApp notifications", "Inventory service", "SKU-based subscriptions"],
    },
    {
      text: "Added Jest-based unit test cases for Payment Services, covering critical flows such as handlePostOrderSplitPaymentUpdate to ensure correctness and prevent regressions in split-payment order processing.",
      keywords: ["Jest", "unit test cases", "Payment Services", "handlePostOrderSplitPaymentUpdate", "split-payment"],
    },
  ];

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-800">
      <div className="flex flex-col space-y-6 max-w-xl">
        {/* Company Images */}
        <div className="flex items-center gap-4 pb-3 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <img
              src="/img/adityabirla.jpeg"
              alt="Aditya Birla"
              className="h-20 md:h-24 w-auto object-contain rounded-lg bg-white/5 p-3"
            />
            <img
              src="/img/tmrw.jpeg"
              alt="TMRW"
              className="h-20 md:h-24 w-auto object-contain rounded-lg bg-white/5 p-3"
            />
          </div>
        </div>

        <div className="flex justify-between items-baseline border-b border-gray-700 pb-3">
          {/* Title and company */}
          <div>
            <h3 className="text-gray-100 font-semibold text-lg md:text-xl font-Arimo tracking-wide">
              SDE Intern
            </h3>
            <h4 className="text-AAsecondary font-medium text-sm md:text-base">Aditya Birla Digital Fashion and Retail Ltd. (TMRW)</h4>
          </div>
          {/* Date with badge styling */}
          <span className="font-mono text-xs bg-gray-800 text-gray-300 py-1 px-2 rounded-full">
            Dec 2025 - Present
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
          {['Node.js', 'Jest', 'APIs', 'Multi-tenant', 'Database Optimization', 'Payment Services', 'KwikEngage'].map((skill) => (
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

