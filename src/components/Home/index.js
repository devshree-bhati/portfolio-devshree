import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-d.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e', 'v', 's', 'h', 'r', 'e', 'e']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  // useEffect(() => {
  //     return setTimeout(() => {
  //         setLetterClass('text-animate-hover')
  //     }, 4000)
  // }, [])

  const handleDownload = () => {
    const resumeUrl = '/resume.pdf'
    window.open(resumeUrl, '_blank');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timer) // Cleanup function to clear the timeout
  }, [])


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" className="DLogo" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer | Problem Solver</h2>
          <p>Turning ideas into reality, one line of code at a time.</p>
          <div className="button-container">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <button onClick={handleDownload} className="flat-button">
              RESUME
            </button>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
