import React from 'react';
import './skill.css';
// import skillCard from './skillCard';
import { skillList } from './skillList';
import Cards from './cards';

function Skills() {

    // import skills list
    const data = skillList;

    return (
        <div className="skills">
            {/* <label>MERN Stack</label> */}
            <div className="skill-card">
                {data.map((item) => {
                    return (
                        <div className="skill-type">
                            <label className="skill-header">{item.type}</label>
                            <div className="skill-list">{item.list.map((skill) => {
                                return (
                                    // <skillCard skills={skill}></skillCard>
                                    <Cards skill={skill} />
                                )
                            })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills;
