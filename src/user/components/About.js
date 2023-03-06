import React from 'react'
import Backgroup from 'user/element/Backgroup'
import Footer from 'user/element/Footer'
import Nav from 'user/element/Nav'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function About() {
    useEffect(() => {
        window.scrollTo(30, 1);
    }, [])
    return (
        <>
            <Backgroup />
            <Nav />
            <div
                className="hero-wrap hero-bread"
                style={{ backgroundImage: 'url("images/florian-olivo-Mf23RF8xArY-unsplash.jpg")' }}
            >
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                    <a href="index.html">Home</a>
                                </span>{" "}
                                <span>About us</span>
                            </p>
                            <h1 className="mb-0 bread">About us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
                            style={{ backgroundImage: 'url("images/View_6.jpg")' }}
                        >
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/TI6BFKrXvu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
                            <div className="heading-section-bold mb-4 mt-md-5">
                                <div className="ml-md-0">
                                    <h2 className="mb-4">
                                        Welcome to Gent Maker  Computer Accessories Store
                                    </h2>
                                </div>
                            </div>
                            <div className="pb-md-5">
                                <p>
                                    We bring you genuine computer products and components, ready to advise you on setting up the most effective working space for you.
                                </p>
                                <p>
                                    It's an extremely attractive gift, let's enjoy them with Gent because you deserve it.
                                </p>
                                <p>
                                    <Link className="btn btn-primary" to={'/shop'}>Go to shop</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
