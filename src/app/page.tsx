import Header from '@/src/app/components/Header';
import Wave from 'react-wavify';

const Home = () => {
  return (
    <div className="mb-8 overflow-hidden">
      <Header />
      <h1>Hi! I'm Krystal.</h1>
      <p>I am a Computer Science and FinTech student at Georgia Tech.</p>
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

export default Home;