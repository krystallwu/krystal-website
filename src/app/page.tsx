"use client";

import Header from "@/src/app/components/Header";
import Image from "next/image";
import bake from "public/images/IMG_8256.png";
import valentine from "public/images/P1010021.png";
import cheetah from "public/images/IMG_2204.png";
import lion from "public/images/IMG_2080.png";
import seafood from "public/images/IMG_0872.png";
import waterfall from "public/images/IMG_3513.png";
import { useState } from "react";


const images = [
  { src: bake, alt: "bake", caption: "Hosted dorm cafes 🍰", captionPosition: "bottom-3 right-3",
    angle: "rotate-2" },
  { src: cheetah, alt: "cheetah", caption: "Cheetah spotted 🐆" , captionPosition: "top-2 left-2",
    angle: "-rotate-3"},
  { src: valentine, alt: "valentine", caption: "Galentines in my dorm ❤️", captionPosition: "top-4 right-2",
    angle: "-rotate-2" },
  { src: lion, alt: "lion", caption: "First time safari!", captionPosition: "bottom-1 left-3",
    angle: "rotate-1" },
  { src: seafood, alt: "seafood", caption: "Cheapest Michelin Star", captionPosition: "top-2 left-5",
    angle: "-rotate-6" },
  { src: waterfall, alt: "waterfall", caption: "Victoria Falls, Zimbabwe", captionPosition: "bottom-2 right-4", angle: "rotate-4" }
];


const Home = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="relative overflow-hidden p-4">
      <Header />

      {/* Main content container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Text */}
        <div>
          <div className="flex gap-2 mb-4">
            <h1 className="text-3xl font-bold">Hi!</h1>
            <h1 className="text-3xl font-bold text-pink-400">I&apos;m Krystal.</h1>
          </div>
          <p className="mb-2">
            I am a Computer Science and FinTech student at Georgia Tech with thread concentrations in{" "}
            <span className="text-pink-400">Information-Internetworks</span> and 
            <span className="text-pink-400"> Intelligence</span>. <br />
            In my free time, I love to bake, travel, and eat!
            Hover over the images to learn about some of my favorite memories 😁.
            <br />
            Please head over to the work section to see my past experiences, skills, and education. 
            <br /> In my portfolio section, you can find projects I've worked on.
          </p>
          <div className="flex justify-center mt-4">
          <a
            href="mailto:krystal.wu.001@gmail.com"
            className="justify-center bg-pink-400 text-white font-semibold px-4 py-2 rounded-full hover:bg-pink-500 transition duration-300 shadow-md"
          >
            📧 Email Me
          </a>
          </div>
        </div>

        {/* Right: Image Gallery */}
        <div className="grid grid-cols-3 gap-4 max-w-full overflow-hidden">
          {images.map((img, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="relative group overflow-x-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                onMouseEnter={() => {
                  setActiveIndex(null); // reset first
                  requestAnimationFrame(() => setActiveIndex(index)); // retrigger animation
                }}
              >
          <Image
                src={img.src}
                alt={img.alt}
                className="w-[200px] h-[200px] object-cover"
              />
              <div className={`absolute ${img.captionPosition} opacity-0 group-hover:opacity-100 transition duration-500`}>
                  <p
                    className={`text-white text-m ${img.angle} scribble-font ${
                      isActive ? "typewriter" : ""
                    }`}
                  >
                    {img.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
