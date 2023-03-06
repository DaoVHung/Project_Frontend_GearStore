import React from 'react'
import Backgroup from '../../user/element/Backgroup'
import Nav from 'user/element/Nav'
import { Link, useLocation, useParams } from 'react-router-dom'
import Footer from 'user/element/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListSubImage from 'user/element/ListSubImage'
import { useState } from 'react'
import { margin } from '@mui/system'
import { action_add_to_cart } from 'action/ActionAuth'
import { TextareaAutosize } from '@mui/material'
import { useEffect } from 'react'
import { GET_LIST_POST } from 'constants/constant'
import { GET_LIST_PRODUCT } from 'action/ActionAuth'


export default function ProductSingle() {
  const [quantity, setQuantity] = useState(1)
  const [note, setNote] = useState("")
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'))
  const[userID, setUserID] = useState("")
  useEffect(()=>{
    if(user){
      setUserID(user.userId)
    }else{
      setUserID("")
    }
  },[])

  const product = JSON.parse(localStorage.getItem('product'))

  //Notify
  const [mesage, setMesage] = useState(false)
  useEffect(() => {
    if (mesage == true) {
      toast("Please login to use the service !")
    }
  }, [mesage])

  const [mesage2, setMesage2] = useState(false)
  useEffect(() => {
    if (mesage2 == true) {
      toast("Add to cart complete !")
    }
  }, [mesage2])
  useEffect(() => {
    window.scrollTo(30, 250);
}, [])

  const handleAddToCart = () => {
    if(userID==""){
      setMesage(true)
    }else{
       const data = {
        "userID": userID,
        "note": note,
        "quantity": quantity,
        "productID": product.productID
      }
      console.log("data create cart", data);
      dispatch(action_add_to_cart(data))
      setMesage2(true)
    }   
  }
  return (
    <>
      <img
        style={{ position: "fixed" }}
        width="100%"
        height="100%"

        src="/images/art.png"
        alt="photo" />
      <Nav />

      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: 'url("/images/chris-j-davis-PT_9ux0j-x4-unsplash.jpg")' }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="#">View</a>
                </span>
                <span>Product</span>
              </p>
              <h1 className="mb-0 bread">Product Detail</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">

        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-5 ftco-animate">
              <a
                // href={productDetail.productImg}
                className="image-popup"
              >
                <img
                  src={product.productImg}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </a>
            </div>
            <div className="col-lg-2 mb-5 ftco-animate">
              {
                product.listSub.map((todo) => (
                  // <div className="columnImage">
                  <ListSubImage todo={todo} key={todo.subID} />
                ))
              }
            </div>
            <div className="col-lg-5 product-details pl-md-5 ftco-animate">
              <h3>{product.productName}</h3>
              <div className="rating d-flex">
                <p className="text-left mr-4">
                  <a href="#" className="mr-2">
                    5.0
                  </a>

                </p>
                <p className="text-left mr-4">
                  <a href="#" className="mr-2" style={{ color: "#ffffff" }}>
                    100 <span style={{ color: "#bbb" }}>Rating</span>
                  </a>
                </p>
                <p className="text-left">
                  <a href="#" className="mr-2" style={{ color: "#ffffff" }}>
                    500 <span style={{ color: "#bbb" }}>Sold</span>
                  </a>
                </p>
              </div>
              <p className="price">
                <span>{product.price * ((100 - product.discount) / 100)} $</span>
              </p>
              <p>
                {product.description}
              </p>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="form-group d-flex">
                    <div className="select-wrap">
                      <div className="icon">
                        <span className="ion-ios-arrow-down" />
                      </div>

                    </div>
                  </div>
                </div>
                <div className="w-100" />
                <div className="input-group col-md-6 d-flex mb-3">
                  <p>Quantity :</p>
                  <input type="number" className="form-control input-number cssInputNumber" placeholder="Quantity"
                    defaultValue={quantity}
                    min={1}
                    max={100}
                    onChange={e => setQuantity(e.target.value)} />
                  <span className="input-group-btn ml-2 ">
                  </span>
                  <TextareaAutosize style={{ height: 50 }} placeholder="  Note to shop .."
                    defaultValue={note}
                    onChange={e => setNote(e.target.value)}
                  ></TextareaAutosize>
                </div>
                <div className="w-100" />
              </div>
              <p>
                {/* <button  onClick={handleAddToCart}  className="btn btn-black py-3 px-5" >Add to cart</button> */}
                <Link className="btn btn-black py-3 px-5"
                  onClick={handleAddToCart} >
                  Add to Cart
                </Link>


              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer
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
    </>

  )
}
