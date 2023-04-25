import * as React from 'react';
import Navbar from './components/NavBar';
import './style.css';
import Confett2 from './components/confetti/confetti1';
import Particle from './components/confetti/confetti2';
import Particle1 from './components/confetti/particale';

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Particle /> */}
      <div className='confetti'>
      <Confett2/>

      </div>
      {/* <Particle1/> */}
    </div>
  );
}
