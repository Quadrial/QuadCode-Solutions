import React from "react";
import { Tool } from "../Tools/Tool";
import { Project } from "../Tools/Project";
import ContactForm from "../Contact/Contact";
import { About } from "../About/About";

export const Portfolio = () => {
  return (
    <>
      <section>
        <section className="flex flex-col-reverse md:flex-row lg:flex-row md:gap-[100px] lg:gap-[450px] items-center">
          <main className="flex flex-col items-center md:items-start lg:items-start">
            <div className="htext mt-[10px] md:mt-[100px] lg:mt-[100px] lg:w-[470px] md:w-[370px] w-[300px]">
              Hi, <br /> I`m{" "}
              <span className="animated-gradient text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 font-[700]">
                Isiak Quadri Opeyemi
              </span>
              , a passionate <span className="animated-gradient text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-yellow-500 to-red-500 font-[700]">
              Full Stack and Web3 developer
              </span> dedicated to crafting innovative
              digital solutions.
            </div>
            <main className="flex gap-[50px]">
              <div className="flex gap-2 items-center">
                <h1 className="ytext">2</h1>
                <p>
                  <h2 className="w-[85px] ">YEARS OF EXPERIENCE</h2>
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <h1 className="ytext">10</h1>
                <p>
                  <h2 className="w-[70px] ">PROJECT COMPLETED</h2>
                </p>
              </div>
            </main>
          </main>
          <img
            src="images/pp1.png"
            alt=""
            className="lg:w-1/4 md:w-1/3 w-1/2 mt-10 hidden md:flex lg:flex"
          />
        </section>
        <div>
          <About />
        </div>
        <div id="tool-kit">
          <Tool />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};
