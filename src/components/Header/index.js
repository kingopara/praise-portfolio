import React from 'react';
import Navigation from '../Navigation';
import './header.css';

function Header() {
    return (
        <div className='header'>
            <div className='head'>
                Praise Opara
            </div>
            <div>
                <Navigation/>
            </div>
        </div>
    )
}

export default Header;