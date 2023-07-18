import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Styles from '../css/Home.module.css'

const NavbarHome = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
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
                                        className="input mr-3"
                                        type="search"
                                        placeholder="   Search"
                                        aria-label="Search"
                                    />
                                    <button className="srch">
                                        <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Search%20Glyph.png" alt="" />
                                    </button>
                                </li>
                            </ul>
                            <form className="dplay">
                                <button
                                    type="button"
                                    className="filter"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                >
                                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/filter%201.png" alt="" />
                                </button>
                                <div
                                    className="modal fade"
                                    id="exampleModal"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">
                                                    Filter
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="close"
                                                    data-dismiss="modal"
                                                    aria-label="Close"
                                                >
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div>
                                                    <h5>Colors</h5>
                                                    <button className="color mr-3 mt-3" />
                                                    <button className="color1 mr-3" />
                                                    <button className="color2 mr-3" />
                                                    <button className="color3 mr-3" />
                                                    <button className="color4 mr-3" />
                                                    <button className="color5 mr-3" />
                                                </div>
                                                <hr />
                                                <div className="mt-3">
                                                    <h5>Sizes</h5>
                                                    <button className="color6 mr-3 mt-3">XS</button>
                                                    <button className="color7 mr-3">S</button>
                                                    <button className="color7 mr-3">M</button>
                                                    <button className="color6 mr-3">L</button>
                                                    <button className="color6 mr-3">XL</button>
                                                </div>
                                                <hr />
                                                <div className="mt-3">
                                                    <h5>Category</h5>
                                                    <button className="color8 mr-3 mt-3">All</button>
                                                    <button className="color9 mr-3">Women</button>
                                                    <button className="color9 mr-3">Men</button>
                                                    <button className="color9 mr-3">Boys</button>
                                                    <button className="color9 mr-3">Girls</button>
                                                </div>
                                                <hr />
                                                <div className="mt-3">

                                                    <div class="form-group">
                                                        <label for="exampleFormControlSelect1"><h5>Brand</h5></label>
                                                        <select className="form-control border-0" id="exampleFormControlSelect1">
                                                            <option>adidas Originals, Jack & Jones, s.Oliver</option>
                                                            <option>adidas Originals, Jack & Jones, s.Oliver</option>
                                                            <option>adidas Originals, Jack & Jones, s.Oliver</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* <div class="modal-footer"> */}
                                            <div className="d-flex justify-content-center  align-items-center mt-3 mb-3">
                                                <button
                                                    type="button"
                                                    className="btn border rounded-pill mr-3 "
                                                    data-dismiss="modal"
                                                >
                                                    Discard
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger rounded-pill ml-3"
                                                >
                                                    Apply
                                                </button>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                                <button className="head" type="button" onClick={() => navigate('/order')}>
                                    <img
                                        className="mr-4"
                                        src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/cart-1.png"
                                        alt="cart"
                                    />
                                </button>
                                <button className="btn btn-danger rounded-pill mr-2" type='button' onClick={() => navigate('/login')}>
                                   Login
                                </button>
                                <button className="btn border rounded-pill" onClick={() => navigate('/signup')}>
                                    Signup
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarHome