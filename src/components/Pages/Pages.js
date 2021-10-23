import React from 'react';
import About from './About';
import Contact from './Contact';
import './Pages.css';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Pages() {
    return (
        <div className='pages'>
            <section id='about'>
                <About/>
            </section>
            <section id='portfolio'>
                <Portfolio/>
            </section>
            <section id='contact'>
                <Contact/>
            </section>
            <section id='resume'>
                <Resume/>
            </section>
        </div>
    )
}

export default Pages
