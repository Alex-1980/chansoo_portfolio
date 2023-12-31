import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['C', 'h', 'a', 'n', 's', 'o', 'o'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _12`}>'m&nbsp;</span>
            <AnimatedLetters letterClass={letterClass}
              strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass}
              strArray={jobArray} idx={22} />
          </h1>
          <h2>Full-stack Developer</h2>
          <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
      </div>
      <Loader type='pacman' />
    </>
  );
}

