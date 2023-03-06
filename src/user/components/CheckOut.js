import React from 'react'
import Backgroup from 'user/element/Backgroup'
import Footer from 'user/element/Footer'
import Nav from 'user/element/Nav'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { action_check_out } from 'action/ActionAuth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CheckOut() {
const user = JSON.parse(localStorage.getItem('user'))
const total = localStorage.getItem('total')
const [userCheckout, setUserCheckOut]= useState("")
const dispatch = useDispatch()
useEffect(() => {
  window.scrollTo(30, 1);
}, [])
const [mesage, setMesage] = useState(false)
  useEffect(() => {
    if (mesage == true) {
      toast("successful order ! Please continue to see other products !")
    }
  }, [mesage])

useEffect(()=>{
  if (user) {
    setUserCheckOut(user)
  }else{
    setUserCheckOut("")
  }
},[])
const [note,setNote] = useState("")
const [address, setAddress] =  useState(user.address)
const [email, setEmail] = useState(user.email)
const [fullName,setFullName] = useState(user.fullName)
const [phone, setPhone ] = useState(user.phone)
const [totalAmount, setTotalAmount] = useState(total)

const handleCheckOut = () => {
  const data = {
 "note" : note,
 "userID" : userCheckout.userId,
 "address" : address,
 "email" : email,
 "fullName" : fullName,
 "phone" : phone,
 "totalAmount" : total
}

localStorage.setItem('mesage',true)

dispatch(action_check_out(data))
setMesage(true)
setTotalAmount(0)

}



  return (
    <>
       <Backgroup/>
       <Nav/>

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
       <div
    className="hero-wrap hero-bread"
    style={{ backgroundImage: 'url("images/ai-art-illustration-trippy-psychedelic-astronaut-landscape-2199747-wallhere.com.jpg")' }}
  >
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center">
        <div className="col-md-9 ftco-animate text-center">
          <p className="breadcrumbs">
            <span className="mr-2">
              <a>Home</a>
            </span>{" "}
            <span>Checkout</span>
          </p>
          <h1 className="mb-0 bread">Checkout</h1>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section">
    <form
      action="<%=request.getContextPath()%>/CartServlet?productID=${proDetail.productID}"
      method="post"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 ftco-animate">
            <a
              className="btn btn-primary py-3 px-4"
              
            >
              {" "}
              Buy For You{" "}
            </a>
            <input
              type="submit"
              name="action"
              className="btn btn-black py-3 px-5"
              defaultValue="Buy For Others"
            />
            <br />
            <br />
            <h3 className="mb-4 billing-heading">Billing Details</h3>
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    required=""
                    type="text"
                    className="form-control"
                    name="fullName"
                    defaultValue={userCheckout.fullName}
                    onChange={e => setFullName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-100" />
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label>Street Address</label>
                  <input
                    required=""
                    type="text"
                    className="form-control"
                    name="address"
                    defaultValue={userCheckout.address}
                    onChange={e => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-100" />
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    required=""
                    type="text"
                    className="form-control"
                    name="phone"
                    defaultValue={userCheckout.phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    required=""
                    type="text"
                    className="form-control"
                    name="email"
                    defaultValue={userCheckout.email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-12">
                <div className="form-group mt-4">
                  <div className="radio">
                    <p>If you don't have an account, create one !</p>
                    

                    <Link className="btn btn-primary py-3 px-4" to={'/login'}>Login</Link>
                      
                    
                  </div>
                </div>
              </div>
            </div>
            {/* END */}
          </div>
          <div className="col-xl-5">
            <div className="row mt-5 pt-3">
              <div className="col-md-12 d-flex mb-5">
                <div className="cart-detail cart-total p-3 p-md-4">
                  <h3 className="billing-heading mb-4">Cart Total</h3>
                  <p className="d-flex">
                    <span>Subtotal</span>
                    <span>
                      {totalAmount} $
                    </span>
                  </p>
                  <p className="d-flex">
                    <span>Delivery</span>
                    <span>Free</span>
                  </p>
                  <p className="d-flex">
                    <span>Discount</span>
                    <span>
                     0 $
                    </span>
                    <input
                      type="hidden"
                      name="coupon"
                      defaultValue="${coupon}"
                    />
                  </p>
                  <hr />
                  <p className="d-flex total-price">
                    <span>Total</span>
                    <span>
                      {totalAmount} $
                    </span>
                  </p>
                  <p className="d-flex total-price">
                    <span>Note</span>
                    <input type="text" name="note" placeholder="Note to shop .."
                    onChange={e => setNote(e.target.value)} />

                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="cart-detail p-3 p-md-4">
                  <h3 className="billing-heading mb-4">Payment Method</h3>
                  <div className="form-group">
                    <div className="col-md-12">
                      <div className="radio">
                        <label>
                          <input
                            required=""
                            type="radio"
                            name="optradio"
                            className="mr-2"
                          />{" "}
                          Check Payment
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <div className="checkbox">
                        <label>
                          <input
                            required=""
                            type="checkbox"
                            defaultValue=""
                            className="mr-2"
                          />{" "}
                          I have read and accept the terms and conditions
                        </label>
                      </div>
                    </div>
                  </div>
                  <p></p>
                  <p>
                  <Link className="btn btn-primary py-3 px-4"  onClick={handleCheckOut} >Check Out</Link>
                  </p>
                  <p />
                </div>
              </div>
            </div>
           
          </div>{" "}
          {/* .col-md-8 */}
        </div>
      </div>
    </form>
  </section>{" "}
  <Footer/>
  {/* .section */}
</>

  )
}
