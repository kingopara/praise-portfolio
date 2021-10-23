import React from 'react';
import './home.css';
import Header from '../Header'
import Footer from '../Footer'
import Pages from '../Pages/Pages';

function Home() {
    return (
        <div className='home'>
            <Header/>
            <Pages/>
            <Footer/>
        </div>
    )
}

export default Home
