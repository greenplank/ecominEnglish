import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import Partner from '../components/Common/Partner';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import About from '../components/BusinessAgency/About';
import Footer from '../components/Layouts/Footer';

class Aabout extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="About Us" 
                    BGImage="bg-one"
                />  

                <AboutContent />

                <About />

                <Partner />

                <CtaAreaTwo />
                
                <Footer/>
            </>
        );
    }
}

export default Aabout;