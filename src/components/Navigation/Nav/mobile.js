import React from 'react';
import './mobile.css';
import {FaRegWindowClose} from "react-icons/fa" 

function Mobile({ menuOpen, setMenuOpen }) {
    return (
        <div className='mobile'>
            <div onClick={() => setMenuOpen(!menuOpen)}  className='close'>
                <FaRegWindowClose/>
            </div>
            <div className='mobile-menu'>
                <div className='page'>
                    <a href='#about'>
                        About
                    </a>
                </div>
                <div className='page'>
                    <a href='#portfolio'>
                        Portfolio
                    </a>
                </div>
                <div className='page'>
                    <a href='#contact'>
                        Contact
                    </a>
                </div>
                <div className='page'>
                    <a href='#resume'>
                        Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile
