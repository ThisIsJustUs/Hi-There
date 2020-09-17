import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Cards } from '../components/Cards';
import { Signup } from '../components/Signup';
import { Footer } from '../components/Footer';

export default () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Cards />
            <Signup />
            <Footer />
        </div>
    );
};
