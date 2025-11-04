import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/Header/LatestNews';
import NavBar from '../Components/NavBar/NavBar';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header>
            <section className='w-11/12 mx-auto my-3 '>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3 '>
                <NavBar></NavBar>
            </nav>
            </header>
            <main> 
                <section className='left_nev'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nev'></section>
            </main>
        </div>
    );
};

export default HomeLayout;