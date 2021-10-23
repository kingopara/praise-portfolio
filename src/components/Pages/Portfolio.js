import React from 'react'
import { Projects } from '../Projects';
import Cards from '../Projects/Cards';
import './Pages.css';

function Portfolio() {

    const data = Projects;

    return (
        <div className='portfolio'>
            <h2 className='project-header'>Projects</h2>
            <div>
                {data.map((project) => {
                    return <Cards project={project}/>
                })}
            </div>
        </div>
    )
}

export default Portfolio
