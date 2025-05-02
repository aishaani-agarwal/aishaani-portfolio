// "use client";

// import { useState } from 'react';
// import Link from 'next/link.js';
// import Image from 'next/image'; // Importing Image from next/image
// import Button from './Button.js'; // Adjust the path as necessary
// import "./globals.css";



// export default function Home() {
//   const [zoomed, setZoomed] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleNameClick = () => {
//     setZoomed(true);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <main className={`flex min-h-screen items-center justify-center relative transition-all duration-1000 ${zoomed ? 'bg-black' : 'bg-black'}`}>
//       {/* Main content */}
//       <div className={`flex-grow flex flex-col items-center justify-center text-center text-white relative z-10 transition-transform duration-1000 ${zoomed ? 'scale-75 mt-16' : 'mt-16'}`}>
//         <div onClick={handleNameClick} className="cursor-pointer">
//           <p className={`top-4 text-2xl sm:text-5xl md:text-7xl font-Rampart tracking-wide ${zoomed ? 'zoomed-in' : ''}`}>AISHAANI AGARWAL</p>
//         </div>
//         {zoomed && (
//           <div className="mt-10">
//             <p className="text-xl sm:text-2xl md:text-3xl tracking-widest	font-mono">LEADER . CINEPHILE . DEVELOPER</p>
//             <div className="mt-8">
//               <Image src="/image/subject.jpg"  alt="Subject Image" width={500} height={500} />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Top left corner text */}
//       {zoomed && (
//         <div className="absolute top-4 left-4 text-white sm:text-lg md:text-xl lg:text-2xl font-serif">
//           AISHAANI AGARWAL
//         </div>
//       )}

//       {/* Floating elements for depth effect */}
//       {zoomed && (
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
//           <div className="w-full h-full bg-white opacity-0 animate-zoom-in"></div>
//         </div>
//       )}

//       {/* Buttons in top right corner */}
//       {zoomed && (
//         <div className="absolute top-4 right-4 space-x-2 sm:space-x-4">
//           {/* Hamburger menu for small screens */}
//           <div className="sm:hidden">
//             <button onClick={toggleMenu} className="text-white text-2xl font-mono antialiased">
//               {menuOpen ? '✕' : '☰'}
//             </button>
//             {menuOpen && (
//               <div className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-4 z-20">
//                 <Button href="/pages/internships" onClick={toggleMenu}>INTERNSHIPS</Button>
//                 <Button onClick={toggleMenu}>PROJECTS</Button>
//                 <Button onClick={toggleMenu}>EXTRACURRICULARS</Button>
//                 <Button onClick={toggleMenu}>AWARDS</Button>
//                 <Button onClick={toggleMenu}>STUDENT COUNCIL</Button>
//               </div>
//             )}
//           </div>

//           {/* Horizontal buttons for larger screens */}
//           <div className="hidden sm:flex space-x-2 sm:space-x-4">
//             <a href="/internships"><Button>INTERNSHIPS</Button></a>
//             <a href="/project"><Button>PROJECTS</Button></a>
//             <a href="/extracurricular"><Button>EXTRACURRICULARS</Button></a>
//             <a href="/awards"><Button>AWARDS</Button></a>
//             <a href="/studentcouncil"><Button>STUDENT-COUNCIL</Button></a>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }



"use client";

import { useState } from 'react';
import Link from 'next/link.js';
import Image from 'next/image'; // Importing Image from next/image
import Button from './Button.js'; // Adjust the path as necessary
import "./globals.css";

export default function Home() {
  const [zoomed, setZoomed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNameClick = () => {
    setZoomed(true);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-black text-white">
      <main className={`flex-grow flex items-center justify-center transition-all duration-1000 ${zoomed ? 'bg-black' : 'bg-black'}`}>
        {/* Main content */}
        <div className={`flex flex-col items-center justify-center text-center relative z-10 transition-transform duration-1000 ${zoomed ? 'scale-75 mt-16' : 'mt-16'}`}>
          <div onClick={handleNameClick} className="cursor-pointer">
            <p className={`top-4 text-2xl sm:text-5xl md:text-7xl font-Rampart tracking-wide ${zoomed ? 'zoomed-in' : ''}`}>AISHAANI AGARWAL</p>
          </div>
          {zoomed && (
            <div className="mt-10">
              <p className="text-xl sm:text-2xl md:text-3xl tracking-widest font-mono">LEADER . CINEPHILE . DEVELOPER</p>
              <div className="mt-8">
                <Image src="/image/subject.jpg" alt="Subject Image" width={500} height={500} />
              </div>
            </div>
          )}
        </div>

        {/* Top left corner text */}
        {zoomed && (
          <div className="absolute top-4 left-4 text-white sm:text-lg md:text-xl lg:text-2xl font-serif">
            AISHAANI AGARWAL
          </div>
        )}

        {/* Floating elements for depth effect */}
        {zoomed && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-full h-full bg-white opacity-0 animate-zoom-in"></div>
          </div>
        )}

        {/* Buttons in top right corner */}
        {zoomed && (
          <div className="absolute top-4 right-4 space-x-2 sm:space-x-4">
            {/* Hamburger menu for small screens */}
            <div className="sm:hidden">
              <button onClick={toggleMenu} className="text-white text-2xl font-mono antialiased">
                {menuOpen ? '✕' : '☰'}
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
        )}
      </main>
      
      {/* Footer */}
      {zoomed && (
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
        <p>testest</p>
      </div>
    </footer>
    
    
      )}
    </div>
  );
}
