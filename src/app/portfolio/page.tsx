import Wave from 'react-wavify';
import Header from '@/src/app/components/Header';

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
