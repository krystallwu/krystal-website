"use client";

import Header from '@/src/app/components/Header';
import Wave from 'react-wavify';
import Image from 'next/image';
import bake from 'public/images/IMG_8256.png';
import valentine from 'public/images/P1010021.png';
import cheetah from 'public/images/IMG_2204.png';
import lion from 'public/images/IMG_2080.png';
import seafood from 'public/images/IMG_0872.png';
import waterfall from 'public/images/IMG_3513.png';
import linkedin from 'public/images/linkedin.png';
import github from 'public/images/github.png';
import email from 'public/images/email.png';
import { useState } from 'react';


const images = [
  { src: bake, alt: "bake", caption: "Freshly baked goodies 🍰", captionPosition: "bottom-3 right-3",
    angle: "rotate-2" },
  { src: cheetah, alt: "cheetah", caption: "On safari 🐆" , captionPosition: "top-2 left-2",
    angle: "-rotate-3"},
  { src: valentine, alt: "valentine", caption: "Valentine’s dinner ❤️", captionPosition: "top-4 right-2",
    angle: "-rotate-2" },
  { src: lion, alt: "lion", caption: "A lion sighting 🦁", captionPosition: "bottom-1 left-3",
    angle: "rotate-1" },
  { src: seafood, alt: "seafood", caption: "Seafood feast 🦐", captionPosition: "top-2 left-5",
    angle: "-rotate-6" },
  { src: waterfall, alt: "waterfall", caption: "At the falls 🌊", captionPosition: "bottom-2 right-4", angle: "rotate-4" }
];


const Home = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="relative overflow-hidden min-h-screen">
      <Header />

      {/* Main content container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        {/* Left: Text */}
        <div>
          <div className="flex gap-2 mb-4">
            <h1 className="text-3xl font-bold">Hi!</h1>
            <h1 className="text-3xl font-bold text-pink-400">I'm Krystal.</h1>
          </div>
          <p className="mb-2">
            I am a Computer Science and FinTech student at Georgia Tech.
            <br /> Please head over to the work section to see my past experiences, skills, and resume. <br />
            But first, let me tell you a bit about myself :D <br />
            Interests: Baking, Traveling, Eating... <br />
          </p>
          <p>
            <span className="text-pink-400">Get in contact with me!</span>
          </p>
        </div>

        {/* Right: Image Gallery */}
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                onMouseEnter={() => {
                  setActiveIndex(null); // reset first
                  requestAnimationFrame(() => setActiveIndex(index)); // retrigger animation
                }}
              >
          <Image
                src={img.src}
                alt={img.alt}
                className="w-50 h-50 object-cover"
              />
              <div className={`absolute ${img.captionPosition} opacity-0 group-hover:opacity-100 transition duration-500`}>
                  <p
                    className={`text-white text-xs ${
                      isActive ? 'scribble' : ''
                    } ${img.angle}`}
                  >
                    {img.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Social Links */}
      <div className="flex justify-center gap-3">
        <a href="https://www.linkedin.com/in/krystallwu/" target="_blank" rel="noopener noreferrer">
          <Image src={linkedin} alt="LinkedIn" width={30} height={30} className="transform transition duration-300 ease-in-out hover:scale-105" />
        </a>
        <a href="https://github.com/krystallwu" target="_blank" rel="noopener noreferrer">
          <Image src={github} alt="GitHub" width={30} height={30} className="transform transition duration-300 ease-in-out hover:scale-105" />
        </a>
        <a href="mailto:krystal.wu.001@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image src={email} alt="Email" width={30} height={30} className="transform transition duration-300 ease-in-out hover:scale-105" />
        </a>
      </div>
      <p>
        <span className="flex justify-center">© 2025 Krystal Wu</span>
      </p>
      {/* Wave Background */}
      <div className="wave-wrapper">
        <Wave
          fill="#FFB6C1"
          paused={false}
          style={{
            position: 'fixed',
            top: '70vh',
            left: 0,
            width: '100%',
            height: '50vh',
            zIndex: -1,
          }}
          options={{
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
