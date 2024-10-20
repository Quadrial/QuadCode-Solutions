import { Link } from "react-scroll";
import { FiHome, FiUser, FiTool, FiBriefcase, FiMail } from "react-icons/fi";

export default function Header() {
  return (
    <>
      <div className="z-10 lg:px-[250px] md:px-[100px] px-[30px] sticky top-0 bg-Text text-Header flex items-center justify-between border-b border-gray-400">
        <Link href="/" className="flex gap-2 items-center">
          <img
            src="/images/mlogo.png"
            alt="QuadCode"
            className="py-4 w-[50px] h-[70px]"
          />
          <p className="font-[500] text-2xl">QuadCode</p>
        </Link>

        {/* Desktop and tablet navigation */}
        <main className="DESKTOP-MENU hidden md:flex space-x-8 lg:flex">
          <Link
            to="homeSection"
            smooth={true}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            Home
          </Link>
          <Link
            to="aboutSection"
            smooth={true}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            About
          </Link>
          <Link
            to="toolkitSection"
            smooth={true}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            Toolkit
          </Link>
          <Link
            to="projectSection"
            smooth={true}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            Projects
          </Link>
          <Link
            to="contactSection"
            smooth={true}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            Contact
          </Link>
        </main>
      </div>

      {/* Mobile Icon Navigation */}
      <section className="MOBILE-MENU p-2 flex gap-10 md:hidden lg:hidden px-[30px] fixed bottom-0 left-0 right-0 bg-Text border-t border-gray-400 z-10">
        <Link
          to="homeSection"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl"
        >
          <FiHome /> {/* Home Icon */}
        </Link>
        <Link
          to="aboutSection"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl"
        >
          <FiUser /> {/* About Icon */}
        </Link>
        <Link
          to="toolkitSection"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl"
        >
          <FiTool /> {/* Toolkit Icon */}
        </Link>
        <Link
          to="projectSection"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl"
        >
          <FiBriefcase /> {/* Projects Icon */}
        </Link>
        <Link
          to="contactSection"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl"
        >
          <FiMail /> {/* Contact Icon */}
        </Link>
      </section>
    </>
  );
}
