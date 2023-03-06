import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
export const HomeSlider = () => {
    return (
        <section id="home-section" className="hero">
            <OwlCarousel className='home-slider owl-theme' autoplay={true} dots={true} loop margin={10} nav={false} items={1}>
            <div
                    className="slider-item"
                    style={{
                        backgroundImage:
                            "url(images/black-simple-background-red-computer-headphones-technology-84526-wallhere.com.jpg)"
                            
                    }}
                >
                    <div className="overlay" />
                    <div className="container">
                        <div
                            className="row slider-text justify-content-center align-items-center"
                            data-scrollax-parent="true"
                        >
                            <div className="col-md-12 ftco-animate text-center">
                                <h1 className="mb-2">Gent Maker</h1>
                                <h2 className="subheading mb-4">The best tech store on the market</h2>
                                <p>
                                <Link className="btn btn-primary" to={'/shop'}>View details</Link>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             
             
                <div
                    className="slider-item"
                    style={{
                        backgroundImage:
                            "url(images/20617037_10155505657874871_2495346694590449553_o.jpg)"
                    }}
                >
                    <div className="overlay" />
                    <div className="container">
                        <div
                            className="row slider-text justify-content-center align-items-center"
                            data-scrollax-parent="true"
                        >
                            <div className="col-sm-12 ftco-animate text-center">
                                <h1 className="mb-2">100% Genuine Guaranteed </h1>
                                <h3 className="subheading mb-4">
                                We offer the best product for the price
                                </h3>
                                <p>
                                <Link className="btn btn-primary" to={'/shop'}>View details</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

               



            </OwlCarousel>
        </section>
    )
}
