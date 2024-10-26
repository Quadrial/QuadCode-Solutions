import { useState } from "react";
import { Link } from "react-scroll";
import { FiHome, FiUser, FiTool, FiBriefcase, FiMail } from "react-icons/fi";
// import { SiReactiveresume } from "react-icons/si";
import ThemeToggle from "../DarkMode/ThemeToggle";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isResumeVisible, setIsResumeVisible] = useState(false); // State for resume visibility

  const handleResumeClick = (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Show the resume image
    setIsResumeVisible(true);

    // Open the resume in a new tab (this is optional based on your requirements)
    const resumeUrl = "/images/A4-Resume2.png"; // Update this to your resume file path
    window.open(resumeUrl, "_blank");

    // Trigger the download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "A4-Resume2.png"; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumeClose = () => {
    setIsResumeVisible(false); // Hide the resume image
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
          <p className="font-[900] text-2xl">QuadCode</p>
        </Link>

        {/* Desktop and tablet navigation */}
        <main className="DESKTOP-MENU hidden md:flex space-x-5 lg:flex">
          <Link
            to="homeSection"
            smooth={true}
            offset={-90}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            Home
          </Link>
          <Link
            to="aboutSection"
            smooth={true}
            offset={-90}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            About
          </Link>
          <Link
            to="toolkitSection"
            smooth={true}
            offset={-90}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            Toolkit
          </Link>
          <Link
            to="projectSection"
            smooth={true}
            offset={-90}
            duration={500}
            className="cursor-pointer my-8 uppercase"
          >
            Projects
          </Link>
          <div
            className="relative my-8"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {/* Main Link */}
            <div className="cursor-pointer uppercase">Contacts</div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
                <ul className="py-2">
                  <li>
                    <Link
                      to="contactSection"
                      smooth={true}
                      offset={-90}
                      duration={500}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={handleResumeClick}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      Resume
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </main>

        {/* Theme Navigation */}
        <div className="flex gap-6">
          <ThemeToggle />
        </div>
      </div>

      {/* Resume Image Display */}
      {isResumeVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md relative">
            <img
              src="/images/A4-Resume2.png" // Update this to your resume image file path
              alt="Resume"
              className="w-96 h-auto" // Adjust width and height as needed
            />
            <button
              onClick={handleResumeClose}
              className="absolute top-2 right-2 text-red-500"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Mobile Icon Navigation */}
      <section className="mheader MOBILE-MENU ">
        <Link
          to="homeSection"
          smooth={true}
          duration={500}
          offset={-90}
          className="cursor-pointer text-2xl"
        >
          {" "}
          {/* Home Icon */}
          <div className="flex flex-col items-center">
            <FiHome />
            <p className="text-sm">Home</p>
          </div>
        </Link>
        <Link
          to="aboutSection"
          smooth={true}
          duration={500}
          offset={-90}
          className="cursor-pointer text-2xl"
        >
          <div className="flex flex-col items-center">
            <FiUser /> {/* About Icon */}
            <p className="text-sm">About</p>
          </div>
        </Link>
        <Link
          to="toolkitSection"
          smooth={true}
          offset={-90}
          duration={500}
          className="cursor-pointer text-2xl"
        >
          <div className="flex flex-col items-center">
            <FiTool /> {/* Toolkit Icon */}
            <p className="text-sm">Toolkit</p>
          </div>
        </Link>
        <Link
          to="projectSection"
          smooth={true}
          offset={-90}
          duration={500}
          className="cursor-pointer text-2xl"
        >
          <div className="flex flex-col items-center">
            <FiBriefcase /> {/* Projects Icon */}
            <p className="text-sm">Projects</p>
          </div>
        </Link>
        <Link
          to="contactSection"
          smooth={true}
          offset={-90}
          duration={500}
          className="cursor-pointer text-2xl"
        >
          <div className="flex flex-col items-center">
            <FiMail /> {/* Contact Icon */}
            <p className="text-sm">Contact</p>
          </div>
        </Link>
      </section>
    </>
  );
}
