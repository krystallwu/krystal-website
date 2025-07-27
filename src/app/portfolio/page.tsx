// pages/portfolio.tsx
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
    <div style={{ padding: '2rem' }}>
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
    </div>
  );
};

export default Portfolio;
