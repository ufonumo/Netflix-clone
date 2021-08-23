import React from 'react';
import Features from '../../component/features/Features';
import List from '../../component/list/List';
import Navbar from '../../component/navbar/Navbar';
import "./home.scss"

const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <Features type='series'/>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home
