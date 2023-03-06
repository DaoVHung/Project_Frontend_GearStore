import React from 'react'
import { Link } from 'react-router-dom'

export default function Ctelogory() {
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-8">
            <div className="row">
                <div className="col-md-6 order-md-last align-items-stretch d-flex">
                    <div
                        className="category-wrap-2 ftco-animate img align-self-stretch d-flex"
                        style={{ backgroundImage: "url(images/black-simple-background-red-computer-headphones-technology-84526-wallhere.com.png)" }}
                    >
                        <div
                            style={{ color: "antiquewhite" }}
                            className="text text-center"
                        >
                            <h2 style={{ color: "antiquewhite" }}>Book a setup</h2>
                            <p style={{ color: "antiquewhite" }}>
                            Prepare products for your room
                            </p>
                            <p>

                            <Link className="btn btn-primary"to={'/booking'}>Book now</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div
                        className="category-wrap ftco-animate img mb-4 d-flex align-items-end"
                        style={{
                            backgroundImage:
                                "url(images/Gearvn_bàn-phím-cơ_-32.jpg)"
                        }}
                    >
                        <div className="text px-3 py-1">
                            <h2 className="mb-0">
                                <a >Keyboard</a>
                            </h2>
                        </div>
                    </div>
                    <div
                        className="category-wrap ftco-animate img d-flex align-items-end"
                        style={{
                            backgroundImage:
                                "url(images/z4098229508186_cc042b140d5ec23ee7a1008708efba38.jpg)"
                        }}
                    >
                        <div className="text px-3 py-1">
                            <h2 className="mb-0">
                                <a>Mouse</a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div
                className="category-wrap ftco-animate img mb-4 d-flex align-items-end"
                style={{ backgroundImage: "url(images/ZRmKg6WzvifZonfnKYzsHc.jpg)" }}
            >
                <div className="text px-3 py-1">
                    <h2 className="mb-0">
                        <a >Gaming Desk</a>
                    </h2>
                </div>
            </div>
            <div
                className="category-wrap ftco-animate img d-flex align-items-end"
                style={{ backgroundImage: "url(images/3000x2000px.png)" }}
            >
                <div className="text px-3 py-1">
                    <h2 className="mb-0">
                        
                        <a >Screen</a>
                    </h2>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
