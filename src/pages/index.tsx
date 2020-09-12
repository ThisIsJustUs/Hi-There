import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Cards } from '../components/Cards';

export default () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Cards />
        </div>
    );
};
