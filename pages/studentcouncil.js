import { useState } from "react";
import Link from "next/link"; // Correct import for Link
import Image from "next/image"; // Importing Image from next/image
import Button from "../src/app/Button.js";
import "../src/app/globals.css";

const studentcouncil = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="absolute top-4 left-4 text-white sm:text-lg md:text-xl lg:text-2xl font-serif">
        <a href="/">AISHAANI AGARWAL</a>
      </div>
      <div className="container mt-16 px-4">
        <h1 className="font-serif font-bold text-center text-2xl sm:text-5xl md:text-6xl my-8">
          <br />
        </h1>
        {/* Header Section */}

        {/* Blog Heading */}
        <h1 className="font-serif font-bold text-center text-2xl sm:text-5xl md:text-6xl my-8">
          STUDENT COUNCIL
        </h1>
        <h1 className="font-serif font-bold text-center text-2xl sm:text-5xl md:text-6xl my-8">
          ⎯⎯⎯⎯⎯
        </h1>
        {/* First Blog Section */}
        <div className="flex flex-wrap items-center justify-center mb-8 container mt-16 px-24">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            {/* Image */}
            <Image
              src="/image/badge.jpg"
              alt="Badge Image"
              width={100}
              height={100}
              className="rotate-90"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2">
            {/* Text Content */}
            <h1 className="font-Barlow font-extrabold text-2xl text-left max-w-prose leading-loose tracking-wide">
              HOUSE VICE CAPTAIN - 2023-2024
            </h1>

            <br />

            <p className="font-Barlow text-xl text-left max-w-prose leading-loose ... tracking-wide">
              I started as a Volunteer at CareForALL Organization and advanced
              to the position of director and head of Social Marketing. I
              specialize in creating engaging social media content, editing
              videos, and managing social media platforms. I transitioned from
              content creation to leading a team in video editing, demonstrating
              strong leadership skills. Additionally, I am proficient in
              overseeing website design and implementing effective marketing
              strategies.
            </p>
          </div>
        </div>

        <h1 className="font-serif font-bold text-center text-2xl sm:text-5xl md:text-6xl my-8">
          <br />
          ⎯⎯⎯⎯⎯
        </h1>

        {/* First Blog Section */}
        <div className="flex flex-wrap items-center justify-center mb-8 container mt-16 px-24">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            {/* Image */}
            <Image
              src="/image/Unbound.jpg"
              alt="Trademo Image"
              width={350}
              height={350}
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2">
            {/* Text Content */}
            <h1 className="font-Barlow font-extrabold text-2xl text-left max-w-prose leading-loose tracking-wide">
              CULTURAL HEAD 2024-2025
            </h1>

            <br />

            <p className="font-Barlow text-xl text-left max-w-prose leading-loose ... tracking-wide">
              The invisible barrier that comes at every turn for workers without
              a bachelor’s degree Millions of workers with in-demand skills and
              experience, overlooked for higher-wage jobs because they don’t
              have a bachelor’s degree. This all stops now, Unbound helps these
              workers figure out their true passion and forces them to be
              limitless and pursue any job they want. Tear the paper ceiling
              today! Unbound is a webapp I developed from scratch with a fully
              functional databse which allows underprivileged people to explore
              their future careers after filling out a quick survey based on a
              very practical and simple algorithm created by me.
            </p>
          </div>
        </div>

        <h1 className="font-serif font-bold text-center text-2xl sm:text-5xl md:text-6xl my-8">
          <br />
          ⎯⎯⎯⎯⎯
        </h1>

        {/* Menu Buttons */}
        <div className="absolute top-4 right-4 space-x-2 sm:space-x-4">
          {/* Hamburger menu for small screens */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl font-mono antialiased"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
            {menuOpen && (
              <div className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-4 z-20">
                  <Button href="/pages/internships" onClick={toggleMenu}>INTERNSHIPS</Button>
                  <Button onClick={toggleMenu}>PROJECTS</Button>
                  <Button onClick={toggleMenu}>EXTRACURRICULARS</Button>
                  <Button onClick={toggleMenu}>AWARDS</Button>
                  <Button onClick={toggleMenu}>STUDENT COUNCIL</Button>
                  <Button onClick={toggleMenu}>RESEARCH</Button>
                  <Button onClick={toggleMenu}>COURSES</Button>
                  <Button onClick={toggleMenu}>SUMMER PROGRAM</Button>
                </div>
              )}
            </div>

            {/* Horizontal buttons for larger screens */}
            <div className="hidden sm:flex space-x-2 sm:space-x-4">
              <a href="/internships"><Button>INTERNSHIPS</Button></a>
              <a href="/project"><Button>PROJECTS</Button></a>
              <a href="/extracurricular"><Button>EXTRACURRICULARS</Button></a>
              <a href="/awards"><Button>AWARDS</Button></a>
              <a href="/studentcouncil"><Button>STUDENT-COUNCIL</Button></a>
              <a href="/studentcouncil"><Button>RESEARCH</Button></a>
              <a href="/studentcouncil"><Button>COURSES</Button></a>
              <a href="/studentcouncil"><Button>SUMMER PROGRAM</Button></a>
              
            </div>
        </div>
        <div className="absolute flex justify-between items-center -mb-64">
          {/* Name */}
        </div>
      </div>
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <p>
            Email:
            <a
              href="mailto:aishaani@gamil.com"
              className="text-indigo-600 hover:text-rose-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              aishaani@gamil.com
            </a>
          </p>
          <p>
            Phone:
            <a
              href="tel:+1234567890"
              className="text-indigo-600 hover:text-rose-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              +1234567890
            </a>
          </p>
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/aishaani-agarwal-186abb26a/"
              className="text-indigo-600 hover:text-rose-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/aishaani-agarwal
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default studentcouncil;
