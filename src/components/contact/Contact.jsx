import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r9ggjwf', 'template_ipfnrio', form.current, 'JNtSVHLb6shIaY5wU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>gjgutierrez91@gmail.com</h5>
            <a href="mailto:gjgutierrez91@gmail.com" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="YOUR FULL NAME" required />
          <input type="email" name="email" placeholder="YOUR EMAIL" required />
          <textarea name="message" rows="17" placeholder="YOUR MESSAGE" required ></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact