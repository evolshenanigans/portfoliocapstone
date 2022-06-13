import React from 'react'
import './portfolio.css'
import IMG1 from '../../images/initaldSS.JPG'
import IMG2 from '../../images/avt2.JPG'
import IMG3 from '../../images/cryptoss.JPG'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Initial D API',
    github: 'https://github.com/evolshenanigans/weekend-project-6',
    demo: 'https://initiald-inventory.herokuapp.com/'
    },
  {
    id:2,
    image: IMG2,
    title: 'This Portfolio',
    github: 'https://github.com/evolshenanigans/portfoliocapstone.git',
    demo: '#'
    },
  {
    id:3,
    image: IMG3,
    title: 'Crypto Tracker',
    github: 'https://github.com/evolshenanigans/capstone',
    demo: 'https://cryptotracker-89623.web.app/'
    },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio