import React from 'react';
import './Pages.css';

function About() {
    return (
        <div className='about'>
            <div className='about-text'>
                <h3>About Me</h3>
                I'm a Full-Stack Software Engineer with a background in Petroleum Engineering working currently in the (photomask) manufacturing industry.
                <br/>
                I see Web-development together with Engineering as the closiest thing to magic and thats what caught my attention and interest.
                <br/>
                Come work with me lets make some MAGIC!
            </div>
            <div>
                <h3>Skills</h3>
            </div>
            {/* <div className='about-img'>
                <img src={require('../../assets/cover/portfolio.jpg').default} className='about-image' />
            </div> */}
        </div>
    )
}

export default About
