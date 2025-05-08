import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Typed from 'typed.js';
import { FileText, Package, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
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
        strings: ['I turn ideas into reality.', 'I build digital experiences.', 'I create innovative solutions.'],
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
    <div className="relative h-full flex flex-col justify-center px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52">
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
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider max-w-4xl"
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
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-AAsecondary transition-colors duration-300">
          <Github size={22} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-AAsecondary transition-colors duration-300">
          <Linkedin size={22} />
        </a>
        <a href="mailto:example@email.com" className="text-gray-400 hover:text-AAsecondary transition-colors duration-300">
          <Mail size={22} />
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        custom={7}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
      >
        <span className="text-sm mb-2 font-mono">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1">
          <motion.div
            className="w-1 h-2 bg-AAsecondary rounded-full"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
        <ChevronDown size={16} className="mt-2 animate-bounce" />
      </motion.div>
    </div>
  );
}