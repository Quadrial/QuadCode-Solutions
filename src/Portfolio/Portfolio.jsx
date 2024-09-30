import React from "react";
import { Tool } from "../Tools/Tool";
import { Project } from "../Tools/Project";
import ContactForm from "../Contact/Contact";
import { About } from "../About/About";

export const Portfolio = () => {
  return (
    <>
      <section>
        <section className="flex flex-col items-center md:items-start lg:items-start">
          <div className="htext mt-[100px] lg:w-[470px] md:w-[370px] w-[300px]">
            Hi, <br /> I`m Isiak Quadri Opeyemi, a passionate web developer
            dedicated to crafting innovative digital solutions.
          </div>
          <main className="flex gap-[50px]">
            <div className="flex gap-2 items-center">
              <h1 className="text-[50px] font-semibold text-Text">2</h1>
              <p>
                <h2 className="w-[70px] text-Header">YEARS OF EXPERIENCE</h2>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <h1 className="text-[50px] font-semibold text-Text">10</h1>
              <p>
                <h2 className="w-[70px] text-Header">PROJECT COMPLETED</h2>
              </p>
            </div>
          </main>
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
