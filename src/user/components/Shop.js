import React from 'react'
import Product from '../data/Product'
import Nav from '../element/Nav'
import Footer from '../element/Footer'
import { Link, Outlet } from 'react-router-dom'
import ProductCategory from '../element/ProductCategory'
import Backgroup from 'user/element/Backgroup'
import { useEffect } from 'react'

export default function Shop() {
  useEffect(() => {
    window.scrollTo(30, 1);
}, [])
  return (
    <div class="goto-here">
        <Backgroup/>
      <Nav />
      <div
        className="hero-wrap hero-bread"
        style={{
          backgroundImage: 'url("images/pexels-lucie-liz-3165335.jpg")'
        }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Products</span>
              </p>
              <h1 className="mb-0 bread">Products</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <ProductCategory />
          </div>

          <Outlet />

        </div>
      
      </section>
      <Footer />
    </div>
  )
}
