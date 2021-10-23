import React from 'react';
import './web.css';

function Web() {
    return (
        <div className='web-menu'>
            <div className='pages'>
                <a href='#about'>
                    About
                </a>
            </div>
            <div className='pages'>
                <a href='#portfolio'>
                    Portfolio
                </a>
            </div>
            <div className='pages'>
                <a href='#contact'>
                    Contact
                </a>
            </div>
            <div className='pages'>
                <a href='#resume'>
                    Resume
                </a>
            </div>
        </div>
    )
}

export default Web
