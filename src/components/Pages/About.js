import React from 'react';
import Skills from '../Skills';
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
                    <img src={require('../../assets/cover/pic2.jpg').default} className='about-image' alt="profile-img"/>
                </div>
            </div>
            <h3>SKILLS</h3>
                {/* <Skills/> */}
                <div className="about-skill">
                    <div className="about-skills">
                        HTML
                    </div>
                    <div className="about-skills">
                        CSS
                    </div>
                    <div className="about-skills">
                        JavaScript
                    </div>
                    <div className="about-skills">
                        ReactJS
                    </div>
                    <div className="about-skills">
                        ExpressJS
                    </div>
                    <div className="about-skills">
                        NodeJS
                    </div>
                    <div className="about-skills">
                        MongoDB
                    </div>
                    <div className="about-skills">
                        Handlebars
                    </div>
                    <div className="about-skills">
                        RESTful API
                    </div>
                    <div className="about-skills">
                        GraphQL
                    </div>
                    <div className="about-skills">
                        SQL
                    </div>
                    <div className="about-skills">
                        NoSQL
                    </div>
                    <div className="about-skills">
                        Git
                    </div>
                    <div className="about-skills">
                        GitHub
                    </div>
                    <div className="about-skills">
                        PWA
                    </div>
                    <div className="about-skills">
                        CMS
                    </div>
                </div>
        </div>
        
    )
}

export default About;

// src/components/
