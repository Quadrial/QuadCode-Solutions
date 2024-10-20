import { Link } from "react-scroll";
import { FiHome, FiUser, FiTool, FiBriefcase, FiMail } from "react-icons/fi";
import { SiReactiveresume } from "react-icons/si";
import ThemeToggle from "../DarkMode/ThemeToggle";

export default function Header() {
  const handleResumeClick = (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Open the resume in a new tab
    const resumeUrl = "/images/mlogo.png"; // Update this to your resume file path
    window.open(resumeUrl, "_blank");

    // Trigger the download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf"; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="header">
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
            offset={-80}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            Home
          </Link>
          <Link
            to="aboutSection"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            About
          </Link>
          <Link
            to="toolkitSection"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            Toolkit
          </Link>
          <Link
            to="projectSection"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            Projects
          </Link>
          <Link
            to="contactSection"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            Contact
          </Link>
        </main>

        {/* Theme Navigation */}
        <div className="flex gap-4">
          {/* Resume Link */}
          <a
            href="/images/mlogo.png" // Update this to your resume file path
            onClick={handleResumeClick}
            className="flex items-center"
          >
            <SiReactiveresume className="text-2xl" /> {/* Resume Icon */}
          </a>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Icon Navigation */}
      <section className="mheader MOBILE-MENU ">
        <Link
          to="homeSection"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer text-2xl"
        >
          <FiHome /> {/* Home Icon */}
        </Link>
        <Link
          to="aboutSection"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer text-2xl"
        >
          <FiUser /> {/* About Icon */}
        </Link>
        <Link
          to="toolkitSection"
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer text-2xl"
        >
          <FiTool /> {/* Toolkit Icon */}
        </Link>
        <Link
          to="projectSection"
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer text-2xl"
        >
          <FiBriefcase /> {/* Projects Icon */}
        </Link>
        <Link
          to="contactSection"
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer text-2xl"
        >
          <FiMail /> {/* Contact Icon */}
        </Link>
      </section>
    </>
  );
}
