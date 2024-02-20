import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <h1 className="contactTitle">Contact Me</h1>
            <span className="contactDesc">
                Please fill out the form below to discuss any work opportunities.
            </span>
            <form className="contactForm">
                <input type="text" className="name" placeholder='Your Name' />
                <input type="email" className="email" placeholder='Your Email' />
                <textarea className="message" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
