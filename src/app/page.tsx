import Header from '@/src/app/components/Header';
import Wave from 'react-wavify';
import Image from 'next/image';
import bake from 'public/images/IMG_8256.png';
import valentine from 'public/images/P1010021.png';
import cheetah from 'public/images/IMG_2204.png';
import lion from 'public/images/IMG_2080.png';
import seafood from 'public/images/IMG_0872.png';
import waterfall from 'public/images/IMG_3513.png';

const images = [
  { src: bake, alt: "bake", caption: "Freshly baked goodies 🍰" },
  { src: cheetah, alt: "cheetah", caption: "On safari 🐆" },
  { src: valentine, alt: "valentine", caption: "Valentine’s dinner ❤️" },
  { src: lion, alt: "lion", caption: "A lion sighting 🦁" },
  { src: seafood, alt: "seafood", caption: "Seafood feast 🦐" },
  { src: waterfall, alt: "waterfall", caption: "At the falls 🌊" }
];


const Home = () => {
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
          </p>
          <p>
            Interests: Baking, Traveling, Eating... <br />
            Check out some of my recent bakes and travels :P
          </p>
        </div>

        {/* Right: Image Gallery */}
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative group overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
              <Image
                src={img.src}
                alt={img.alt}
                className="w-50 h-50 object-cover"
              />
              <div className="absolute bottom-1 left-1 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-xs p-1 rotate-[-3deg] group-hover:scribble">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Background */}
      <div className="wave-wrapper">
        <Wave
          fill="#FFB6C1"
          paused={false}
          style={{
            position: 'fixed',
            top: '50vh',
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
