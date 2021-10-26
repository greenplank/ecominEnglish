import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import SocialMediaDetailsContent from '../components/Services/SocialMediaDetailsContent';
import SocialMediaDetailsContent1 from '../components/Services/SocialMediaDetailsContent1';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class SocialMediaMarketing extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Social Media Marketing" 
                    BGImage="bg-one"
                />  

                <SocialMediaDetailsContent />

                <SocialMediaDetailsContent1/>

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default SocialMediaMarketing;