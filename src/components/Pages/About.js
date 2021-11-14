import React from 'react';
// import Skills from '../Skills';
import './Pages.css';


function About() {
    return (
        <div className="bg">
            <div className='about'>
                <div className='about-text'>
                    
                    <p>
                    I'm a Full Stack Web Developer with a background in Petroleum Engineering with acquired knowledge and skills across multiple industries including the Semiconductor, Oil and Gas and safety. 
                    Earned a certificate in Full Stack Web Development from the University of Texas, Austin with proficiency in the MERN Stack.
                    <br/> 
                    Recognized and awarded for critical thinking and time management after turning down the time of a tool into maximizing product output to meet customer requirements and also Awarded excellence in execution for contributing to the completion of the Enugu-Makurdi Pipeline project.
                    <br/>
                    Always had a passion for creativity and problem solving and being a full stack web developer brings all that to life. 
                    My effective communication with my goal oriented and critical thinking nature combined with my acquired knowledge and skills, excited me to build better experiences on the web.
                    <br/>
                    I see Web-development together with Engineering as the closiest thing to magic and thats what caught my attention and interest.
                    Work with me lets make some MAGIC!
                    </p>
                </div>
                
                <div className='about-img'>
                    <img src={require('../../assets/cover/B&WPIC.jpg').default} className='about-image' alt="profile-img"/>
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
                        Bootstrap
                    </div>
                    <div className="about-skills">
                        jQuery
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
                        Web APIs
                    </div>
                    <div className="about-skills">
                        Third-Party APIs
                    </div>
                    <div className="about-skills">
                        Server-Side APIs
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
                    <div className="about-skills">
                        TDD
                    </div>
                    <div className="about-skills">
                        OOP
                    </div>
                    <div className="about-skills">
                        JWT
                    </div>
                    <div className="about-skills">
                        Auth
                    </div>
                    <div className="about-skills">
                        ORM
                    </div>
                    <div className="about-skills">
                        MVC
                    </div>
                    <div className="about-skills">
                        State
                    </div>
                </div>
        </div>    
    )
}

export default About;

// src/components/
