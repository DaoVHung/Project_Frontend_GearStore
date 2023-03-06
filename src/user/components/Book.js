import React from 'react'
import { useEffect } from 'react'
import Backgroup from 'user/element/Backgroup'
import Footer from 'user/element/Footer'
import Nav from 'user/element/Nav'

export default function Book() {
    useEffect(() => {
        window.scrollTo(30, 1);
    }, [])
    return (
        <>
            <Backgroup />
            <Nav />
            <div
                className="hero-wrap hero-bread"
                style={{ backgroundImage: 'url("images/axville-WcrqKjgMPfI-unsplash.jpg")' }}
            >
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                    <a href="index.html">Home</a>
                                </span>{" "}
                                <span>Contact us</span>
                            </p>
                            <h1 className="mb-0 bread">Book A Setup</h1>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <section className="ftco-section contact-section bg-light">
                <div id="bachkgroub-booking" className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="w-100" />
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p>
                                    <span>
                                        Address: <br />
                                    </span>{" "}
                                    79 Hoang Cau - Dong Da - Ha Noi
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p>
                                    <span>
                                        Phone: <br />
                                    </span>{" "}
                                    <a href="tel://1234567920">+84 343800644</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p>
                                    <span>
                                        Email: <br />
                                    </span>{" "}
                                    <a href="mailto:info@yoursite.com">gentsteak@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p>
                                    <span>
                                        Website <br />
                                    </span>{" "}
                                    <a href="#">GentSteak.Com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-6 order-md-last d-flex">
                            <form action="#" className="bg-white p-5 contact-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Pepper"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="datetime-local"
                                        className="form-control"
                                        placeholder="Date & Time"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name=""
                                        id=""
                                        cols={30}
                                        rows={7}
                                        className="form-control"
                                        placeholder="Message"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        defaultValue="Send Message"
                                        className="btn btn-primary py-3 px-5"
                                    />
                                </div>
                            </form>
                        </div>
                        <div
                            className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
                            style={{ backgroundImage: 'url("images/View_6.jpg")' }}
                        >


                            <iframe width="560" height="315" src="https://www.youtube.com/embed/yBF_IOJHuVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </div>
                    </div>
                </div>
            </section>
            <div/>
            <Footer/>
        </>

    )
}
