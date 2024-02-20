import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_uo5h2x9', 'template_lew668l', form.current, 'tqMkWTrO2twR8wc6Q')
            .then(result => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, error => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact">
            <h1 className="contactTitle">Contact Me</h1>
            <span className="contactDesc">
                Please fill out the form below to discuss any work opportunities.
            </span>
            <form
                className="contactForm"
                ref={form}
                onSubmit={sendEmail}
            >
                <input type="text" className="name" placeholder='Your Name' name="from_name" />
                <input type="email" className="email" placeholder='Your Email' name="from_email" />
                <textarea className="message" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
