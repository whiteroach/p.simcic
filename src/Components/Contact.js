import React from 'react'
import ContactForm from './ContactForm'
import Footer from './Footer'
const Contact = () => {
    return (
      <section id='contact' className='d-flex flex-column'>
        <span><h3>Contact</h3></span>
        <ContactForm/>
        <Footer/>
      </section>
    )
}

export default Contact
