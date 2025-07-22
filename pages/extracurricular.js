import { useState } from "react";
import Link from "next/link"; // Correct import for Link
import Image from "next/image"; // Importing Image from next/image
import Button from "../src/app/Button.js";
import "../src/app/globals.css";

const Project = () => {
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
          EXTRACURRICULARS
        </h1>
        <h1 className="font-serif font-bold text-center text-2xl sm:text-5xl md:text-6xl my-8">
          ⎯⎯⎯⎯⎯
        </h1>
        <div className="flex flex-wrap items-center justify-center mb-8 container mt-16 px-24">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            {/* Image */}
            <Image
              src="/image/cfa.jpg"
              alt="Trademo Image"
              width={450}
              height={450}
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2">
            {/* Text Content */}
            <h1 className="font-Barlow font-extrabold text-2xl text-left max-w-prose leading-loose tracking-wide">
              CareForALL
            </h1>
            <h2 className="font-Barlow font-extrabold text-xl text-left max-w-prose leading-loose tracking-wide">
              - Director and Head of Social Media
            </h2>

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
              Unbound
            </h1>
            <h2 className="font-Barlow font-extrabold text-xl text-left max-w-prose leading-loose tracking-wide">
              - Developer
            </h2>

            <br />

            <p className="font-Barlow text-xl text-left max-w-prose leading-loose ... tracking-wide">
            The invisible barrier that comes at every turn for workers without a 
            bachelor’s degree Millions of workers with in-demand skills and experience, 
            overlooked for higher-wage jobs because they don’t have a bachelor’s degree. 
            This all stops now, Unbound helps these workers figure out their true passion and 
            forces them to be limitless and pursue any job they want. Tear the paper ceiling 
            today! Unbound is a webapp I developed from scratch with a fully functional 
            databse which allows underprivileged people to explore their future careers
             after filling out a quick survey based on a very practical and simple 
             algorithm created by me.
             unboundonline.in
            </p>
          </div>
        </div>

        <h1 className="font-serif font-bold text-center text-2xl sm:text-5xl md:text-6xl my-8">
          <br />
          ⎯⎯⎯⎯⎯
        </h1>
        <div className="flex flex-wrap items-center justify-center mb-8 container mt-16 px-24">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            {/* Image */}
            <Image
              src="/image/TH.jpg"
              alt="track honest Image"
              width={350}
              height={350}
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2">
            {/* Text Content */}
            <h1 className="font-Barlow font-extrabold text-2xl text-left max-w-prose leading-loose tracking-wide">
              Trackhonest
            </h1>
            <h2 className="font-Barlow font-extrabold text-xl text-left max-w-prose leading-loose tracking-wide">
              - Developer
            </h2>

            <br />

            <p className="font-Barlow text-xl text-left max-w-prose leading-loose ... tracking-wide">
            Track Honest is a self-engineered wellness web
             application architected from scratch using core web 
             technologies—HTML5, CSS3, and JavaScript—with a focus on 
             intuitive UX, minimal friction, and real-time behavior tracking. Unlike 
             conventional diet apps that rely on static meal plans or rigid algorithms, Track 
             Honest leverages a lightweight, event-driven architecture that adapts dynamically 
             to user input and daily fluctuations, making it ultra-flexible and deeply personal. 
             It introduces a behavioral reward system that gamifies self-control—logging moments 
             of resistance as forward progress, not just calories—and redefines what it means 
             to “eat healthy” in a way that is both empathetic and sustainable. 
             trackhonest.com
            </p>
          </div>
        </div>

        <h1 className="font-serif font-bold text-center text-2xl sm:text-5xl md:text-6xl my-8">
          <br />
          ⎯⎯⎯⎯⎯
        </h1>
        <div className="flex flex-wrap items-center justify-center mb-8 container mt-16 px-24">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            {/* Image */}
            <Image
              src="/image/ptp.jpg"
              alt="plastic to paper Image"
              width={350}
              height={350}
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2">
            {/* Text Content */}
            <h1 className="font-Barlow font-extrabold text-2xl text-left max-w-prose leading-loose tracking-wide">
              Plastic to Paper
            </h1>
            <br />

            <p className="font-Barlow text-xl text-left max-w-prose leading-loose ... tracking-wide">
            I organized a community initiative aimed at promoting eco-friendly
             practices by collecting paper bags from residents and engaging 
             with local street vendors who still relied on plastic bags. 
             Facilitating the exchange of plastic for paper required strategic
              coordination and outreach efforts. Ensuring the proper disposal 
              of the collected plastic bags through a dedicated recycling company
               underscored our commitment to environmental stewardship and sustainability.
            </p>
          </div>
        </div>

        <h1 className="font-serif font-bold text-center text-2xl sm:text-5xl md:text-6xl my-8">
          <br />
          ⎯⎯⎯⎯⎯
        </h1>
        <div className="flex flex-wrap items-center justify-center mb-8 container mt-16 px-24">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            {/* Image */}
            <Image
              src="/image/trinity.jpg"
              alt="trinity Image"
              width={350}
              height={350}
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2">
            {/* Text Content */}
            <h1 className="font-Barlow font-extrabold text-2xl text-left max-w-prose leading-loose tracking-wide">
              Trinity
            </h1>
            <br />
            <p className="font-Barlow text-xl text-left max-w-prose leading-loose ... tracking-wide">
            Attain distinction in acting trinity exam!
            </p>
          </div>
        </div>

        <h1 className="font-serif font-bold text-center text-2xl sm:text-5xl md:text-6xl my-8">
          <br />
          ⎯⎯⎯⎯⎯
        </h1>


         <div className="flex flex-wrap items-center justify-center mb-8 container mt-16 px-24">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            {/* Image */}
            <Image
              src="/image/unsplash.jpg"
              alt="film video"
              width={350}
              height={350}
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2">
            {/* Text Content */}
            <h1 className="font-Barlow font-extrabold text-2xl text-left max-w-prose leading-loose tracking-wide">
              Photography 
            </h1>
            <br />

            <p className="font-Barlow text-xl text-left max-w-prose leading-loose ... tracking-wide">
             I pursue photography as a creative outlet, sharing my work on 
             Unsplash, a renowned platform for high-quality, royalty-fre
             images. My photographs have garnered over 25,000 views and 
             downloads, reflecting my ability to create visually compelling 
             content that resonates with a global audience.
             https://unsplash.com/pt-br/@aishaani_06

            </p>
          </div>
        </div>

        <h1 className="font-serif font-bold text-center text-2xl sm:text-5xl md:text-6xl my-8">
          <br />
          ⎯⎯⎯⎯⎯
        </h1>



        <div className="flex flex-wrap items-center justify-center mb-8 container mt-16 px-24">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            {/* Image */}
            {/* <Image
              alt="film video"
              width={350}
              height={350}
            /> */}
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2">
            {/* Text Content */}
            <h1 className="font-Barlow font-extrabold text-2xl text-left max-w-prose leading-loose tracking-wide">
              Film Making Competition  
            </h1>
            <br />

            <p className="font-Barlow text-xl text-left max-w-prose leading-loose ... tracking-wide">
            I won first place in a film competition where I had 
            to create a video presenting my personal and professional 
            background in innovative ways. Through this project, I explored 
            different camera angles, various shooting techniques, and advanced 
            editing methods. This experience allowed me to refine my skills in visual 
            storytelling and video production, showcasing my ability to produce
             high-quality, engaging content.
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
                  <Button onClick={toggleMenu}>EXTRACURRICULARS</Button>
                  <Button onClick={toggleMenu}>STUDENT COUNCIL</Button>
                  <Button onClick={toggleMenu}>RESEARCH</Button>
                  <Button onClick={toggleMenu}>COURSES</Button>
                  <Button onClick={toggleMenu}>SUMMER PROGRAM</Button>
                </div>
              )}
            </div>

            {/* Horizontal buttons for larger screens */}
            <div className="hidden sm:flex space-x-2 sm:space-x-4">
              <Link href="/internships"><Button>INTERNSHIPS</Button></Link>
              <Link href="/extracurricular"><Button>EXTRACURRICULARS</Button></Link>
              <Link href="/studentcouncil"><Button>STUDENT-COUNCIL</Button></Link>
              <Link href="/research"><Button>RESEARCH</Button></Link>
              <Link href="/courses"><Button>COURSES</Button></Link>
              <Link href="/summerprogram"><Button>SUMMER PROGRAM</Button></Link>
              
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

export default Project;
