import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { VscGithubAction } from "react-icons/vsc";
import { RxExternalLink } from "react-icons/rx";

export const Project = () => {
  return (
    <section className="mt-10">
      <main
        name="projectSection"
        className="flex flex-col justify-center items-center content-center text-center"
      >
        <div className="text-[32px]">Projects</div>
        <p className="text-[20px]">Innovations Brought to Life</p>
      </main>
      <Swiper
        className="mt-5 pb-12" // Added padding to bottom for pagination buttons
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {/*  Doc SwiperSlides */}
        <SwiperSlide>
          <div className="text-Text w-[300px] md:w-[350px] py-[30px] px-5 rounded-[20px] bg-Header">
            <div className="flex flex-col items-center gap-[13px]">
              {/* Embed the live preview in an iframe */}
              <iframe
                src="https://doctor-appointment-frontend-topaz.vercel.app/"
                title="Doctor Appointment Preview"
                className="w-full h-[200px] md:h-[300px] rounded-[20px] overflow-hidden"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div>
                <h4 className="text-[18px] leading-[20px] font-bold ">
                  Doctor Appointment Landingpage
                </h4>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400]">
              Is a user-friendly web design that simplifies the process of
              booking appointments with doctors. It allows patients to easily
              access medical professionals, view their availability, and
              schedule appointments at their convenience.
            </p>
            <div className="mt-5 flex gap-2">
              <p className="font-bold">Toolkit: </p>
              <p>HTML, React, Tailwind CSS</p>
            </div>
            <div className="mt-5 font-semibold flex gap-10 underline">
              <div className="flex gap-2 items-center">
                <RxExternalLink />
                <a
                  href="https://doctor-appointment-frontend-topaz.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live preview
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <VscGithubAction />
                <a
                  href="https://github.com/Quadrial/Doctor-Appointment-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/*  Bookmark SwiperSlides */}
        <SwiperSlide>
          <div className="text-Text w-[300px] md:w-[350px] py-[30px] px-5 rounded-[20px] bg-Header">
            <div className="flex flex-col items-center gap-[13px]">
              {/* Embed the live preview in an iframe */}
              <iframe
                src="https://bookmarklandingpage-five.vercel.app/"
                title="Doctor Appointment Preview"
                className="w-full h-[200px] md:h-[300px] rounded-[20px] overflow-hidden"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div>
                <h4 className="text-[18px] leading-[20px] font-bold ">
                  Bookmark Landing Page
                </h4>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400]">
              The Bookmark Landing Page is a clean, modern web interface
              designed to promote and demonstrate a bookmarking tool or service.
              The landing page highlights the main features of the tool,
              providing an easy-to-use interface for users to save and organize
              web links.
            </p>
            <div className="mt-5 flex gap-2">
              <p className="font-bold">Toolkit: </p>
              <p>HTML, React, Tailwind CSS</p>
            </div>
            <div className="mt-5 font-semibold flex gap-10 underline">
              <div className="flex gap-2 items-center">
                <RxExternalLink />
                <a
                  href="https://bookmarklandingpage-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live preview
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <VscGithubAction />
                <a
                  href="https://github.com/Quadrial/Bookmark-Landing-Page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/*  Space SwiperSlides */}
        <SwiperSlide>
          <div className="text-Text w-[300px] md:w-[350px] py-[30px] px-5 rounded-[20px] bg-Header">
            <div className="flex flex-col items-center gap-[13px]">
              {/* Embed the live preview in an iframe */}
              <iframe
                src="https://space-frontend.vercel.app/"
                title="Doctor Appointment Preview"
                className="w-full h-[200px] md:h-[300px] rounded-[20px] overflow-hidden"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div>
                <h4 className="text-[18px] leading-[20px] font-bold ">
                 Space tourism multi-page website
                </h4>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400]">
              Is a user-friendly web design that simplifies the process of
              booking appointments with doctors. It allows patients to easily
              access medical professionals, view their availability, and
              schedule appointments at their convenience.
            </p>
            <div className="mt-5 flex gap-2">
              <p className="font-bold">Toolkit: </p>
              <p>HTML, React, Tailwind CSS</p>
            </div>
            <div className="mt-5 font-semibold flex gap-10 underline">
              <div className="flex gap-2 items-center">
                <RxExternalLink />
                <a
                  href="https://space-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live preview
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <VscGithubAction />
                <a
                  href="https://github.com/Quadrial/Space-Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Countries SwiperSlides */}
        <SwiperSlide>
          <div className="text-Text w-[300px] md:w-[350px] py-[30px] px-5 rounded-[20px] bg-Header">
            <div className="flex flex-col items-center gap-[13px]">
              {/* Embed the live preview in an iframe */}
              <iframe
                src="https://restcountriesapi-bice.vercel.app/"
                title="Doctor Appointment Preview"
                className="w-full h-[200px] md:h-[300px] rounded-[20px] overflow-hidden"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div>
                <h4 className="text-[18px] leading-[20px] font-bold ">
                  REST Countries API with color theme switcher
                </h4>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400]">
              Is a user-friendly web design that simplifies the process of
              booking appointments with doctors. It allows patients to easily
              access medical professionals, view their availability, and
              schedule appointments at their convenience.
            </p>
            <div className="mt-5 flex gap-2">
              <p className="font-bold">Toolkit: </p>
              <p>HTML, React, Tailwind CSS</p>
            </div>
            <div className="mt-5 font-semibold flex gap-10 underline">
              <div className="flex gap-2 items-center">
                <RxExternalLink />
                <a
                  href="https://restcountriesapi-bice.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live preview
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <VscGithubAction />
                <a
                  href="https://github.com/Quadrial/Rest-countries-API-Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
          {/* Address SwiperSlides */}
        <SwiperSlide>
          <div className="text-Text w-[300px] md:w-[350px] py-[30px] px-5 rounded-[20px] bg-Header">
            <div className="flex flex-col items-center gap-[13px]">
              {/* Embed the live preview in an iframe */}
              <iframe
                src="https://ip-address-cyan.vercel.app/"
                title="Doctor Appointment Preview"
                className="w-full h-[200px] md:h-[300px] rounded-[20px] overflow-hidden"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div>
                <h4 className="text-[18px] leading-[20px] font-bold ">
                  IP Address Tracker
                </h4>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400]">
              Is a user-friendly web design that simplifies the process of
              booking appointments with doctors. It allows patients to easily
              access medical professionals, view their availability, and
              schedule appointments at their convenience.
            </p>
            <div className="mt-5 flex gap-2">
              <p className="font-bold">Toolkit: </p>
              <p>HTML, React, Tailwind CSS</p>
            </div>
            <div className="mt-5 font-semibold flex gap-10 underline">
              <div className="flex gap-2 items-center">
                <RxExternalLink />
                <a
                  href="https://ip-address-cyan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live preview
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <VscGithubAction />
                <a
                  href="https://github.com/Quadrial/Ip-Address"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-Text w-[300px] md:w-[350px] py-[30px] px-5 rounded-[20px] bg-Header">
            <div className="flex flex-col items-center gap-[13px]">
              {/* Embed the live preview in an iframe */}
              <iframe
                src="https://doctor-appointment-frontend-topaz.vercel.app/"
                title="Doctor Appointment Preview"
                className="w-full h-[200px] md:h-[300px] rounded-[20px] overflow-hidden"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div>
                <h4 className="text-[18px] leading-[20px] font-bold ">
                  Doctor Appointment Landingpage
                </h4>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400]">
              Is a user-friendly web design that simplifies the process of
              booking appointments with doctors. It allows patients to easily
              access medical professionals, view their availability, and
              schedule appointments at their convenience.
            </p>
            <div className="mt-5 flex gap-2">
              <p className="font-bold">Toolkit: </p>
              <p>HTML, React, Tailwind CSS</p>
            </div>
            <div className="mt-5 font-semibold flex gap-10 underline">
              <div className="flex gap-2 items-center">
                <RxExternalLink />
                <a
                  href="https://doctor-appointment-frontend-topaz.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live preview
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <VscGithubAction />
                <a
                  href="https://github.com/Quadrial/Doctor-Appointment-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Additional SwiperSlides */}
      </Swiper>
    </section>
  );
};

export default Project;
