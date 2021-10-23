import React, { useState } from 'react'
import Mobile from './Nav/mobile'
import Web from './Nav/web'
import { FaBars } from "react-icons/fa";
import './nav.css';

function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className='nav'>
            <div className='w-m'>
                <Web/>
            </div>
            <div className='m-m'>
                <div onClick={() => setMobileOpen(!mobileOpen)} className='icon'>
                    <FaBars/>
                </div>
                {mobileOpen && <Mobile mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />}
            </div>
        </div>
    )
}

export default Navigation

