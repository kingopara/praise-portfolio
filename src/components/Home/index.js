import React from 'react';
import './home.css';
import Header from '../Header'
import Footer from '../Footer'
// import Navigation from '../Navigation'
import Projects from '../Projects'

function Home() {
    return (
        <div className='home'>
            <Header/>
            {/* <Navigation/> */}
            <Projects/>
            <Footer/>
        </div>
    )
}

export default Home
