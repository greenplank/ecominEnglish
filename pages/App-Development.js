import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import AppDevelopmentDetailsContent from '../components/Services/AppDevelopmentDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";


class AppDev extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Mobile App Development Services | Ecomin IT Solution</title>
                    <meta name="title" content="Mobile App Development Services | Ecomin IT Solution" />
                    <meta name="description" content="Mobile application development services from Ecomin IT Solution provide custom mobile experiences for mobile devices, wearables, IoT, and augmented reality devices." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="App Development"
                    BGImage="bg-one"
                />

                <AppDevelopmentDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default AppDev;
