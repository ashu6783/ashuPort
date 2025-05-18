import React, { useState, useEffect } from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

export default function ThisCantBeReached() {
  const [showText, setShowText] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  // Reusable animation patterns
  const blinkAnimation = {
    scaleY: [
      "100%", "0%", "100%", "0%", "100%", "0%", 
      "100%", "0%", "100%", "0%", "100%", "0%", 
      "100%", "0%", "100%"
    ]
  };
  
 
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 0.5 }}
      className="absolute h-screen w-full bg-gradient-to-r from-[#29323b] to-[#23354b] flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Icon */}
        <motion.div
          className="relative w-9 h-10"
          style={{ transform: 'scale(2)' }}
        >
          {/* Base shape */}
       <div className="absolute h-1 w-1/2 bg-AAsecondary"></div>
          
          {/* Left vertical line - full height of container, positioned at left edge */}
          <div className="absolute h-full w-1 bg-AAsecondary"></div>
          
          {/* Bottom horizontal line - spans full width, positioned at bottom edge */}
          <div className="absolute bottom-0 h-1 w-full bg-AAsecondary"></div>
          
          {/* Right vertical line (partial) - positioned at right edge, starts from bottom, height is 60% of container */}
          <div className="absolute right-0 bottom-0 h-6 w-1 bg-AAsecondary"></div>
          
          {/* NEW: Right vertical line (top part) - positioned at right edge, starts from top, extends to complete the boundary */}
          <div className="absolute right-0 top-0 h-4 w-1 bg-AAsecondary"></div>
          
          {/* NEW: Top horizontal line (right part) - completes the top boundary */}
          <div className="absolute top-0 right-0 h-1 w-1/2 bg-AAsecondary"></div>

          {/* Eyes */}
          <motion.div
            animate={blinkAnimation}
            transition={{ scaleY: { delay: 1.5, duration: 1 } }}
            className="absolute left-2 top-3 h-1.5 w-[3.5px] bg-AAsecondary"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scaleY: "100%" }}
            animate={{ opacity: 1, ...blinkAnimation }}
            transition={{
              opacity: { delay: 1, duration: 0 },
              scaleY: { delay: 1.5, duration: 1 }
            }}
            className="absolute right-2 top-3 h-1.5 w-[3.5px] bg-AAsecondary"
          ></motion.div>

          {/* Corner */}
          {/* <motion.div
            animate={{ rotate: -90, x: 9, y: -7 }}
            // transition={cornerTransition}
            className="absolute right-4 top-0 h-[18px] w-1 bg-AAsecondary"
          ></motion.div>
          <motion.div
            animate={{ rotate: 90, x: 6, y: -7 }}
            // transition={cornerTransition}
            className="absolute right-0 top-[14px] h-1 w-4 bg-AAsecondary"
          ></motion.div> */}
          
          {/* Disappearing elements */}
          <motion.div
            initial={{ opacity: "100%" }}
            animate={{ opacity: "0%" }}
            transition={{ opacity: { delay: 0.5, duration: 0 } }}
            className="flex"
          >
            <div className="absolute right-3 top-0 h-1 w-1 bg-AAsecondary"></div>
            <div className="absolute right-0 top-[10px] h-1 w-1 bg-AAsecondary"></div>
            <div className="absolute right-1 top-[7px] h-[4px] w-[4px] bg-AAsecondary"></div>
            <div className="absolute right-2 top-[4px] h-[4px] w-[4px] bg-AAsecondary"></div>
          </motion.div>

          {/* Smile */}
          <div className="absolute left-3 bottom-[10px] w-3 h-[3px] bg-AAsecondary"></div>
          <motion.div
            animate={{ y: [0, -5, 0, -5, 0, -5] }}
            transition={{ y: { delay: 3, duration: 0.5 } }}
            className="absolute left-[9px] bottom-[7px] w-[3px] h-[3px] bg-AAsecondary"
          ></motion.div>
          <motion.div
            animate={{ y: [0, -5, 0, -5, 0, -5] }}
            transition={{ y: { delay: 3, duration: 0.5 } }}
            className="absolute right-[9px] bottom-[7px] w-[3px] h-[3px] bg-AAsecondary"
          ></motion.div>
        </motion.div>
        
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.3 }}
          className="font-bold text-AAsecondary text-2xl mt-8"
        >
          Hello!
        </motion.span>
      </div>
    </motion.div>
  );
}