import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from '../../pages/Home'
import Detail from '../../pages/Detail'
import Order from '../../pages/Order'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'
import Product from '../../pages/Product'
import DetailProduct from '../../pages/DetailProduct'
import RequireAuth from '../../components/RequireAuth'
import Category from '../../pages/category/Category'
import Checkout from '../../pages/checkout/Checkout'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/home" replace='true' />} />
      <Route path="/product" element={<RequireAuth><Product/></RequireAuth>} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/home' element={<RequireAuth><Home/></RequireAuth>} />
      <Route path='/order' element={<Order />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product' element={<Product />} />
      <Route path='/category' element={<Category />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/product/:id_product' element={<DetailProduct />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router