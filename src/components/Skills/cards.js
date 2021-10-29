import React from 'react';
import './skill.css';

function Cards({skill}) {
    return (
        <div className="skillcard">
            <div className="skillicon">{skill.icon}</div>
            <label className="skill-label">{skill.name}</label>
        </div>
    )
}

export default Cards
