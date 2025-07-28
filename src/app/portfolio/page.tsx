import Wave from 'react-wavify';
import Header from '@/src/app/components/Header';
import Image from 'next/image';
import linkedin from 'public/images/linkedin.png';
import github from 'public/images/github.png';
import email from 'public/images/email.png';

type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: 'Weather App',
    description: 'A responsive app using OpenWeather API and TypeScript.',
    link: 'https://example.com/weather'
  },
  {
    title: 'Personal Portfolio',
    description: 'My personal site built with Next.js and Tailwind CSS.',
    link: 'https://example.com/portfolio'
  }
];

const Portfolio = () => {
  return (
    <div className='mb-8 overflow-hidden'>
      <Header />
      <h1>My Work</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
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
          zIndex: -1          
        }}
        options={{
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
        />
      </div>
    </div>
  );
};

export default Portfolio;
