import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Josh</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://linkedin.com/in/gjgutierrez"><BsLinkedin/></a>
        <a href="https://github.com/evolshenanigans"><BsGithub/></a>
        <a href="https://instagram.com/juhyash"><BsInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer