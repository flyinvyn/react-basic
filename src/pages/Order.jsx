import React, { useEffect, useState } from 'react'
import '../css/Order.css'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'


const Order = () => {
  const [product, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/products/")
            .then((res) => {
                setProducts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    })

  const navigate = useNavigate()
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
            <li className="nav-item ml-2">
              <input
                className="mr-2 input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="srch">
                <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Search%20Glyph.png" alt="" />
              </button>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="filter">
              <a href="./detail.html">
                <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/filter%201.png" alt="" />
              </a>
            </button>
            <button className="hd" onClick={() => navigate('/detail')}>
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
                className="mr-4"
                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/profil.png"
                alt="profil"
              />
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <main className="container">
    <br />
    <br />
    <section className="mt-5 ">
      {" "}
      <br />
      <h2 className="ml-3 font-weight-bold">My bag</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="card bg-light mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <input className="mr-3" type="checkbox" />
                  <div className="d-flex pt-2">
                    <h5 className="card-title mr-2">Select all items</h5>
                    <p className="card-text">(2 items selected)</p>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn bg-light font-weight-bolder text-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-light mb-3 mt-4">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <input className="mr-3" type="checkbox" />
                  <div className="media">
                  <img src={product.image_product} crossOrigin="anonymous" alt='product'/>
                    <div className="media-body mt-3">
                      <h5 className="mt-0">Men's formal suit - Black</h5>
                      <p>Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div className="flx">
                  <div className="inn d-flex align-items-center mr-5">
                    <div className="mr-4">
                      <button className="button-min d-flex justify-content-center align-items-center">
                        <div />
                      </button>
                    </div>
                    <div className="mr-4">
                      <h5>1</h5>
                    </div>
                    <div className="mr-4">
                      <button className="button-plus d-flex justify-content-center align-items-center">
                        <div>+</div>
                      </button>
                    </div>
                  </div>
                  <div className="tl mr-5">
                    <h5>Rp.20.000.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-light mb-3 mt-4">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <input className="mr-3" type="checkbox" />
                  <div className="media">
                    <img
                      src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prduct1.png"
                      className="align-self-center mr-3"
                      alt="..."
                    />
                    <div className="media-body mt-3">
                      <h5 className="mt-0">Men's Jacket jeans</h5>
                      <p>Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div className="flx">
                  <div className="inn1 d-flex align-items-center mr-5">
                    <div className="mr-4">
                      <button className="button-min d-flex justify-content-center align-items-center">
                        <div />
                      </button>
                    </div>
                    <div className="mr-4">
                      <h5>1</h5>
                    </div>
                    <div className="mr-4">
                      <button className="button-plus d-flex justify-content-center align-items-center">
                        <div>+</div>
                      </button>
                    </div>
                  </div>
                  <div className="tl mr-5">
                    <h5>Rp.20.000.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-5 col-sm-12 wdt">
            <div className="card bg-light mb-3">
              {" "}
              <br />
              <h5 className="card-title ml-3">Select all items</h5> <br />
              <div className="d-flex justify-content-between d">
                <p className="ml-3 txs">Total Price</p>
                <h5 className="mr-3 m">Rp.40.00000</h5>
              </div>{" "}
              <br />
              <button className="btn btn-danger ml-3 rounded-pill w-auto mr-3">
                <a className="text-light" href="./checkout.html">
                  Buy
                </a>
              </button>{" "}
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</>

  )
}

export default Order