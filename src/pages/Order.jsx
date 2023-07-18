import React, { useEffect, useState } from 'react'
import '../css/Order.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import NavbarItem from '../componentPage/NavbarItem'


const Order = () => {
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
      <main className="container">

      
        <br />
        <br />
        {/* {products.map((product) => ( */}
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
                        <img src='http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prduct-same.png' alt='product' />
                        <div className="media-body mt-3 pl-3">
                          <h5 className="mt-0">{product.name_product}</h5>
                          <p>Zalora </p>
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
                          <h5 className="mt-0">Men's  jeans</h5>
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
                    <Link to={'/checkout'} className="text-light">Buy</Link>
                  </button>{" "}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ))} */}
      </main>
    </>

  )
}

export default Order