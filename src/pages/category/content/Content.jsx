import React from 'react'
import { Link } from 'react-router-dom'
import Styles from '../Category.module.css'



const Content = () => {
    return (
        <>
            <div className="container">
                <nav className="nav mt-5 mb-5">
                    <Link to='/home-page' className="nav-link text-secondary">Home</Link>
                    <p className="pt-2">&gt;</p>
                    <Link to='/category' className="nav-link text-secondary">Category</Link>
                    <p className="pt-2">&gt;</p>
                    <Link to='/t-shirt' className="nav-link text-secondary">T-shirt</Link>
                </nav>
            </div>
            <section>
                <div className="container">
                    <h2 className='ml-3 font-weight-bold'>T-Shirt</h2>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title">Card title</h5>
                                        <h5 className="text-danger">Rp.100.000.00</h5>
                                        <p>Zalora Cloth</p>
                                        <img className={Styles.imgProduct} src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title">Card title</h5>
                                        <h5 className="text-danger">Rp.100.000.00</h5>
                                        <p>Zalora Cloth</p>
                                        <img className={Styles.imgProduct} src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title">Card title</h5>
                                        <h5 className="text-danger">Rp.100.000.00</h5>
                                        <p>Zalora Cloth</p>
                                        <img className={Styles.imgProduct} src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/prodct.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title">Card title</h5>
                                        <h5 className="text-danger">Rp.100.000.00</h5>
                                        <p>Zalora Cloth</p>
                                        <img className={Styles.imgProduct} src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/stars.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content