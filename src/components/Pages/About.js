import React from 'react';
import './Pages.css';

function About() {
    return (
        <div className='about'>
            <div className='about-text'>
                I'm a Full-Stack Software Engineer with a background in Petroleum Engineering working currently in the (photomask) manufacturing industry. I see Web-development together with Engineering as the closiest thing to magic and thats what caught my attention and interest.
                <br/>
                Come work with me lets make some MAGIC!
            </div>
            <div className='about-img'>
                <img src={require('../../assets/cover/portfolio.jpg').default} className='about-image' />
            </div>
        </div>
    )
}

export default About
