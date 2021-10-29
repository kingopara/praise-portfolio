import React from 'react';
import './skill.css';

function skillCard({skill}) {
    return (
        <div className="">
            <div className="skillicon">{skill.icon}</div>
            <label className="skilllabel">{skill.name}</label>
        </div>
    )
}

export default skillCard;
