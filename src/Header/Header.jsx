import { useState } from "react";

import { Link } from "react-scroll";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="z-10 lg:px-[250px] md:px-[100px] px-[30px] sticky top-0 bg-Text text-Header flex items-center justify-between border-b border-gray-400">
      <Link href="/" className="flex gap-2 items-center">
        <img
          src="/images/mlogo.png"
          alt="QuadCode"
          className=" py-4 w-[50px] h-[70px]"
        />
        <p className="font-[500] text-2xl">QuadCode</p>
      </Link>
      <nav>
        <section className="MOBILE-MENU flex md:hidden lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-Header"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-Header"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-Header"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="flex items-center gap-[150px] absolute top-0 right- px-8 py-2"
              onClick={() => setIsNavOpen(false)}
            >
              <Link href="/" className="flex gap-2 items-center">
                <img
                  src="/images/mlogo.png"
                  alt="QuadCode"
                  className=" py-4 w-[50px] h-[70px]"
                />
                <p className="font-[500] text-2xl">QuadCode</p>
              </Link>
              <svg
                className="h-8 w-8 text-Header"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col mt-14 text-Header">
              <hr className="border-t-2 border-Header w-full" />
              <Link
                to="homeSection"
                smooth={true}
                duration={500} // Scrolling duration in milliseconds
                className="cursor-pointer my-2 uppercase mr-10"
              >
                Home
              </Link>
              <hr className="border-t-2 border-Header w-full" />
              <Link
                to="aboutSection"
                smooth={true}
                duration={500} // Scrolling duration in milliseconds
                className="cursor-pointer my-2 uppercase mr-10"
              >
                About
              </Link>
              <hr className="border-t-2 border-Header w-full" />
              <Link
                to="projectSection"
                smooth={true}
                duration={500} // Scrolling duration in milliseconds
                className="cursor-pointer my-2 uppercase mr-10"
              >
                Toolkit
              </Link>
              <hr className="border-t-2 border-Header w-full" />
              <Link
                to="toolkitSection"
                smooth={true}
                duration={500} // Scrolling duration in milliseconds
                className="cursor-pointer my-2 uppercase mr-10"
              >
                Projects
              </Link>
              <hr className="border-t-2 border-Header w-full" />
              <Link
                to="contactSection"
                smooth={true}
                duration={500} // Scrolling duration in milliseconds
                className="cursor-pointer my-2 uppercase mr-10"
              >
                Contact
              </Link>
            </ul>
          </div>
        </section>

        <main className="DESKTOP-MENU hidden md:flex space-x-8 lg:flex">
          <Link
            to="homeSection"
            smooth={true}
            duration={500} // Scrolling duration in milliseconds
            className="cursor-pointer my-8 uppercase mr-10"
          >
            Home
          </Link>
          <Link
            to="aboutSection"
            smooth={true}
            duration={500} // Scrolling duration in milliseconds
            className="cursor-pointer my-8 uppercase"
          >
            About
          </Link>
          <Link
            to="toolkitSection"
            smooth={true}
            duration={500} // Scrolling duration in milliseconds
            className="cursor-pointer my-8 uppercase"
          >
            Toolkit
          </Link>
          <Link
            to="projectSection"
            smooth={true}
            duration={500} // Scrolling duration in milliseconds
            className="cursor-pointer my-8 uppercase"
          >
            Projects
          </Link>
          <Link
            to="contactSection"
            smooth={true}
            duration={500} // Scrolling duration in milliseconds
            className="cursor-pointer my-8 uppercase"
          >
            Contact
          </Link>
        </main>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 40vh;
        top: 0;
        right: 0;
        background: rgb(80, 100, 120);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: right;
        
        
      }
    `}</style>
    </div>
  );
}
