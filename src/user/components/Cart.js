import React, { useState } from 'react'
import Backgroup from 'user/element/Backgroup'
import Footer from 'user/element/Footer'
import Nav from 'user/element/Nav'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { action_get_cart } from 'action/ActionAuth'
import CartItem from 'user/data/CartItem'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Cart() {
  const [notify, setNotify] = useState(false)
  useEffect(() => {
    if (notify == true) {
      toast(" Confirm Succses  !")
    }
  }, [notify])
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(300, 1);
  }, [])
  // const { carts } = useSelector(state => state.dataOrder || [])
  const { carts } = useSelector(state => state.dataOrder)
  // const [listCart, setListCart] = useState(carts || [])

  const dispatch = useDispatch()
  const users = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    if (users) {
      dispatch(action_get_cart(users.userId))
    } else {
      navigate("/login")
    }
  }, [])

  const [button, setButton] = useState(true)
  const totalAmount = localStorage.getItem('total')
  useEffect(() => {
    if (carts.length != 0) {
      setButton(true)
    } else {
     
      setButton(false)
    }
  }, [])
  return (
    <>
      <Backgroup />
      <Nav />
      {/* END nav */}
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: 'url("images/Purple Gradient Quotes Gaming desktop backgrounds wallpaper.png")' }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a >Home</a>
                </span>{" "}
                <span>Cart</span>
              </p>
              <h1 className="mb-0 bread">My Cart</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center, pro">
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th id="poduct-name">Product name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th >Total amount</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((todo) => (

                      <CartItem todo={todo} key={todo.detailId} />

                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
              <div className="cart-total mb-3">
                <h3>Coupon Code</h3>
                <p>Enter your coupon code if you have one</p>
                <form action="#" className="info">
                  <div className="form-group">
                    <label htmlFor="">Coupon code</label>
                    <input
                      type="text"
                      className="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                </form>
              </div>
              <p>
                <a className="btn btn-primary py-3 px-4">
                  Apply Coupon
                </a>
              </p>
            </div>
            <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
              <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span> {totalAmount}  $</span>
                </p>
                <p className="d-flex">
                  <span>Delivery</span>
                  <span>$ 0.00</span>
                </p>
                <p className="d-flex">
                  <span>Discount</span>
                  <span>0.00</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>{totalAmount}  $</span>
                </p>
              </div>
              <p>
                {button ? <Link className="btn btn-primary py-3 px-4" to={'/checkout'}>Check out</Link> : ""}

              </p>
            </div>
          </div>
        </div> <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </section>
      <Footer />
    </>

  )
}
