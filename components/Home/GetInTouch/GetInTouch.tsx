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
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base"> 04.</span>
          <span className=" font-sans text-AAsecondary text-base">What&apos;s Next?</span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">Get In Touch</span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
      I’m always open to exciting opportunities, whether it&apos; a job, an internship, or a collaborative project. With expertise in full-stack web development using the MERN stack, along with experience in Next.js, Prisma ORM, and API integrations, I’m eager to contribute to innovative and impactful projects.

If you&apos;re looking for a dedicated developer to join your team, collaborate on a project, or discuss potential opportunities, feel free to connect with me!
      </p>
      <div className="pt-4">
        {isAndroidWebView ? (
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            ashu00665@gmail.com
          </button>
        ) : (
          <a href="mailto:ashu00665@gmail.com" target={"_blank"} rel="noreferrer">
            <button
              className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
            >
              Say Hello
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
