import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import { Portfolio } from "./Portfolio/Portfolio";
import { Footer } from "./Footer/Footer";
import { Element } from "react-scroll";
import AnimatedBackground from "./Header/AnimatedBackground";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true); // For handling the logo loader
  const [progress, setProgress] = useState(0); // Progress state for loading animation

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 10; // Increase progress by 10%
        clearInterval(interval);
        setLoading(false); // Stop loading when progress reaches 100
        return 100;
      });
    }, 300); // Update every 300ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // While loading, display the LogoLoader component
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <img
            src="/images/logo2.png"
            alt="Logo"
            className="w-[300px] h-[300px] mb-1"
          />
          <div className="text-2xl font-semibold text-gray-800">
            {progress}%
          </div>
        </div>
      </div>
    );
  }

  // Once loading is complete, display the actual content
  return (
    <>
      <div className="relative">
        <AnimatedBackground />{" "}
        {/* Background animation behind other elements */}
        <div className="relative z-10">
          {" "}
          {/* Content stays on top */}
          <Header />
          <Element
            name="homeSection"
            className="lg:px-[250px] md:px-[100px] px-[30px]"
          >
            <Portfolio />
          </Element>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
