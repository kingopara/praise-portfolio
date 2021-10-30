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
            <div className="download-btn">
                        <a download href={require('../../assets/resume1.pdf').default}>
                           <FaDownload/> Download My Resume
                        </a>
                    </div>
            <h3>PROFICIENCIES</h3>
            <Skills/>
            <h3>Experience</h3>
            <div className="experience">
                <div className="company">
                    <label className="company-name">University of Texas,Austin</label>
                    <h4>
                        Full Stack Web Developer - Student 
                        <br/>
                        <h5 className="dates">
                            Apr 2021 - Oct 2021
                        </h5>
                    </h4>
                    
                    <h4 className="responsibilities">Responsibilities</h4>
                    <ul>
                        <li>
                            Developed dynamic full stack web applications, websites and installable progressive web applications.
                        </li>
                        <li>
                            Integrated a Frontend using ReactJS to a fully functional Backend application. 
                        </li>
                        <li>
                            Built the Backend of web applications using NodeJS, ExpressJS and MongoDB
                        </li>
                        <li>
                            Created databases for web applications to store customer data for clients using SQL and NoSQL
                        </li>
                        <li>
                            Provided user authentication with bcrypt and/or JWT and also secure checkout processes using stripeJS
                        </li>
                        <li>
                            Used Git version control system and Github cloud-based hosting service to manage and keept track of code history and repositories.
                        </li>
                    </ul>
                </div>
                <div className="company">
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
                </div>
            </div>
        </div>
    )
}

export default Resume
