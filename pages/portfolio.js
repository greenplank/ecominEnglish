import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import PortfolioDetails from '../components/Portfolio/PortfolioDetails';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class Portfolio extends Component {
    render() {
        return (
            <>

                <Head>
                    <title>Portfolio</title>
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Our portfolio"
                    BGImage="bg-three"
                />

                <PortfolioDetails />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default Portfolio;