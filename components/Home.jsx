"use client"
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [showCompiling, setShowCompiling] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showCodeSection, setShowCodeSection] = useState(true);

  const codeText = `
const greeting = "Hello there!";
    const introduction = "I'm Aryan Gohil. a dedicated UI/UX Designer hailing from India.";
    const expertise = "My expertise? Crafting captivating, user-friendly websites.";
    const developerImage = "./developer.png";

    console.log(greeting);
    console.log(introduction);
    console.log(expertise);
    console.log(developerImage);`;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === codeText.length) {
        clearInterval(interval);
        setShowCompiling(true);

        setTimeout(() => {
          setShowCompiling(false);
          setShowImage(true);
          setShowCodeSection(false);
        }, 2000);

        return;
      }

      setText(codeText.substring(0, currentIndex + 1));
      currentIndex++;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
        setShowCodeSection(false);
        setShowImage(true);
      } else {
        setShowCodeSection(true);
        setShowImage(false);
      }
    };

    handleResize(); // Call it once to set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="container mx-auto p-4 lg:p-7">
      <div className="flex flex-col gap-10 justify-center text-start pt-5">
        <h1 className="font-bold text-7xl md:text-9xl text-white uppercase stroked-text text-center md:text-center lg:text-start">
          UI-UX Designer
        </h1>

        {showCodeSection && ( // Only render if showCodeSection is true
          <div className="flex flex-col gap-2 px-4">
            <pre>
              <code className="text-base text-white font-DMSans md:text-base max-w-sm lg:max-w-none animated-code-text">{text}</code>
            </pre>
            {showCompiling && <p className="text-white font-Oswald">Compiling...</p>}
          </div>
        )}

        {showImage && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center justify-items-center">
            <div className="flex flex-col items-center lg:items-start gap-3 text-white">
              <h3 className="font-Bayon text-4xl lg:text-7xl">Hello there!</h3>
              <small className="font-DMSans text-center lg:text-start max-w-xl lg:max-w-none text-xl md:text-4xl text-neutral-300">
                I'm Aryan gohil. a dedicated UI/UX Designer hailing from India.
              </small>
              <small className="font-DMSans text-center lg:text-start  max-w-xl lg:max-w-none text-xl md:text-4xl text-neutral-300">
                My expertise? Crafting captivating, user-friendly websites.
              </small>
            </div>

            <div className="overflow-hidden">
              <img src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/rS7zCH1JT424njvgNv8h" alt="" className="w-full object-cover"/>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
