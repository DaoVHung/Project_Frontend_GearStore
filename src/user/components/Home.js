import { useEffect, useState } from 'react'
import Nav from '../element/Nav'

import Product from '../data/Product'
import { HomeSlider } from 'user/element/HomeSlider'
import Certification from 'user/element/Certification'
import Catelogorys from 'user/element/Catelogorys'
import Footer from 'user/element/Footer'
import Backgroup from 'user/element/Backgroup'
import { useDispatch, useSelector } from 'react-redux'
import { GET_LIST_PRODUCT } from 'action/ActionAuth'
import SweetPagination from 'layouts/panigation/SweetPagination'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'

export default function Home() {
    const { todos, page } = useSelector(state => state.dataProduct)
    useEffect(() => {
        window.scrollTo(30, 1);
    }, [])
    const [currentPageData, setCurrentPageData] = useState(todos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GET_LIST_PRODUCT())
        
    }, [])
    

    const [mesage, setMesage] = useState(false)
    useEffect(() => {
        if (mesage == true) {
            toast("successful order ! Please continue to see other products !")
        }
    }, [mesage])
    return (
        <div class="goto-here">
            <Backgroup />
            <Nav />
            <section id="home-section" className="hero">
                <HomeSlider />
            </section>
            <section className="ftco-section">
                <Certification />
            </section>
            <section className="ftco-section ftco-category ftco-no-pt">
                <Catelogorys />
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center ftco-animate">
                            <span className="subheading">Featured Products</span>
                            <h2 className="mb-4">Our Products</h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {currentPageData.map((todo) => (
                            <Product todo={todo} key={todo.productID} />
                        ))}
                    </div>
                    <div>
                        <SweetPagination
                            currentPageData={setCurrentPageData}
                            dataPerPage={8}
                            getData={todos}
                            navigation={true}
                        >
                        </SweetPagination>
                    </div>
                </div>
            </section>



            <div className="row justify-content-center mb-5 pb-3">
                <div className="col-md-7 heading-section ftco-animate text-center">
                    <span className="subheading">Testimony</span>
                    <h2 className="mb-4">Our satisfied customer says</h2>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated they
                        live in
                    </p>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />



            <section className="ftco-section ftco-partner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm ftco-animate">
                            <a href="#" className="partner">
                                <img
                                    src="images/partner-1.png"
                                    className="img-fluid"
                                    alt="Colorlib Template"
                                />
                            </a>
                        </div>
                        <div className="col-sm ftco-animate">
                            <a href="#" className="partner">
                                <img
                                    src="images/partner-2.png"
                                    className="img-fluid"
                                    alt="Colorlib Template"
                                />
                            </a>
                        </div>
                        <div className="col-sm ftco-animate">
                            <a href="#" className="partner">
                                <img
                                    src="images/partner-3.png"
                                    className="img-fluid"
                                    alt="Colorlib Template"
                                />
                            </a>
                        </div>
                        <div className="col-sm ftco-animate">
                            <a href="#" className="partner">
                                <img
                                    src="images/partner-4.png"
                                    className="img-fluid"
                                    alt="Colorlib Template"
                                />
                            </a>
                        </div>
                        <div className="col-sm ftco-animate">
                            <a href="#" className="partner">
                                <img
                                    src="images/partner-5.png"
                                    className="img-fluid"
                                    alt="Colorlib Template"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}



