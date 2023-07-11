import React from 'react'
import '../css/Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
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
                  {/* <a href="./Order.jsx"> */}
                  <img
                    className="mr-4"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/cart-1.png"
                    alt="cart"
                  />
                  {/* </a> */}
                </button>
                <button className="btn btn-danger rounded-pill mr-2" onClick={() => navigate('/login')}>
                  Login
                </button>
                <button className="btn border rounded-pill">
                  <a href="./pages/signup.html">Signup</a>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main className="container">
        <section>
          <div className="container">
            <div className="row">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active col-12">
                    <img
                      src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Card%20Promotion.png"
                      className="w-100"
                      alt="Promotion"
                    />
                  </div>
                  <div className="carousel-item col-12">
                    <img
                      src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Card%20Promotion%202.png"
                      className="w-100"
                      alt="Promotion2"
                    />
                  </div>
                  <div className="carousel-item col-12">
                    <img
                      src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Card%20Promotion.png"
                      className="w-100"
                      alt="Promotion"
                    />
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-target="#carouselExampleControls"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-target="#carouselExampleControls"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 ">
          <>
            <h2 className="ml-3 font-weight-bold">Category</h2>
            <p className="ml-3">What are you currently looking for?</p>
            <div style={{ marginTop: "-80px" }}>
              <div className="container">
                <div className="row">
                  <div
                    id="carouselCategory"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselCategory"
                        data-slide-to={0}
                        className="active"
                      />
                      <li data-target="#carouselCategory" data-slide-to={1} />
                    </ol>
                    <div className="carousel-inner ">
                      <div className="carousel-item active col-md-12">
                        <div className="row">
                          <div className="col-md-3 col-sm-12 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/T-shirt.png"
                                alt="pants"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-12 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/short.png"
                                alt="shorts"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-12 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/jacket.png"
                                alt="jacket"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-12 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/pants.png"
                                alt="shorts"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item col-12">
                        <div className="row">
                          <div className="col-md-3 col-sm-4 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/pants.png"
                                alt="pants"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-4 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/jacket.png"
                                alt="shorts"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-4 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/short.png"
                                alt="t-shirt"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-4 mb-5">
                            <div>
                              <a href="/pages/detail.html">
                                <img
                                  className="category"
                                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/T-shirt.png"
                                  alt="shorts"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-target="#carouselCategory"
                        data-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-target="#carouselCategory"
                        data-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>

        </section>
        <section className="mt-5">
          <h2 className="ml-3 font-weight-bold">New</h2>
          <p className="ml-3">You've never seen before!</p>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <h2 className="ml-3 font-weight-bold">Populer</h2>
          <p className="ml-3">Find Clothes that are you tranding recently!</p>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 m">
                <div className="border rounded product">
                  <img
                    className="w-100"
                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp.100.000.00</h5>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="stars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>

  )
}

export default Home