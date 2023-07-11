import React from 'react'
import '../css/Detail.css'
import {useNavigate ,Link} from 'react-router-dom'


const Detail = () => {
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
                className="form-control mr-2 input"
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
            <button className="filter">
              <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/filter%201.png" alt="" />
            </button>
            <button className="hdr mr-4" onClick={() => navigate('/order')}>
                <img
                  className="mr-4"
                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/cart-1.png"
                  alt="cart"
                />
            </button>
            <button className="btn btn-danger rounded-pill mr-2">
              <a className="text-light" href="./pages/login.html">
                Login
              </a>
            </button>
            <button className="btn border rounded-pill">
              <a href="./pages/signup.html">Signup</a>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <br />
  <br />
  <br />
  <div className="container">
    <nav className="nav mt-5">
     <Link to='/home' className="nav-link text-secondary">Home</Link>
      <p className="pt-2">&gt;</p>
      <Link to='/category' className="nav-link text-secondary">Category</Link>
      <p className="pt-2">&gt;</p>
      <Link to='/t-shirt' className="nav-link text-secondary">T-shirt</Link>
    </nav>
    <main>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div>
                <img
                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/product%20A-1.png"
                  className="img-thumbnail"
                  alt="..."
                />
              </div>
              <div className="mt-4 d-flex">
                <img
                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/product%20A-2.png"
                  className="ml-2"
                  alt=""
                />
                <img
                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/product%20A-3.png"
                  className="ml-2"
                  alt=""
                />
                <img
                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/product%20A-4.png"
                  className="ml-2"
                  alt=""
                />
                <img
                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/product%20A-5.png"
                  className="ml-2"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6 col-md-8">
              <h2>Baju muslim pria</h2>
              <p>Zalora cloth</p>
              <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="" />
              <p className="mt-4">price</p>
              <h2 className="font-weight-bold">Rp.100.000.00</h2>
              <p className="mt-4 text-dark font-weight-bold">color</p>
              <div className="d-flex">
                <img
                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Ellipse%205.png"
                  className="border border-danger rounded-circle rounded-lg"
                  alt=""
                />
                <img
                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Ellipse%206.png"
                  className="ml-2"
                  alt=""
                />
                <img
                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Ellipse%207.png"
                  className="ml-2"
                  alt=""
                />
                <img
                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Ellipse%208.png"
                  className="ml-2"
                  alt=""
                />
              </div>
              <p className="mt-4 text-dark font-weight-bold">size</p>
              <div className="flx">
                <div className="inn d-flex align-items-center">
                  <div className="mr-4">
                    <button className="button-min d-flex justify-content-center align-items-center">
                      <div />
                    </button>
                  </div>
                  <div className="mr-4">
                    <h5>28</h5>
                  </div>
                  <div className="mr-4">
                    <button className="button-plus d-flex justify-content-center align-items-center">
                      <div>+</div>
                    </button>
                  </div>
                </div>
                <div className="inn d-flex align-items-center">
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
              </div>
              <div className="d-flex mt-5">
                <button className="btn border border-dark rounded-pill mr-3">
                  <a href="../index.html">Chat</a>
                </button>
                <button className="btn border border-dark rounded-pill mr-3">
                  <a href="./order.html">Add bag</a>
                </button>
                <button className="btn btn-danger rounded-pill mr-3 w-50">
                  <a className="text-light" href="./pages/login.html">
                    Buy now
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="col-12 mt-5">
          <h2>Informasi product</h2>
          <h4 className="mt-5">Condition</h4>
          <h4 className="text-danger">New</h4>
          <h4 className="mt-5">Description</h4>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="mt-4">
            {" "}
            Donec non magna rutrum, pellentesque augue eu, sagittis velit.
            Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim
            vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique
            placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec
            ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin
            eu nisl at, ornare suscipit magna.
          </p>
          <p className="mt-4">
            {" "}
            Donec non magna rutrum, pellentesque augue eu, sagittis velit.
            Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim
            vel turpis blandit imperdiet ac ac felis.
          </p>
          <p className="mt-4">
            {" "}
            In ultricies rutrum tempus. Mauris vel molestie orci.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Product review</h2>
          <div className="coll">
            <div className="col">
              <div>
                <h1>
                  5.0<span className="txt">/5</span>{" "}
                </h1>
              </div>
              <div>
                <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
              </div>
            </div>
            <div className="pos d-flex">
              <div className="stars mr-4">
                <div className="d-flex">
                  <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                  <p className="ml-2">5</p>
                </div>
                <div className="d-flex">
                  <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                  <p className="ml-2">4</p>
                </div>
                <div className="d-flex">
                  <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                  <p className="ml-2">3</p>
                </div>
                <div className="d-flex">
                  <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                  <p className="ml-2">2</p>
                </div>
                <div className="d-flex">
                  <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                  <p className="ml-2">1</p>
                </div>
              </div>
              <div className="line"></div>
              <div className="ml-4">
                <p>5</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <img src="../assets/img/Line 38.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  </div>
  <section className="mt-5">
    <div className="container mt-5">
      <h2 className="ml-3 font-weight-bold">You can also like this</h2>
      <p className="ml-3">You've never seen before!</p>
      <div className="row">
        <div className="col-md-3 col-sm-6 m">
          <div className="border rounded product">
            <img className="w-100" src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png" alt="cloth" />
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
            <img className="w-100" src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png" alt="cloth" />
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
            <img className="w-100" src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png" alt="cloth" />
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
            <img className="w-100" src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png" alt="cloth" />
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
            <img className="w-100" src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png" alt="cloth" />
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
            <img className="w-100" src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png" alt="cloth" />
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
            <img className="w-100" src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png" alt="cloth" />
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
            <img className="w-100" src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png" alt="cloth" />
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
</>

  )
}

export default Detail