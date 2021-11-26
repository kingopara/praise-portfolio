import React, {useState} from 'react';
import './Pages.css';
import {validateEmail} from "../../utils/helpers";
// import emailjs
import emailjs from "emailjs-com";
import {FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope} from "react-icons/fa"

function Contact() {

        // hook to manage form data
        const [formState, setFormState] = useState({name: '', email: '', message: ''});
        const [errorMessage, setErrorMessage] = useState('');
        // const {name, email, message} = formState;

        // email function
        function sendEmail(e) {
            e.preventDefault();

            emailjs.sendForm('gmail', 'template_gmail', e.target, 'user_Wuo6aXhtpZanKq8KjcHir')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        }
    
        function handleChange(evt) {
            if (evt.target.name === 'email') {
                const isVal = validateEmail(evt.target.value);
                console.log(isVal);
                if (!isVal) {
                    setErrorMessage('Invalid Email!');
                } else {
                    setErrorMessage('');
                }
            } else {
                if (!evt.target.value.length) {
                    setErrorMessage(`${evt.target.name} required!`);
                } else {
                    setErrorMessage('');
                }
            }
            if (!errorMessage) {
                setFormState({...formState, [evt.target.name]: evt.target.value })
            }
        }

        // to handle the form submit
        // function handleSubmit(evt) {
            // evt.preventDefault();
        // console.log(formState);
        // }


    return (

        <div className="contact-wrapper">
            <h1 className="contact-h1">Contact</h1>
            {/* address section */}
            <div className="address">
                <div className="inner-address">
                    <p>
                    <FaLinkedin style={{ color:'#0e76a8', marginBottom:'6px', fontSize:'32px', padding:'6px'}} />
                        <a href="https://www.linkedin.com/in/chigoziri-praise-opara/">
                            
                            LinkedIn
                        </a>
                    </p>
                </div>
                <div className="inner-address">
                    <p>
                    <FaEnvelope style={{color:'purple', marginBottom:'6px', fontSize:'32px', padding:'6px'}}/>
                        <a href="mailto:cpopara2020@gmail.com">
                            
                            cpopara2020@gmail.com
                        </a>
                    </p>
                </div>
                <div className="inner-address">
                    <p>
                    <FaPhoneAlt style={{color:'green', marginBottom:'6px', fontSize:'32px', padding:'6px'}} /> 
                        <a href="tel:5129551529" >
                            
                                5129551529 
                        </a>
                    </p>
                </div>
                <div className="inner-address">
                    <p>
                    <FaGithub style={{ color:'black', marginBottom:'6px', fontSize:'32px', padding:'6px'}} />
                        <a href="https://github.com/kingopara">
                            
                            GitHub
                        </a>
                    </p>
                </div>
            </div>

            {/* form section */}
            <form className="contact-form" id="contact-form" onSubmit={ sendEmail}>
                <div className="contact-form-title">
                    Leave A Message
                </div>

                <div className="contact-form-input">
                    <div className="form-input">
                        <input type="text" placeholder="Name" onBlur={handleChange} name="name" required/>
                    </div>
                    <div className="form-input">
                        <input type="email" placeholder="Email" name="email" onBlur={handleChange} required/>
                    </div>
                </div>

                <div className="contact-form-message">
                    <div className="form-message">
                        <textarea placeholder="Message" name="message" onBlur={handleChange} required />
                    </div>
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <button className="form-button">
                    Send Message
                </button>

            </form>

        </div>
    )
}

export default Contact