import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skill from '../components/Skill';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skill></Skill>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;