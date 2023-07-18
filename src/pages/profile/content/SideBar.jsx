import React from 'react'
import Style from '../../../css/Profile.module.css'
import { Link } from 'react-router-dom'


const SideBar = () => {
  return (
    <>
      <div className={Style.sidebar}>
        <div className={Style.side}>
          <img className={Style.mg} src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/christian-buehner-DItYlc26zVI-unsplash%201.png" alt="" />
          <div className={Style.bar}>
            <h5>Alfin</h5>
            <div className={Style.br}>
              <img className={Style.mg1} src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/edit%20(1)%201.svg" alt="" />
              <p className='ml-2'>Ubah profil</p>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className={Style.hom}>
            <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/home%20(2)%201.png" className='mt-2' alt="" />
          </div>
          <div className="mt-3">
          <Link to={'/profile-seller'} className='text-dark mt-5 ml-3'>Store</Link>
          </div>
        </div>
        <div className="d-flex">
          <div className={Style.hom1}>
          <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/package%201.png" className='mt-2' alt="" />
          </div>
            <Link to={'/profile'} className='text-dark mt-4 ml-3'>Product</Link>
        </div>
        <div className="d-flex">
        <div className={Style.hom3}>
          </div>
          <Link to={'/selling'} className='text-dark mt-4 ml-3'>Selling product</Link>
        </div>
        <div className="d-flex">
          <div className={Style.hom2}>
          <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/shopping-cart%20(3)%201.png" className='mt-2' alt="" />
          </div>
          <div className="mt-3">
          <Link to={'/selling'} className='text-dark ml-3'>Order</Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default SideBar