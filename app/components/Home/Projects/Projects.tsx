import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-300">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* 1st project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <Image
            src="/images/p1.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            MediCare Healthcare Dashboard
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Web App , Healthcare Management
          </h1>
        </div>

        {/* 2st project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <Image
            src="/images/p2.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Admin Dashboard - Doctors & Appointments
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Web App , Admin Panel
          </h1>
        </div>

        {/* 3st project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <Image
            src="/images/p3.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Linker - Social Media Feed
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Web App , Social Media
          </h1>
        </div>

        {/* 4st project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <Image
            src="/images/p4.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Linker - User Profile
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Web App , Social Media
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
