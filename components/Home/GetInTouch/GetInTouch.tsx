import React, { useEffect, useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function GetInTouch() {
  const [isAndroidWebView, setIsAndroidWebView] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    // Check for Android WebView by inspecting the user agent
    if (/android/i.test(userAgent) && /wv/.test(userAgent)) {
      setIsAndroidWebView(true);
    }
  }, []);

  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col w-full py-20 md:py-28 items-center bg-AAprimary px-4 sm:px-8 md:px-16"
    >
      {/* Section Header */}
      <div className="flex flex-row items-center mb-4">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-mono text-sm sm:text-base">04.</span>
          <span className="font-mono text-AAsecondary text-base">What&apos;s Next?</span>
        </div>
      </div>
      
      {/* Section Title */}
      <h2 className="text-gray-200 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider opacity-90 mb-6 text-center">
        Get In Touch
      </h2>
      
      {/* Description */}
      <p className="font-sans text-gray-400 text-center max-w-md md:max-w-xl lg:max-w-2xl text-sm sm:text-base mb-8 leading-relaxed">
        I am always open to exciting opportunities, whether it&apos;s a job, an internship, or a collaborative project. 
        With expertise in full-stack web development using the MERN stack, along with experience in Next.js, 
        Clerk, and API integrations, I am eager to contribute to innovative and impactful projects.
        <br /><br />
        If you&apos;re looking for a dedicated developer to join your team, collaborate on a project, 
        or discuss potential opportunities, feel free to connect with me!
      </p>
      
      {/* CTA Button */}
      <div className="mt-2">
        {isAndroidWebView ? (
          <button
            className="font-mono text-sm md:text-base text-AAsecondary border-AAsecondary 
                     px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-md hover:bg-AAsecondary 
                     hover:bg-opacity-10 transition-all duration-300 transform hover:translate-y-1"
          >
            ashu00665@gmail.com
          </button>
        ) : (
          <a href="mailto:ashu00665@gmail.com" target="_blank" rel="noreferrer">
            <button
              className="font-mono text-sm md:text-base text-AAsecondary border-AAsecondary 
                       px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-md hover:bg-AAsecondary 
                       hover:bg-opacity-10 transition-all duration-300 transform hover:translate-y-1
                       flex items-center gap-2"
            >
              <span>Say Hello</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </a>
        )}
      </div>
    </div>
  );
}