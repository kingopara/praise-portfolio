import React, {useState} from 'react';
import './Pages.css';
import {validateEmail} from "../../utils/helpers";

function Contact() {

        // hook to manage form data
        const [formState, setFormState] = useState({name: '', email: '', message: ''});
        const [errorMessage, setErrorMessage] = useState('');
        const {name, email, message} = formState;
    
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
        function handleSubmit(evt) {
            evt.preventDefault();
        // console.log(formState);
        }


    return (
        <section className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="name" className="col-25">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" required className='white-text col-75'/>
                </div>
                <div className="row">
                    <label htmlFor="email" className="col-25">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} required className='white-text col-75'/>
                </div>
                <div className="row">
                    <label htmlFor="message" className="col-25">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange} required className='white-text col-75 text-area-input'/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="row">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Contact
