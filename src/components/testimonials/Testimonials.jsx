import React from 'react'
import './testimonials.css'
import AVTR1 from '../../images/avt.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="avtr1" />
            </div>
            <h5 className='client_name'>-MY MOM-</h5>
            <small className="client_review">
              Hardest working Developer I know!
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials