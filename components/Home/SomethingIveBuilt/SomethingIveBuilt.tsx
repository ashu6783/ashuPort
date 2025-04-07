import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1 Ens Vision */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image - Desktop View */}
          <div
            className="hidden bg-AAprimary z-10 py-4 
          absolute md:grid grid-cols-12 w-full h-full content-center"
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href={"https://medical-rx.vercel.app"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/MedicalRx.png"} alt={"Project Screen shot"} className={`w-full rounded h-full`} />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* Mobile Image - Below Description */}
            <div className="md:hidden w-full mb-4">
              <a href={"https://medical-rx.vercel.app"} target="_blank" rel="noreferrer">
                <Img
                  src={"/MedicalRx.png"}
                  alt={"Project Screen shot"}
                  className={`w-full rounded h-auto`}
                />
              </a>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 
              flex flex-col items-start space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">MedicalRx</span>
                <a href="https://medical-rx.vercel.app" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Revolutionizing prescriptions with AI-driven insights and care
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  At <span className="text-AAsecondary"> MedicalRx</span>, I developed an innovative healthcare platform that leverages
                  <span className="text-AAsecondary"> AI-driven symptom-based diagnosis and prescription generation</span> using the
                  <span className="text-AAsecondary"> Gemini API</span>. The platform integrates
                  <span className="text-AAsecondary"> OpenStreetMap via React-Leaflet</span> to locate nearby pharmacies, hospitals, and clinics,
                  and features an <span className="text-AAsecondary"> AI chatbot</span> with
                  <span className="text-AAsecondary"> voice assistant support</span> via the Web Speech API, enabling users to get answers to their questions interactively.
                  Key features I implemented include
                  <span className="text-AAsecondary"> real-time reminders</span>, a
                  <span className="text-AAsecondary"> Kanban board-style interface</span> built with React-DnD for patients to drag and drop tasks and track their recovery progress,
                  and <span className="text-AAsecondary"> lab test recommendations</span>, effectively bridging the gap between diagnosis and patient understanding.
                  The platform is powered by Clerk for secure authentication, Redis for API rate limiting, and a robust tech stack including Next.js, MongoDB, and more.
                  <span className="text-white">...Currently enhancing it with smarter workflows and patient-centric features.</span>
                </p>

              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Clerk</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">Rect-Dnd</span>
                <span className="pr-4 z-10">Redis</span>
                <span className="pr-4 z-10">React-Leaflet</span>
                <span className="pr-4 z-10">OpenStreetMap</span>
                <span className="pr-4 z-10">Gemini API</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/ashu6783/medicalRx" />
                <a href="https://medical-rx.vercel.app" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 - Zentrix */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image - Desktop View */}
          <div
            className="hidden bg-AAprimary z-10 py-4 
          absolute md:grid grid-cols-12 w-full h-full content-center"
          >
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://userology.vercel.app" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/zentrix.png"} alt={"Project Screen shot"} className={`w-full rounded h-full`} />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* Mobile Image - Below Description */}
            <div className="md:hidden w-full mb-4">
              <a href="https://userology.vercel.app" target={"_blank"} rel="noreferrer">
                <Img
                  src={"/zentrix.png"}
                  alt={"Project Screen shot"}
                  className={`w-full rounded h-auto`}
                />
              </a>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
              col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Zentrix</span>
                <a href="https://userology.vercel.app" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Real time crypto,news and weather dashboard
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Zentrix is a dynamic dashboard built using <span className="text-AAsecondary">Next.js, TypeScript, and React</span>,
                  designed to deliver <span className="text-AAsecondary">real-time updates</span> for cryptocurrency, weather, and news.
                  It features <span className="text-white">secure real-time crypto price tracking</span> powered by Redux WebSocket and the CoinCap API,
                  along with an intuitive <span className="text-white">multi-city weather selection interface</span> using the OpenWeatherMap API.
                  Users can monitor crypto trends with Chart.js visualizations, access real-time news updates via NewsAPI with optimized performance through lazy loading,
                  and enjoy a fully responsive design.
                  <span className="text-AAsecondary">This project highlights my expertise in full-stack development, API integrations, and performance optimization.</span>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Charts.js</span>
                <span className="pr-4 z-10">WebSocket</span>
                <span className="pr-4 z-10">OpenWeatherApi</span>
                <span className="pr-4 z-10">CoinCapApi</span>
                <span className="pr-4 z-10">NewsApi</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/ashu6783/userology" />
                <a href="https://userology.vercel.app" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3 MedSynth */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image - Desktop View */}
          <div
            className="hidden bg-AAprimary z-10 py-4 
          absolute md:grid grid-cols-12 w-full h-full content-center"
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href={"https://med-synth.vercel.app/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/medsynth.png"} alt={"Project Screen shot"} className={`w-full rounded h-full`} />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* Mobile Image - Below Description */}
            <div className="md:hidden w-full mb-4">
              <a href={"https://med-synth.vercel.app/"} target="_blank" rel="noreferrer">
                <Img
                  src={"/medsynth.png"}
                  alt={"Project Screen shot"}
                  className={`w-full rounded h-auto`}
                />
              </a>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 
              flex flex-col items-start space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">MedSynth</span>
                <a href="https://med-synth.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Where Chemistry Meets Data-Driven Insight.
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
                  At <span className="text-AAsecondary">MedSynth</span>, a web application leveraging
                  <span className="text-AAsecondary">NVIDIA&apos;s AI MolMIM (Molecule Mimetic) model</span>,
                  <span className="text-AAsecondary">RDKit</span>, and the <span className="text-AAsecondary">PubChem API</span>.
                  This platform enables researchers to rapidly design molecular structures, explore properties,
                  and identify therapeutic compounds using cutting-edge computational chemistry and informatics technologies
                  using pubchem api.
                  <span className="text-white">...Actively working for more feature enhancements and improvements</span>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Ably</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">NextAuth</span>
                <span className="pr-4 z-10">Nvidia-MIM</span>
                <span className="pr-4 z-10">PubChem</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/ashu6783/medicalRx" />
                <a href="https://med-synth.vercel.app/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 - Shop Bizz */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image - Desktop View */}
          <div
            className="hidden bg-AAprimary z-10 py-4 
          absolute md:grid grid-cols-12 w-full h-full content-center"
          >
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://shopbizzz-frontend.onrender.com/" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/eco.png"} alt={"Project Screen shot"} className={`w-full rounded h-full`} />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* Mobile Image - Below Description */}
            <div className="md:hidden w-full mb-4">
              <a href="https://shopbizzz-frontend.onrender.com/" target={"_blank"} rel="noreferrer">
                <Img
                  src={"/eco.png"}
                  alt={"Project Screen shot"}
                  className={`w-full rounded h-auto`}
                />
              </a>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
              col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Shop-Bizz</span>
                <a href="https://shopbizzz-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Sustainable eco friendly E-Commerce Application
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  ShopBizz is an innovative e-commerce platform developed with the <span className="text-AAsecondary">MERN stack</span>,
                  crafted to enhance <span className="text-AAsecondary">digital shopping</span> for eco-conscious businesses and customers.
                  It includes <span className="text-white">robust user authentication</span>, role-based permissions,
                  and a user-friendly <span className="text-white">dashboard for overseeing products,
                    orders, and transactions</span>. Shoppers can explore a variety of items,
                  add them to their cart, and finalize purchases through seamless
                  <span className="text-AAsecondary">payment solutions like <span className="font-bold">Stripe</span></span>.
                  Featuring a responsive layout and a high-performance backend,
                  ShopBizz delivers an effortless shopping journey.
                  <span className="text-AAsecondary">This project demonstrates my expertise in full-stack development, API integration, and building scalable solutions.</span>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">Express.js</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">Stripe(Payment Gateway)</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/ashu6783/shopbizzz" />
                <a href="https://shopbizzz-frontend.onrender.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}