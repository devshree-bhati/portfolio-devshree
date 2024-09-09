import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer) // Cleanup function to clear the timeout
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm Devshree, a dedicated Frontend Developer with a passion for
            creating responsive and dynamic web applications. With a strong
            foundation in React, Redux, and Angular, I excel in designing
            user-centered experiences that are both functional and visually
            engaging.
          </p>
          <p>
            My journey as a Computer Science and Engineering student has been
            enriched by hands-on internships where I developed professional
            websites, collaborated closely with senior developers, and honed my
            skills in both frontend development and problem-solving. I also have
            a solid grasp of core computer science subjects, which strengthens
            my technical foundation and enhances my approach to complex
            challenges.
          </p>
          <p>
            I thrive on tackling complex algorithmic challenges and actively
            engage in coding contests. By continually pushing the boundaries of
            my problem-solving abilities, I stay at the forefront of
            technological innovation and consistently enhance my skills.
          </p>
          <p>
            Let's connect and collaborate on building efficient, interactive,
            and scalable applications that address real-world problems and drive
            meaningful impact.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJs} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
