import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GitBranch, ChevronDown, ChevronUp, X } from "lucide-react";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:");
  }

  const MotionComponent = motion(Component);

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  username?: string;
  directory?: string;
  branch?: string;
}

export const Terminal = ({
  children,
  className,
  title = "MINGW64:/Git Bash",
  username = "user",
  directory = "~/project",
  branch = "main",
}: TerminalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Auto-scroll whenever children change
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "z-10 w-full rounded-md border border-gray-700 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden",
        "bg-black", // Git Bash black background
        "md:w-full w-full",
        isMobile && isCollapsed ? "h-12" : "h-auto", // Collapse height on mobile when collapsed
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-gray-700 bg-gray-900 p-2 px-4">
        <div className="flex items-center gap-1">
          <GitBranch size={14} className="text-yellow-400" />
          <span className="ml-2 text-xs font-medium text-gray-300">{title}</span>
        </div>

        <div className="flex flex-row gap-x-4 items-center">
          {isMobile && (
            <button 
              onClick={toggleCollapsed} 
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              {isCollapsed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
          <button className="text-gray-400 hover:text-white transition-colors p-1">
            <X size={16} />
          </button>
        </div>
      </div>

      {!(isMobile && isCollapsed) && (
        <div
          ref={contentRef}
          className={cn(
            "h-full overflow-auto p-4 max-h-[calc(60vh-40px)]",
            isMobile && "max-h-[calc(50vh-40px)]" 
          )}
        
          style={{ 
            msOverflowStyle: "none", 
            scrollbarWidth: "none", 
          }}
        >
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code className="grid gap-y-1 font-mono text-sm text-yellow-300">{children}</code>
          </pre>
        </div>
      )}

      {!(isMobile && isCollapsed) && (
        <div className="flex items-start border-t border-gray-800 bg-black p-2 px-4">
          <div className="flex flex-col text-base w-full">
            <div className="flex items-center">
              <span className="text-green-500 text-sm mr-1">{username}@MINGW64</span>
              <span className="text-white mr-1">:</span>
              <span className="text-pink-500 mr-1">{directory}</span>
              <span className="text-green-400 flex items-center">
                <GitBranch size={14} className="mr-1" />
                <span>({branch})</span>
              </span>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-yellow-500 mr-2">$</span>
              <div className="h-4 w-1 bg-gray-400 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};