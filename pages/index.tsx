import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import { AboutMe } from "@/components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "@/components/Home/SomethingIveBuilt/CardsPreview";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";

export default function Home() {
  const [showStartup, setShowStartup] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const isProd = process.env.NODE_ENV === "production";

  useEffect(() => {
    clearInterval(context.sharedState.userdata.timerCookieRef.current);

    if (typeof window !== "undefined") {
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);

      window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    }

    const timer = setTimeout(() => {
      setShowStartup(false);
      setShowContent(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 2000);

    return () => clearTimeout(timer);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const meta = {
    title: "Ashutosh Gaurav",
    description: `I'm a Software Developer based in India. I build things for the web.`,
    image: "/titofCercle.png",
    type: "website",
  };

 return (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@titofabdo" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>

    {/* FULLSCREEN STARTUP (overlays everything) */}
    {showStartup && (
      <div className="fixed inset-0 z-50 bg-black">
        <Startup />
      </div>
    )}

    {/* Main content (only after startup finishes) */}
    {showContent && (
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full">
        <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
        <MyName finishedLoading={context.sharedState.finishedLoading} />
        <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
        <AboutMe ref={aboutRef} />
        <WhereIHaveWorked />
        <SomethingIveBuilt />
        <GetInTouch />
        <Footer githubUrl={"https://github.com/ashu6783"} hideSocialsInDesktop={true} />
        {!isProd && <ScreenSizeDetector />}
      </div>
    )}
  </>
);

}
