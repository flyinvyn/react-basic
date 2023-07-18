import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const onClick =()=> {
    localStorage.clear();
    window.location.href = '/';
}
  return (
    <>
    <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container">
        <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/blnja.png" alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="hd" onClick={() => navigate('/order')}>
                <img
                  className="mr-4"
                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/cart-1.png"
                  alt="cart"
                />
            </button>
            <button className="hd">
              <img className="mr-4" src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/bell.png" alt="bell" />
            </button>
            <button className="hd">
              <img className="mr-4" src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/mail.png" alt="mail" />
            </button>
            <button className="hd">
              <img
                className="mr-4"onClick={() => navigate('/profile')}
                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/profil.png"
                alt="profil"
              />
            </button>
            <button className='btn btn-danger rounded-pill' onClick={onClick}>Logout</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  </>
  )
}

export default Navbar