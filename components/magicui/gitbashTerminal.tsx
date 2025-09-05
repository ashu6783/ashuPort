import React, { useEffect, useRef, useState } from "react";
import { Terminal } from "lucide-react";
import { AnimatedSpan } from "@/components/magicui/terminal";

const GitBashTerminal = ({ show = true }) => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentPath, setCurrentPath] = useState("~/portfolio");
  const [activeCommandIndex, setActiveCommandIndex] = useState(0);
  const terminalContentRef = useRef(null);

  const scrollToBottom = () => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    const allCommands = [
      { text: "git init", delay: 200 },
      { text: "git remote add origin https://github.com/ashutosh/portfolio.git", delay: 2000 },
      { text: "git status", delay: 2000 },
      { text: "git add .", delay: 2000 },
      { text: 'git commit -m "Initialize portfolio project"', delay: 2000 },
      { text: "git push -u origin main", delay: 2000 },
      { text: "ls -la", delay: 2000 },
      { text: "cat profile.json", delay: 2000 }
    ];

    if (!show) return;

    // Setup the sequential display of commands
    let timeouts = [];
    let cumulativeDelay = 0;

    allCommands.forEach((cmd, index) => {
      const timeout = setTimeout(() => {
        // Add new command to history
        setCommandHistory((prev) => {
          // If we want to keep only the most recent command, uncomment this:
          // return [cmd];

          // To keep all commands but fade previous ones:
          return [...prev, cmd];
        });

        // Update active command index
        setActiveCommandIndex(index);

        // Scroll to show the new command
        setTimeout(scrollToBottom, 10);
      }, cumulativeDelay);

      timeouts.push(timeout);
      cumulativeDelay += cmd.delay;
    });

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [show]);

  useEffect(() => {
    scrollToBottom();
  }, [commandHistory]);

  const renderCommandOutput = (command) => {
    switch (command) {
      case "git init":
        return (
          <div className="text-green-400">
            Initialized empty Git repository in ~/portfolio/.git/
          </div>
        );
      case "git remote add origin https://github.com/ashutosh/portfolio.git":
        return null;
      case "git status":
        return (
          <div className="space-y-1">
            <div className="text-green-400">On branch main</div>
            <div>Changes to be committed:</div>
            <div className="text-green-400 ml-4">new file: index.js</div>
            <div className="text-green-400 ml-4">new file: profile.json</div>
          </div>
        );
      case "git add .":
        return null;
      case 'git commit -m "Initialize portfolio project"':
        return (
          <div className="space-y-1">
            <div>[main (root-commit) e7a43b1] Initialize portfolio project</div>
            <div>2 files changed, 125 insertions(+)</div>
            <div>create mode 100644 index.js</div>
            <div>create mode 100644 profile.json</div>
          </div>
        );
      case "git push -u origin main":
        return (
          <div className="space-y-1">
            <div>Enumerating objects: 4, done.</div>
            <div>Counting objects: 100% (4/4), done.</div>
            <div>Delta compression using up to 8 threads</div>
            <div>Compressing objects: 100% (3/3), done.</div>
            <div>Writing objects: 100% (4/4), 1.23 KiB | 1.23 MiB/s, done.</div>
            <div>Total 4 (delta 0), reused 0 (delta 0), pack-reused 0</div>
            <div className="text-green-400">* [new branch]      main -&gt; main</div>
            <div className="text-green-400">Branch &apos;main&apos; set up to track remote branch &apos;main&apos; from &apos;origin&apos;.</div>
          </div>
        );
      case "ls -la":
        return (
          <div className="space-y-1">
            <div>total 16</div>
            <div>drwxr-xr-x  4 ashutosh staff  128 May 8 10:24 .</div>
            <div>drwxr-xr-x 18 ashutosh staff  576 May 8 10:22 ..</div>
            <div>drwxr-xr-x 10 ashutosh staff  320 May 8 10:24 .git</div>
            <div className="text-blue-400">-rw-r--r--  1 ashutosh staff  743 May 8 10:23 index.js</div>
            <div className="text-blue-400">-rw-r--r--  1 ashutosh staff  382 May 8 10:23 profile.json</div>
          </div>
        );
      case "cat profile.json":
        return (
          <pre className="text-yellow-300 whitespace-pre-wrap">
            {`{
  "college": "Indian Institute of Information Technology Ranchi",
  "batch":"2022-2026",
  "skills": [
    "Front-end Development",
    "Back-end Development",
    "AI-driven Applications",
    "Problem Solving",
    "Team Collaboration"
  ],
  "mission": "Creating exceptional digital experiences",
  "status": "Ready to contribute to dynamic projects"
}`}
          </pre>
        );

      default:
        return null;
    }
  };

  return (
    <div className="rounded-lg border border-gray-500 bg-gray-900 text-white font-mono text-sm overflow-hidden">
      <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <Terminal size={16} className="mr-2 text-gray-400" />
        <div className="text-gray-300">Git Bash - {currentPath}</div>
        <div className="ml-auto flex gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
        </div>
      </div>

      <div
        ref={terminalContentRef}
        className="p-4 h-[300px] overflow-y-auto bg-black bg-opacity-95 space-y-2 scrollbar-hide"
      >
        {commandHistory.map((cmd, index) => (
          <div
            key={index}
            className={`pb-2 transition-all duration-1000 ${index === activeCommandIndex
              ? "opacity-100"
              : index < activeCommandIndex
                ? "opacity-25"
                : "opacity-0"
              }`}
          >
            <AnimatedSpan
              delay={50} // Quick display for active command
              className="flex items-center text-gray-200"
            >
              <span className="text-green-400">ashutosh@dev</span>
              <span className="text-gray-400">:</span>
              <span className="text-blue-400">{currentPath}</span>
              <span className="text-gray-400">$</span>
              <span className="ml-2">{cmd.text}</span>
            </AnimatedSpan>

            {index === activeCommandIndex && (
              <AnimatedSpan
                delay={200} // Short delay for the output
                className="text-gray-200 mt-1 ml-0 block"
              >
                {renderCommandOutput(cmd.text)}
              </AnimatedSpan>
            )}
          </div>
        ))}

        <div className="flex items-center text-gray-200">
          <span className="text-green-400">ashutosh@dev</span>
          <span className="text-gray-400">:</span>
          <span className="text-blue-400">{currentPath}</span>
          <span className="text-gray-400">$</span>
          <span className="ml-2 relative">
            <span className="absolute -right-4 top-0 w-2 h-5 bg-gray-300 animate-pulse"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GitBashTerminal;