import Header from '@/src/app/components/Header';
import Image from 'next/image';
import wandersync from 'public/images/wandersync.png';
import hotel from 'public/images/hotel.png';
import mrktmind from 'public/images/mrktmind.png';
import fcf from 'public/images/player.png';
import storeview from 'public/images/store.png';
import portfolio from 'public/images/portfolio.png';


type Project = {
  title: string;
  description: string;
  link: string;
};


const projects = [
  {
    title: 'StoreView',
    description:
      'A web application that calculates impression scores for potential storefront locations using data science!',
    image: storeview, 
    bgColor: 'bg-pink-300',
    link: 'https://github.com/hyeokjinjin/StoreVisualizer',
  },
  {
    title: 'Food Court Fighter',
    description:
      'An interactive web game that showcases the different cuisines of different regions of China!',
    image: fcf,
    bgColor: 'bg-pink-300',
    link: 'https://chinese-game-fawn.vercel.app/'
  },
    {
    title: 'WanderSync',
    description:
      'An Android app that allows users to collaborate and plan travel itineraries with friends and family.',
    image: wandersync, 
    bgColor: 'bg-pink-300',
    link: 'https://github.com/ayhschen/CS2340C_Team23'
  },
  {
    title: 'Hotel Finder',
    description:
      'A vector query engine using Qdrant to find hotels based on user preferences.',
    image: hotel,
    bgColor: 'bg-pink-300',
    link: 'https://github.com/rrhzhang/hotel_finder'
  },
  {
    title: 'mrktmind',
    description:
      'A virtual market that provides users with data on the cheapest times to buy items, curating a homepage tailored to users’ interests.',
    image: mrktmind,
    bgColor: 'bg-pink-300',
    link: 'https://github.com/rrhzhang/mrktmind'
  },
    {
    title: 'Personal Portfolio',
    description:
      'Repository for this personal portfolio website!',
    image: portfolio,
    bgColor: 'bg-pink-300',
    link: 'https://github.com/krystallwu/krystal-website'
  }
];

const Portfolio = () => {
  return (
    <div className='mb-8 overflow-hidden p-4'>
      <Header />
    <section className="px-6">
      <h1 className="text-3xl font-bold text-center mb-4">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 text-white transition-transform transform hover:scale-105 cursor-pointer ${project.bgColor}`}
          >
            <div className="mb-4">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="mt-2 text-sm">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm hover:text-pink-500"
              >
                Learn More
              </a>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Portfolio;
