import Wave from 'react-wavify';
import Header from '@/src/app/components/Header';
import Image from 'next/image';
import linkedin from 'public/images/linkedin.png';
import github from 'public/images/github.png';
import email from 'public/images/email.png';

const About = () => {
  return (
    <div className='mb-8 overflow-hidden'>
      <Header />
      <h1>Work</h1>
      <p>
        I'm a 
      </p>
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

export default About;
