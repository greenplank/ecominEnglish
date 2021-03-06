import React, { Component } from 'react';
import Link from 'next/link';

class FunFactsTwo extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-100 bg-fcfbfb">
                <div className="container">
                    <div className="section-title">
                        <h2>We always try to understand users' expectations
                        </h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-4 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-checked"></i>
                                <h3>22+</h3>
                                <p>Finished projects
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-4 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-ui-love"></i>
                                <h3>8+</h3>
                                <p>Happy customers
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-4 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-tasks"></i>
                                <h3>5+</h3>
                                <p>Ongoing project
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta-box">
                        <h3>Do you have any questions about us?
                        </h3>
                        <p>Do not hesitate to contact us
                        </p>

                        <Link href="/contact">
                            <a className="btn btn-primary">Contact Us
                            </a>
                        </Link>
                    </div>

                    <div className="map-bg">
                        <img src="/images/map.png" alt="map" />
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFactsTwo;