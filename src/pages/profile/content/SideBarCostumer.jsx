import React from 'react'
import Style from '../../../css/Profile.module.css'
import { Link } from 'react-router-dom'


const SideBarCostumer = () => {
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
          <Link to={'/profile-costumer'} className='text-dark mt-5 ml-3'>My account</Link>
          </div>
        </div>
        <div className="d-flex">
          <div className={Style.hom1}>
          <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/map-pin%20(3)%201.png" className='mt-2' alt="" />
          </div>
            <Link to={'/profile-shiping'} className='text-dark mt-4 ml-3'>Shiping adress</Link>
        </div>
        <div className="d-flex">
          <div className={Style.hom2}>
          <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/clipboard%201.png" className='mt-2' alt="" />
          </div>
          <div className="mt-3">
          <Link to={'/profile-order'} className='text-dark ml-3'>My order</Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default SideBarCostumer