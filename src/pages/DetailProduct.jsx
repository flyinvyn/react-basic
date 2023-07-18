import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams, } from 'react-router-dom'
import Style from '../css/Detail.module.css'
import NavbarItem from '../componentPage/NavbarItem';
import Dynamic from '../components/Dynamic';

const DetailProduct = () => {
  const { id_product } = useParams();
  let [product, setProduct] = useState("");
  useEffect(() => {
    axios.get(process.env.REACT_APP_BASEURL +'/'+ id_product)
      .then((res) => {
        setProduct(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id_product])
  return (
    <>
      <NavbarItem />
      <div className="container">
        <nav className="nav mt-5">
          <Link to='/home-page' className="nav-link text-secondary">Home</Link>
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
                    <img src={product.image_product} crossOrigin="anonymous" alt='product' />
                  </div>
                </div>
                <div className="col-6 col-md-8">
                  <h2>{product.name_product}</h2>
                  <p className={Style.paragraf}>{product.shop_name}</p>
                  <h4>{product.rate}</h4>
                  <p className={Style.paragraf}>price</p>
                  <h2>Rp.{product.price}</h2>
                  <h4 className="mt-4">color</h4>
                  <div className="d-flex">
                    <img
                      src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Ellipse%205.png"
                      className="border border-danger rounded-circle rounded-lg"
                      alt=""
                    />
                    <img
                      src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Ellipse%206.png"
                      className=""
                      alt=""
                    />
                    <img
                      src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Ellipse%207.png"
                      className=""
                      alt=""
                    />
                    <img
                      src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Ellipse%208.png"
                      className=""
                      alt=""
                    />
                  </div>
                  <div className="d-flex mt-4">
                    <p className={Style.str1}>Size</p>
                    <p className={Style.str}>Jumlah</p>
                  </div>
                  <div className="flx">
                    <div className="d-flex">
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
                {product.description}
              </p>
            </div>
          </section>
          <section>
            <div className="container">
              <h2>Product review</h2>
              <div className="row">
                <div className="col-3">
                  <div>
                    <h1>{product.rate}<span className="txt">/5</span></h1>
                  </div>
                  <div className='row pl-3'>
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                  </div>
                </div>
                <div className="col-3">
                  <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                  <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                  <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                  <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                  <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/activated.png" alt="" />
                </div>
                <div className="col-3">
                  <div style={{ width: 100, height: 10, borderRadius: 10, backgroundColor: 'green' }}></div>
                </div>
                <div className='col-3'>
                  <p>4</p>
                  <p>0</p>
                  <p>0</p>
                  <p>0</p>
                  <p>0</p>
                </div>
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
            <Dynamic />
          </div>
        </div>
      </section>
    </>
  )
}

export default DetailProduct