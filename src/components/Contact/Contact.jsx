import React, {useRef} from 'react';
import "./Contact.css";
import {MdOutlineEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs";
import {SiWhatsapp} from "react-icons/si";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <section id={'contact'}>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className={'contact__option-icon'}/>
                        <h4>Email</h4>
                        <h5>yulka1102@gmail.com</h5>
                        <a href="mailto:yulka1102@gmail.com" target={'_blank'} rel="noreferrer">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsMessenger className={'contact__option-icon'}/>
                        <h4>Messenger</h4>
                        <h5>Yuliya Sidarenka</h5>
                        <a href="https://m.me/julia.domoratzkaya" target={'_blank'} rel="noreferrer">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <SiWhatsapp className={'contact__option-icon'}/>
                        <h4>Whatsapp</h4>
                        <h5>+48 792 784 288</h5>
                        <a href="https://api.whatsapp.com/send?phone=+48792784288" target={'_blank'} rel="noreferrer">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name={'name'} placeholder={'Your Full Name'} required={true}/>
                    <input type="email" name={'email'} placeholder={'Your Email'} required={true}/>
                    <textarea name="message" rows="7" placeholder={'Your Message'} required={true}/>
                    <button type={'submit'} className={'btn btn-primary'}>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;