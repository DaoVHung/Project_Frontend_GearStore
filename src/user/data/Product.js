import { action_add_to_cart } from 'action/ActionAuth'
import { action_getProductDetail } from 'action/ActionAuth'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Product(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    productID,
    productName,
    catalog,
    price,
    productStatus,
    discount,
    description,
    productImg,
    listSub,
  } = props.todo

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

  const user = JSON.parse(localStorage.getItem('user'))
  const[userID, setUserID] = useState("")
  useEffect(()=>{
    if(user){
      setUserID(user.userId)
    }else{
      setUserID("")
    }
  },[])

  const handleAddToCart = ()=> {
    if(userID==""){
         setMesage(true)
       }else{
          const data = {
           "userID": userID,
           "note": "",
           "quantity": 1,
           "productID":productID
         }
         console.log("data create cart", data);
         dispatch(action_add_to_cart(data))
         setMesage2(true)
       }   
     }

 

  const data = {
    "productID" : productID,
    "productImg" : productImg,
    "productName" : productName,
    "price" : price,
    "discount" : discount,
    "listSub" : listSub,
    "description":description
  }

  const hanDleSave = () =>{
    localStorage.setItem('product', JSON.stringify(data));
  }

 

  return (
    <div className="col-md-6 col-lg-3 ftco-animate">
      <div className="product">
        <a  className="img-prod">
          <img
            className="img-fluid"
            src={productImg}
            alt="Colorlib Template"
          />
          <span className="status">{discount} %</span>
          <div className="overlay" />
        </a>
        <div className="text py-3 pb-4 px-3 text-center">
          <h3>
            <a >{productName}</a>
          </h3>
          <div className="d-flex">
            <div className="pricing">
              <p className="price">
                <span className="mr-2 price-dc">{price} $</span>
                <span className="price-sale">{price * ((100 - discount) / 100)} $</span>
              </p>
            </div>
          </div>
          <div className="bottom-area d-flex px-3">
            <div className="m-auto d-flex">
            
              <NavLink to={`/product_single/${productID}`} onClick={hanDleSave} className="add-to-cart d-flex justify-content-center align-items-center text-center" ><span>
                <i className="ion-ios-menu" />
              </span></NavLink>
            
              <a
                onClick={handleAddToCart}
                className="buy-now d-flex justify-content-center align-items-center mx-1"
              >
                <span>
                  <i className="ion-ios-cart" />
                </span>
              </a>
              <a
               
                className="heart d-flex justify-content-center align-items-center "
              ><ToastContainer
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
                <span>
                  <i className="ion-ios-heart" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
