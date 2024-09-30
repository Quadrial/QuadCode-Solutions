import { Element } from "react-scroll";

export const Tool = () => {
  return (
    <>
      <section className="mt-10 flex flex-col items-center">
        <Element name="toolkitSection" className="flex flex-col text-center">
          <div className="htext" id="tool-kit">
            Skills and Development Toolkit
          </div>
          <p className="btext">
            Tools and technologies I use to craft innovative solutions
          </p>
        </Element>
        <figure className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-3 justify-center items-center lg:gap-[100px] md:gap-[50px] gap-10">
          <img
            src="images/html-5-svgrepo-com.svg"
            alt="HTML"
            className="w-[50%] md:w-[55%] lg:w-[30%] mx-auto"
          />
          <img
            src="images/nodejs-1-logo-svgrepo-com.svg"
            alt="NodeJS"
            className="w-[50%] md:w-[55%] lg:w-[30%] mx-auto"
          />
          <img
            src="images/mongodb-logo-svgrepo-com.svg"
            alt="MongoDB"
            className="w-[50%] md:w-[55%] lg:w-[30%] mx-auto"
          />
          <img
            src="images/nextjs-svgrepo-com.svg"
            alt="NextJS"
            className="w-[50%] md:w-[55%] lg:w-[30%] mx-auto"
          />
          <img
            src="images/tailwind-svgrepo-com.svg"
            alt="TailwindCSS"
            className="w-[50%] md:w-[55%] lg:w-[30%] mx-auto"
          />
          <img
            src="images/vite-svgrepo-com.svg"
            alt="Vite"
            className="w-[50%] md:w-[55%] lg:w-[30%] mx-auto"
          />
          <img
            src="images/github-round-svgrepo-com.svg"
            alt="GitHub"
            className="w-[50%] md:w-[55%] lg:w-[30%] mx-auto"
          />
          <img
            src="images/react-svgrepo-com.svg"
            alt="React"
            className="w-[50%] md:w-[55%] lg:w-[30%] mx-auto"
          />
          <img
            src="images/vscode-svgrepo-com.svg"
            alt="VSCode"
            className="w-[50%] md:w-[55%] lg:w-[30%] mx-auto"
          />
          <img
            src="images/javascript-svgrepo-com.svg"
            alt="JavaScript"
            className="w-[50%] md:w-[55%] lg:w-[30%] mx-auto"
          />
          <img
            src="images/bootstrap-svgrepo-com.svg"
            alt="Bootstrap"
            className="w-[50%] md:w-[55%] lg:w-[30%] mx-auto"
          />
          <img
            src="images/light-solidity-svgrepo-com.svg"
            alt="Genetic Data"
            className="w-[50%] md:w-[55%] lg:w-[30%] mx-auto"
          />
        </figure>
      </section>
    </>
  );
};
