import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from '../../pages/Home'
import Order from '../../pages/Order'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'
import DetailProduct from '../../pages/DetailProduct'
import RequireAuth from '../../components/RequireAuth'
import Category from '../../pages/category/Category'
import Checkout from '../../pages/checkout/Checkout'
import Profile from '../../pages/profile/Profile'
import SellingProduct from '../../pages/SellingProduct'
import HomePage from '../../pages/HomePage'
import ProfileSeller from '../../pages/ProfileSeller'
import ProfileCostumer from '../../pages/ProfileCostumer'
import ProfileCostumerShiping from '../../pages/ProfileCostumerShipping'
import ProfileCostumerOrder from '../../pages/ProfileCostumerOrder'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/home" replace='true' />} />
      <Route path='/profile/:id_product' element={<DetailProduct/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/home/:id_product' element={<DetailProduct/>} />
      <Route path='/home-page' element={<RequireAuth><HomePage/></RequireAuth>} />
      <Route path='/home-page/:id_product' element={<DetailProduct/>} />
      <Route path='/order' element={<Order />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/category' element={<Category />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/profile' element={ <RequireAuth><Profile /></RequireAuth>} />
      <Route path='/profile-seller' element={ <RequireAuth><ProfileSeller /></RequireAuth>} />
      <Route path='/profile-costumer' element={ <RequireAuth><ProfileCostumer /></RequireAuth>} />
      <Route path='/profile-shiping' element={ <RequireAuth><ProfileCostumerShiping /></RequireAuth>} />
      <Route path='/profile-order' element={ <RequireAuth><ProfileCostumerOrder /></RequireAuth>} />
      <Route path='/selling' element={<SellingProduct />} />
      <Route path='/product/:id_product' element={<DetailProduct />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router