import React from 'react'

export default function Certification() {
  return (
    
    <div className="container">
        <div className="row no-gutters ftco-services">
            <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services mb-md-0 mb-4">


                    <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                        <span class="flaticon-shipped"></span>

                    </div>
                    <div className="media-body">
                        <h3 className="heading">Free Shipping</h3>
                        <span>On order over $100</span>
                    </div>
                </div>
            </div>
            <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services mb-md-0 mb-4">
                    <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                        <img
                            // style={{ position: "fixed" }}
                            width="20%"
                            height="50%"
                            src="images/631180.png"
                            alt="" />
                    </div>
                    <div className="media-body">
                        <h3 className="heading">Payment Support</h3>
                        <span>Installment</span>
                    </div>
                </div>
            </div>
            <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services mb-md-0 mb-4">
                    <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                        <span className="flaticon-award" />
                    </div>
                    <div className="media-body">
                        <h3 className="heading">Guarantee</h3>
                        <span>100% Genuine</span>
                    </div>
                </div>
            </div>
            <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services mb-md-0 mb-4">
                    <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                        <span className="flaticon-customer-service" />
                    </div>
                    <div className="media-body">
                        <h3 className="heading">Support</h3>
                        <span>24/7 Support</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
