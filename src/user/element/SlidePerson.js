import React from 'react'
import { OwlCarousel } from 'react-owl-carousel'

export default function SlidePerson() {
    return (
        <div className="row ftco-animate">
            <div className="col-md-12">
                <div className=" owl-carousel">

                    <OwlCarousel className='carousel-testimony owl-theme' loop margin={10} nav>
                        <div className="item">
                            <div className="testimony-wrap p-4 pb-5">
                                <div
                                    className="user-img mb-5"
                                    style={{ backgroundImage: "url(images/person_1.jpg)" }}
                                >
                                    <span className="quote d-flex align-items-center justify-content-center">
                                        <i className="icon-quote-left" />
                                    </span>
                                </div>
                                <div className="text text-center">
                                    <p className="mb-5 pl-4 line">
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind
                                        texts.
                                    </p>
                                    <p className="name">Garreth Smith</p>
                                    <span className="position">Marketing Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimony-wrap p-4 pb-5">
                                <div
                                    className="user-img mb-5"
                                    style={{ backgroundImage: "url(images/person_2.jpg)" }}
                                >
                                    <span className="quote d-flex align-items-center justify-content-center">
                                        <i className="icon-quote-left" />
                                    </span>
                                </div>
                                <div className="text text-center">
                                    <p className="mb-5 pl-4 line">
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind
                                        texts.
                                    </p>
                                    <p className="name">Garreth Smith</p>
                                    <span className="position">Interface Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimony-wrap p-4 pb-5">
                                <div
                                    className="user-img mb-5"
                                    style={{ backgroundImage: "url(images/person_3.jpg)" }}
                                >
                                    <span className="quote d-flex align-items-center justify-content-center">
                                        <i className="icon-quote-left" />
                                    </span>
                                </div>
                                <div className="text text-center">
                                    <p className="mb-5 pl-4 line">
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind
                                        texts.
                                    </p>
                                    <p className="name">Garreth Smith</p>
                                    <span className="position">UI Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimony-wrap p-4 pb-5">
                                <div
                                    className="user-img mb-5"
                                    style={{ backgroundImage: "url(images/person_1.jpg)" }}
                                >
                                    <span className="quote d-flex align-items-center justify-content-center">
                                        <i className="icon-quote-left" />
                                    </span>
                                </div>
                                <div className="text text-center">
                                    <p className="mb-5 pl-4 line">
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind
                                        texts.
                                    </p>
                                    <p className="name">Garreth Smith</p>
                                    <span className="position">Web Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimony-wrap p-4 pb-5">
                                <div
                                    className="user-img mb-5"
                                    style={{ backgroundImage: "url(images/person_1.jpg)" }}
                                >
                                    <span className="quote d-flex align-items-center justify-content-center">
                                        <i className="icon-quote-left" />
                                    </span>
                                </div>
                                <div className="text text-center">
                                    <p className="mb-5 pl-4 line">
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind
                                        texts.
                                    </p>
                                    <p className="name">Garreth Smith</p>
                                    <span className="position">System Analyst</span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>

    )
}
