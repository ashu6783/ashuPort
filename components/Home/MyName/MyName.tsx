import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Typed from 'typed.js';
import { FileText, Package, ChevronDown } from "lucide-react";
import GitBashTerminal from "@/components/magicui/gitbashTerminal"; // Import the updated component

export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const [typingFinished, setTypingFinished] = useState(false);

  useEffect(() => {
    if (props.finishedLoading && nameRef.current) {
      const typedName = new Typed(nameRef.current, {
        strings: ['Ashutosh Gaurav'],
        typeSpeed: 70,
        backSpeed: 50,
        startDelay: 500,
        showCursor: true,
        cursorChar: '</>',
        autoInsertCss: true,
        onComplete: () => {
          // Signal that the typing animation is complete
          setTypingFinished(true);
        }
      });

      const typedTagline = new Typed(taglineRef.current, {
        strings: ['I am into frontend dev..', 'I am into backend dev..', 'I am into gen AI..'],
        typeSpeed: 60,
        backSpeed: 40,
        startDelay: 1500,
        backDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '..',
        autoInsertCss: true,
      });

      return () => {
        typedName.destroy();
        typedTagline.destroy();
      };
    }
  }, [props.finishedLoading]);

  const fadeInAnimationVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        opacity: { delay: props.finishedLoading ? 0.2 * custom : 10.4 + 0.1 * custom, duration: 0.3 },
        y: { delay: props.finishedLoading ? 0.2 * custom : 10.4 + 0.1 * custom, duration: 0.3 },
      },
    }),
  };

  // Calculate if terminal animations should be shown based on loading status
  const shouldShowTerminal = props.finishedLoading && typingFinished;

  return (
    <div className="relative h-full flex flex-col justify-center px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-30">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />

      <motion.span
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        custom={1}
        className="text-AAsecondary font-mono text-xl"
      >
        Hi, my name is
      </motion.span>

      <motion.h1
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        custom={2}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-5xl mt-4"
      >
        <span ref={nameRef}></span>
      </motion.h1>

      <motion.h2
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        custom={3}
        className="text-gray-400 font-bold text-xl lg:text-6xl sm:text-4xl md:text-5xl mt-4"
      >
        <span ref={taglineRef}></span>
      </motion.h2>
      

      {/* Terminal container */}
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        custom={4}
        className="text-gray-400 font-Header sm:pb-10 text-sm md:text-lg sm:text-md mt-10 tracking-wider max-w-4xl"
      >
        <GitBashTerminal show={shouldShowTerminal} />
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        custom={5}
        className="mt-12 flex flex-wrap gap-4"
      >
        <a href={"/ashutosh_cv.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded-md px-6 sm:px-8 py-3 sm:py-4 border-AAsecondary hover:bg-AAsecondary hover:bg-opacity-10 transition-all duration-300 flex items-center gap-2">
            <FileText size={18} />
            View Resume
          </button>
        </a>
        <a href="#projects">
          <button className="bg-transparent text-AAsecondary border rounded-md px-6 sm:px-8 py-3 sm:py-4 border-AAsecondary hover:bg-AAsecondary hover:bg-opacity-10 transition-all duration-300 flex items-center gap-2">
            <Package size={18} />
            See My Work
          </button>
        </a>
      </motion.div>

      {/* Social links */}
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        custom={6}
        className="mt-12 flex gap-6"
      >
       
      </motion.div>
    </div>
  );
}