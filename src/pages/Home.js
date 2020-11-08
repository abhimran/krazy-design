import React from 'react';
import Banner from '../component/Home/Banner';
import Brands from '../component/Home/Brands';
import Experience from '../component/Home/Experience';
import Footer from '../component/Home/Footer';
import Learn from '../component/Home/Learn';
import Stories from '../component/Home/Stories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Experience></Experience>
            <Brands></Brands>
            <Stories></Stories>
            <Learn></Learn>
            <Footer></Footer>
        </div>
    );
};

export default Home;