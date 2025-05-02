import { useState } from "react";
import Link from "next/link"; // Correct import for Link
import Image from "next/image"; // Importing Image from next/image
import Button from "../src/app/Button.js";
import "../src/app/globals.css";

const Internships = () => {
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
        INTERNSHIPS
      </h1>
      <h1 className="font-serif font-bold text-center text-2xl sm:text-5xl md:text-6xl my-8">
        ⎯⎯⎯⎯⎯
      </h1>
      {/* First Blog Section */}
      <div className="flex flex-wrap items-center justify-center mb-8 container mt-16 px-24">
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          {/* Image */}
          <Image
            src="/image/trademo.jpg"
            alt="Trademo Image"
            width={250}
            height={250}
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          {/* Text Content */}
          <p className="font-serif text-xl text-left max-w-prose leading-loose ... tracking-wide">
            As an intern at Trademo, a Global Supply Chain Intelligence
            <br />
            company, I worked as a front-end developer. I honed my skills
            <br />
            in JavaScript and CSS, creating responsive user interfaces. I
            improved
            <br />
            my communication and teamwork, explored VSCode features, and <br />
            gained project management insights. This experience solidified my
            <br />
            front-end development foundation and equipped me for success in a{" "}
            <br />
            tech environment.
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
          <a href="mailto:aishaani@gamil.com" className="text-indigo-600 hover:text-rose-600 ml-1" target="_blank" rel="noopener noreferrer">
            aishaani@gamil.com
          </a>
        </p>
        <p>
          Phone: 
          <a href="tel:+1234567890" className="text-indigo-600 hover:text-rose-600 ml-1" target="_blank" rel="noopener noreferrer">
            +1234567890
          </a>
        </p>
        <p>
          LinkedIn: 
          <a href="https://www.linkedin.com/in/aishaani-agarwal-186abb26a/" className="text-indigo-600 hover:text-rose-600 ml-1" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/aishaani-agarwal
          </a>
        </p>
      </div>
    </footer>
    </div>
    
  );
};

export default Internships;
