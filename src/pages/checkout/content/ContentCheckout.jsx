import React from 'react'
import Styles from '../../../css/Checkout.module.css'

const ContentCheckout = () => {
    return (
        <>
            <main>
                <br />
                <br />
                <section className="mt-5 ">
                    {" "}
                    <br />
                    <div className="container">
                        <h2 className=" font-weight-bold">Checkout</h2>
                        <h5 className="mt-5">Shipping adress</h5>
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <div className="card bg-light mb-3">
                                    <div className="card-body ">
                                        <div className="">
                                            <h5>Andreas Jane</h5>
                                            <div className="">
                                                <p className="card-text">
                                                    Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                                                    Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note:
                                                    blok c 16] Sokaraja, Kab. Banyumas, 53181
                                                </p>
                                            </div>
                                        </div>
                                            <button
                                                type="button"
                                                className='btn btn-outline-dark btn-light border rounded-pill w-auto mt-3'
                                                data-toggle="modal"
                                                data-target="#exampleModal"
                                            >
                                                Choose another adress
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
                                                                Modal title
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
                                                            contoh
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button
                                                                type="button"
                                                                className="btn btn-secondary"
                                                                data-dismiss="modal"
                                                            >
                                                                Close
                                                            </button>
                                                            <button type="button" className="btn btn-primary">
                                                                Save changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="card bg-light mb-3 mt-4">
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <div className="media">
                                            <img
                                                src="../assets/img/prduct-same.png"
                                                className="align-self-center mr-3"
                                                alt="..."
                                            />
                                            <div className="media-body mt-3">
                                                <h5 className="mt-0">Men's formal suit - Black</h5>
                                                <p>Zalora Cloth</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mr-2">Rp.20.000.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-light mb-3">
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <div className="media">
                                            <img
                                                src="../assets/img/prduct1.png"
                                                className="align-self-center mr-3"
                                                alt="..."
                                            />
                                            <div className="media-body mt-3">
                                                <h5 className="mt-0">Men's Jacket jeans</h5>
                                                <p>Zalora Cloth</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mr-2">Rp.20.000.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card bg-light">
                                    {" "}
                                    <br />
                                    <h5 className="card-title ml-2">Shopping summary</h5> <br />
                                    <div className="d-flex justify-content-between ml-2">
                                        <p>Order</p>
                                        <h5 className="mr-3">Rp.40.000.00</h5>
                                    </div>
                                    <div className="d-flex justify-content-between ml-2">
                                        <p>Delivery</p>
                                        <h5 className="mr-3">Rp.5.000</h5>
                                    </div>
                                    <div className="border-top ml-3 mr-3 mt-3" />
                                    <div className="d-flex justify-content-between ml-2 mt-4 d">
                                        <h5 className="card-title">Shopping summary</h5>
                                        <h5 className="mr-3 text-danger">Rp.45.000.00</h5>
                                    </div>
                                    <button className="btn btn-danger rounded-pill w-auto ml-2 mr-3 mt-3 mb-5">
                                        Select payment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    )
}

export default ContentCheckout