import React from 'react';
import './Pages.css';
import Skills from '../Skills';
import {FaDownload } from "react-icons/fa"

function Resume() {

    return (
        <div className="resume">
            <h1 className="resume-title">
                Resume
            </h1>
            
            <h3>PROFICIENCIES</h3>
            
            <Skills/>

            <div className="download-btn">
                <a download href={require('../../assets/fullStack11.pdf').default}>
                    <FaDownload/> Download My Resume
                </a>
            </div>

            <h3>Experience</h3>
            <div className="experience">
                <div className="company">
                    <label className="company-name">Full Stack Web Developer</label>
                    
                    {/* <h4 className="responsibilities"></h4> */}
                    <ul>
                        <li>
                            Develope dynamic full stack web applications, websites and installable progressive web applications.
                        </li>
                        <li>
                            Integrate Frontend using ReactJS to a fully functional Backend application. 
                        </li>
                        <li>
                            Build the Backend of web applications using NodeJS, ExpressJS and MongoDB
                        </li>
                        <li>
                            Create databases for web applications to store customer data for clients using MySQL and NoSQL
                        </li>
                        <li>
                            Provide user authentication with bcrypt and/or JWT and also secure checkout processes using stripeJS
                        </li>
                        <li>
                            Use Git version control system and Github cloud-based hosting service to manage and keep track of code history and repositories.
                        </li>
                    </ul>
                </div>
                {/* <div className="company">
                    <label className="company-name">Toppan Photomask Round Rock</label>
                    <h4>
                        Process Technician II
                        <br/>
                        <h5 className="dates">
                            Nov 2018 - Present
                        </h5>
                    </h4>
                    <h4 className="responsibilities">Responsibilities</h4>
                    <ul>
                        <li>
                            Transfer, encrypt and decrypt customer data from a secure database into the photomask for production.
                        </li>
                        <li>
                            Work with software programs such as kopec, offset, gppe and d2d programs to decrypt and transfer customer data.
                        </li>
                        <li>
                            Use KLA inspection tools to Inspect the finished products for unresolved data, defects or contamination to maintain Quality Assurance.
                        </li>
                        <li>
                            Communicate with Engineers, Management, Supervisors and other colleagues on new arising issues and possible solutions.
                        </li>
                        <li>
                            Troubleshooting operations and tools for more effective operation.
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default Resume
