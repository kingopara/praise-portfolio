import React from 'react';
import './footer.css';
import {FaLinkedin, FaGithub, FaStackOverflow, FaYoutube} from "react-icons/fa"

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-div'>
                <a href="https://github.com/kingopara">
                    <FaGithub style={{ color:'black'}} className='footer-icon'/>
                </a>
            </div>
            <div className='footer-div'>
                <a href="https://www.linkedin.com/in/chigoziri-praise-opara/">
                    <FaLinkedin style={{ color:'#0e76a8'}} className='footer-icon'/>
                </a>
            </div>
            <div className='footer-div'>
                <a href="https://www.stackoverflow.com">
                    <FaStackOverflow style={{ color:'#f48024'}} className='footer-icon'/>
                </a>
            </div>
            <div className='footer-div'>
                <a href="https://www.youtube.com">
                    <FaYoutube style={{ color:'#ff0000'}} className='footer-icon'/>
                </a>
            </div>
        </div>
    )
}

export default Footer
