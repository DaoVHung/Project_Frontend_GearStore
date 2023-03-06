import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GET_LIST_PRODUCT } from 'action/ActionAuth'
import { action_get_cart } from 'action/ActionAuth'
import { indexof } from 'stylis'
import { action_get_list_cart_success } from 'action/ActionAuth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Nav() {
  // const userName = useSelector(state => state.logUserName)
  const user = JSON.parse(localStorage.getItem('user'))
  const [userName, setUserName] = useState("")
  // const[button,setBotton] = useState(<Link onClick={handleGetALlAgain}  className="nav-link" to={'/login'}>Login</Link>)
  useEffect(() => {
    if (user) {
      dispatch(action_get_cart(user.userId))
      setUserName(user.fullName)
    } else {
      dispatch(action_get_list_cart_success([],'GET_LIST_STATE'))
      setUserName("")
    }
  }, [])


  const dispatch = useDispatch()
  const { carts, quantity } = useSelector(state => state.dataOrder)
  const handleGetALlAgain = () => {
    dispatch(GET_LIST_PRODUCT())
  }
  const handleLogout = () => {
     localStorage.removeItem('user');
     localStorage.removeItem('total')
    dispatch(GET_LIST_PRODUCT())
   

  }


  const [button, setBotton] = useState(<Link onClick={handleGetALlAgain} className="nav-link" to={'/login'}>Login</Link>)
  useEffect(() => {
    if (user) {
      setBotton(<Link onClick={handleLogout} className="nav-link" to={'/login'}>Log-out</Link>)
    } else {
      setBotton(<Link onClick={handleGetALlAgain} className="nav-link" to={'/login'}>Log-in</Link>)
    }
  }, [])

  return (
    <div>


      <div className="py-1 bg-primary">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-phone2" />
                  </div>
                  <span className="text">+84 343800644</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane" />
                  </div>
                  <span className="text">gentmaker.gear@email.com</span>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                  <span className="text">
                    3-5 Business days delivery &amp; Free Returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <Link className="navbar-brand" to={'/'}>Gent Maker</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <p className="nav-link" > {userName} </p>
              </li>
              <li>
                <p className="nav-link" >  </p>
              </li>
              <li className="nav-item active">
                <Link onClick={handleGetALlAgain} className="nav-link" to={'/'}>Home</Link>
              </li>
              <li className="nav-item ">
                <Link onClick={handleGetALlAgain} className="nav-link" to={'/shop'}>Shop</Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleGetALlAgain} className="nav-link" to={'/booking'}>Book A Setup</Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleGetALlAgain} className="nav-link" to={'/about'}>About</Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleGetALlAgain} className="nav-link" to={'/blog'}>Blog</Link>
              </li>
              <li className="nav-item">
                {button}
              </li>

              <li onClick={handleGetALlAgain} className="nav-item cta cta-colored">
                <Link className="nav-link" to={'/cart'}><span className="icon-shopping_cart" />
                  [{quantity}]</Link>
              </li>
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
