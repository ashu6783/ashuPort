"use client";

import React, { forwardRef, useRef, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";
import ArrowIcon from "@/components/Icons/ArrowIcon";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        "size-8 sm:size-10 md:size-12", // Responsive sizes
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

// Convert AboutMe to a forwardRef component
export const AboutMe = forwardRef<HTMLDivElement, {}>(function AboutMe(props, ref) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check if we're on mobile based on screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is standard md breakpoint
    };

    // Initial check
    checkMobile();
    
    // Mark as mounted to ensure refs are properly set
    setMounted(true);

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Create refs for technologies
  const circleRefs = {
    // Core skills (always visible)
    profile: useRef<HTMLDivElement>(null),
    react: useRef<HTMLDivElement>(null),
    nextjs: useRef<HTMLDivElement>(null),
    javascript: useRef<HTMLDivElement>(null),
    typescript: useRef<HTMLDivElement>(null),
    
    // Additional skills (may be hidden on smaller screens)
    tailwind: useRef<HTMLDivElement>(null),
    nodejs: useRef<HTMLDivElement>(null),
    mongodb: useRef<HTMLDivElement>(null),
    sql: useRef<HTMLDivElement>(null),
    redis: useRef<HTMLDivElement>(null),
    
    // Tools (may be hidden on smaller screens)
    github: useRef<HTMLDivElement>(null),
    figma: useRef<HTMLDivElement>(null),
    vs: useRef<HTMLDivElement>(null),
    jira: useRef<HTMLDivElement>(null),
    
    // Extra technologies (hidden on mobile)
    api: useRef<HTMLDivElement>(null),
    gemini: useRef<HTMLDivElement>(null),
    leaflet: useRef<HTMLDivElement>(null),
    vercel: useRef<HTMLDivElement>(null),
    express: useRef<HTMLDivElement>(null),
  };

  // Helper function to create a circle with icon
  const createCircle = (ref, iconPath, altText) => (
    <Circle ref={ref}>
      <Image
        src={iconPath}
        alt={altText}
        width={20}
        height={20}
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    </Circle>
  );

  // Helper function to create beams - only shown if both elements are visible
  const createBeam = (fromRef, curvature = 0, endYOffset = 0, reverse = false) => {
    // Don't render beams until component is mounted
    if (!mounted) return null;
    
    // Ensure references exist
    if (!fromRef?.current || !circleRefs.profile?.current) return null;
    
    return (
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={circleRefs.profile}
        curvature={curvature}
        endYOffset={endYOffset}
        reverse={reverse}
        pathWidth={isMobile ? 1 : 2}
        pathOpacity={isMobile ? 0.15 : 0.25} // Increased opacity for better visibility
      />
    );
  };

  // Use useEffect to sync the external ref with our local containerRef
  useEffect(() => {
    if (ref && containerRef.current) {
      if (typeof ref === 'function') {
        ref(containerRef.current);
      } else {
        ref.current = containerRef.current;
      }
    }
  }, [ref, containerRef.current]);

  return (
    <div
      className="relative flex min-h-[400px] md:h-[500px] lg:h-[600px] w-full items-center justify-center overflow-hidden p-4 md:p-10 flex-col"
      ref={containerRef} 
    >
      {/* Section Header */}
      <section className="flex flex-row items-center justify-start w-full max-w-6xl px-4 md:px-0 mb-6 md:mb-12">
        <div className="flex flex-row items-center">
          <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary" />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 01.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          About Me
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>

      {/* Main Content with Icons */}
      <div className="flex w-full max-w-6xl items-center justify-center mt-4 md:mt-8">
        {isMobile ? (
          /* Mobile Layout - Vertical stack with fewer icons */
          <div className="flex flex-col items-center justify-center w-full gap-10">
            {/* Top Row - 2 icons */}
            <div className="flex flex-row justify-center gap-16">
              {createCircle(circleRefs.nextjs, "/nextjs.svg", "NextJS Icon")}
              {createCircle(circleRefs.typescript, "/ts.svg", "TypeScript Icon")}
            </div>
            
            {/* Second Row - 3 icons */}
            <div className="flex flex-row justify-center gap-12">
              {createCircle(circleRefs.react, "/react.svg", "React Icon")}
              {createCircle(circleRefs.javascript, "/js.svg", "Javascript Icon")}
              {createCircle(circleRefs.tailwind, "/tailwind.svg", "TailwindCSS Icon")}
            </div>
            
            {/* Center profile */}
            <Circle ref={circleRefs.profile} className="size-16 md:size-20">
              <Image
                src="/ashu.jpg"
                alt="Profile icon"
                width={48}
                height={48}
                className="rounded-full"
              />
            </Circle>
            
            {/* Fourth Row - 3 icons */}
            <div className="flex flex-row justify-center gap-12">
              {createCircle(circleRefs.nodejs, "/node.svg", "NodeJS Icon")}
              {createCircle(circleRefs.mongodb, "/mongodb.svg", "MongoDB Icon")}
              {createCircle(circleRefs.sql, "/sql.svg", "SQL Icon")}
            </div>
            
            {/* Bottom Row - 2 icons */}
            <div className="flex flex-row justify-center gap-16">
              {createCircle(circleRefs.github, "/github.svg", "Github Icon")}
              {createCircle(circleRefs.vs, "/vs.svg", "VS Code Icon")}
            </div>
            
            {/* Add Gemini to mobile layout */}
            <div className="flex flex-row justify-center gap-16">
              {createCircle(circleRefs.gemini, "/gemini.svg", "Gemini Icon")}
            </div>
          </div>
        ) : (
          /* Desktop Layout - Horizontal layout with all icons */
          <div className="flex flex-row items-center justify-between w-full">
            {/* Far Left Group (4 icons) */}
            <div className="flex flex-col gap-4">
              {createCircle(circleRefs.nextjs, "/nextjs.svg", "NextJS Icon")}
              {createCircle(circleRefs.typescript, "/ts.svg", "TypeScript Icon")}
              {createCircle(circleRefs.tailwind, "/tailwind.svg", "TailwindCSS Icon")}
              {createCircle(circleRefs.mongodb, "/mongodb.svg", "MongoDB Icon")}
            </div>

            {/* Left of Profile (3 icons) */}
            <div className="flex flex-col gap-4">
              {createCircle(circleRefs.nodejs, "/node.svg", "NodeJS Icon")}
              {createCircle(circleRefs.sql, "/sql.svg", "SQL Icon")}
              {createCircle(circleRefs.jira, "/jira.svg", "Jira Icon")}
            </div>

            {/* Center profile */}
            <Circle ref={circleRefs.profile} className="size-16 md:size-20">
              <Image
                src="/ashu.jpg"
                alt="Profile icon"
                width={60}
                height={60}
                className="rounded-full"
              />
            </Circle>

            {/* Right of Profile (3 icons) */}
            <div className="flex flex-col gap-4">
              {createCircle(circleRefs.javascript, "/js.svg", "Javascript Icon")}
              {createCircle(circleRefs.redis, "/redis.svg", "Redis Icon")}
              {createCircle(circleRefs.api, "/api.svg", "API Icon")}
            </div>

            {/* Far Right (4 icons) */}
            <div className="flex flex-col gap-4">
              {createCircle(circleRefs.react, "/react.svg", "React Icon")}
              {createCircle(circleRefs.gemini, "/gemini.svg", "Gemini Icon")}
              {createCircle(circleRefs.github, "/github.svg", "Github Icon")}
              {createCircle(circleRefs.vs, "/vs.svg", "VS Code Icon")}
            </div>
          </div>
        )}
      </div>

      {/* Render beams only after the component is mounted and refs are set */}
      {mounted && (
        <>
          {/* Connect Left Side Icons - For Both Mobile & Desktop */}
          {createBeam(circleRefs.nextjs, isMobile ? 10 : 50, 0)}
          {createBeam(circleRefs.typescript, isMobile ? 5 : 20, 5)}
          {createBeam(circleRefs.tailwind, isMobile ? 0 : 5, 10)}
          {createBeam(circleRefs.mongodb, isMobile ? -5 : -35, 15)}
          {createBeam(circleRefs.nodejs, isMobile ? -10 : -15, 0)}
          {createBeam(circleRefs.sql, isMobile ? -5 : 5, 5)}
          {createBeam(circleRefs.jira, isMobile ? 0 : -15, 10)}

          {/* Connect Right Side Icons - For Both Mobile & Desktop */}
          {createBeam(circleRefs.javascript, isMobile ? 10 : -20, 0, true)}
          {createBeam(circleRefs.redis, isMobile ? 5 : -20, 5, true)}
          {createBeam(circleRefs.api, isMobile ? 0 : -10, 10, true)}
          {createBeam(circleRefs.react, isMobile ? -5 : 50, 0, true)}
          
          {/* Fix the Gemini beam - Ensure it always renders */}
          {createBeam(circleRefs.gemini, isMobile ? -10 : 25, 5, true)}
          
          {createBeam(circleRefs.github, isMobile ? 0 : 15, 10, true)}
          {createBeam(circleRefs.vs, isMobile ? 5 : -12, 15, true)}
        </>
      )}
    </div>
  );
});