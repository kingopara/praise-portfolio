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
            </div>
            <img src={project.image} className='project-img'></img>
        </div>
    )
}

export default Cards
