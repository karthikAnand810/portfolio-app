import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ogc0rxi', 'template_6pw5eoc', formRef.current, 'YCceVujvtLcG9wbIp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                setDone(true)
            });

    }
    return (
        <div className='contact'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 8105330182
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            karthikanand22091999@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            653 Cimmaron Road,Santa Ana-92701
                            California
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            style={{ backgroundColor: darkMode && '#333' }}
                            type="text" placeholder='Enter Your Name'
                            name='user_name' />
                        <input
                            type="text" placeholder='Subject' name='user_subject'
                            style={{ backgroundColor: darkMode && '#333' }} />
                        <input
                            type="text" placeholder='Enter Your Email Address' name='user_email'
                            style={{ backgroundColor: darkMode && '#333' }} />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder='Message'
                            style={{ backgroundColor: darkMode && '#333' }}>
                        </textarea>
                        <button>Submit</button>
                        {done && "Thank you for contacting Us....."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact