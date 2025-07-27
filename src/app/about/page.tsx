import Wave from 'react-wavify';
import Header from '@/src/app/components/Header';

const About = () => {
  return (
    <div className='mb-8 overflow-hidden'>
      <Header />
      <h1>About Me</h1>
      <p>
        I’m a frontend developer passionate about design systems, accessibility, and performant web apps.
      </p>
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

export default About;
