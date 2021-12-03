import React from 'react';
import './cards.css';

function Cards({project}) {
    return (
        <div className='cards'>
            <div className='project-text'>
                <h3 className='project-h3'>{project.title}</h3>
                <div className='project-links'>
                    {project.deployedApp && (
                        <a href={project.deployedApp} className='project-link'>
                            <div className='link-btn'>
                                {/* globe/heroku icon */}
                                DeployedApp
                            </div>
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} className='project-link'>
                            <div className='link-btn'>
                                {/* github logo */}
                                Github
                            </div>
                        </a>
                    )}
                </div>
                <p>{project.description}</p>
                <p className="tech-used">Technologies Used</p>
                <div className="tech">
                    <div className="project-tech">
                        {project.tag1}
                    </div>
                    <div className="project-tech">
                        {project.tag2}
                    </div>
                    <div className="project-tech">
                        {project.tag3}
                    </div>
                    <div className="project-tech">
                        {project.tag4}
                    </div>
                    <div className="project-tech">
                        {project.tag5}
                    </div>
                </div>
            </div>
            <img src={project.image} className='project-img' alt="screenshot"></img>
        </div>
    )
}

export default Cards
