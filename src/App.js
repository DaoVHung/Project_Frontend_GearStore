import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from 'Admin'
import ListProduct from 'user/data/ListProduct'
import ListProductCopy from 'user/data/ListProductCopy'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Home from 'user/components/Home'
import Shop from 'user/components/Shop'
import Book from 'user/components/Book'
import About from 'user/components/About'
import Blog from 'user/components/Blog'
import Cart from 'user/components/Cart'
import CheckOut from 'user/components/CheckOut'


import ProductSingle from 'user/components/ProductSingle'

const App = () => {
    return (
        <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login/*" element={<Admin />}></Route>
                    <Route path="/login/:userName" element={<Admin />}></Route>

                    <Route path="/shop" element={<Shop />}>
                        <Route index element={<ListProduct />}></Route>
                        <Route path="keyboard" element={<ListProductCopy />}></Route>
                        <Route path="mouse" element={<ListProductCopy />}></Route>
                        <Route path="earphone" element={<ListProductCopy />}></Route>
                        <Route path="furniture" element={<ListProductCopy />}></Route>
                        <Route path="screen" element={<ListProductCopy />}></Route>
                    </Route>
                    <Route path="/product_single/:id" element={<ProductSingle/>}></Route>
                    <Route path="/booking" element={<Book />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/cart" element={<Cart />} ></Route>
                    <Route path="/checkout" element={<CheckOut />}></Route>
             </Routes>
        </div>
    )
}

export default App