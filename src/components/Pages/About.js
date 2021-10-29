import React from 'react';
// import Skills from '../Skills';
import './Pages.css';


function About() {
    return (
        <div>
            <div className='about'>
                <div className='about-text'>
                    
                    <p>I'm a Full-Stack Software Engineer with a background in Petroleum Engineering working currently in the (photomask) manufacturing industry.
                    <br/>
                    I see Web-development together with Engineering as the closiest thing to magic and thats what caught my attention and interest.
                    <br/>
                    Come work with me lets make some MAGIC!
                    </p>

                </div>
                
                <div className='about-img'>
                    <img src={require('../../assets/cover/portfolio.jpg').default} className='about-image' alt="profile-img"/>
                </div>
            </div>
            <h3>SKILLS</h3>
                
        </div>
        
    )
}

export default About;

// src/components/
