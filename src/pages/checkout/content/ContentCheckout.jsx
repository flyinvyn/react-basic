import React, { useEffect, useState } from 'react'
import Styles from '../../../css/Checkout.module.css'
import axios from 'axios';


const ContentCheckout = () => {
    const [adress, setAdress] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/adress")
            .then((res) => {
                // setAdress(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    })
    return (
        <>
            <main>
                <br />
                <br />
                <section className="mt-5 ">
                    {" "}
                    <br />
                    {/* {adress.map((adress) = ( */}


                        <div className="container">
                            <h2 className=" font-weight-bold">Checkout</h2>
                            <h5 className="mt-5">Shipping adress</h5>
                            <div className="row">
                                <div className="col-md-8 col-sm-12">
                                    <div className="card bg-light mb-3">
                                        <div className="card-body ">
                                            <div className="">
                                                <h5>{adress.name_costumer}</h5>
                                                <div className="">
                                                    <p className="card-text">
                                                        Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                                                        Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note:
                                                        blok c 16] Sokaraja, Kab. Banyumas, 53181
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                className='btn btn-outline-dark btn-light border rounded-pill w-auto mt-3'
                                                type="button"
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
                                                            <h3 className={Styles.txt}>Choose another address</h3>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <button type="button" data-target="#exampleModal2" data-toggle="modal" className={Styles.but}><p className={Styles.pa}>Add new address</p></button>
                                                                    </div>

                                                                    <div
                                                                        className="modal fade"
                                                                        id="exampleModal2"
                                                                        tabIndex={-1}
                                                                        aria-labelledby="exampleModalLabel"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <div className="modal-dialog">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header">
                                                                                    <h5 className={Styles.txt} id="exampleModalLabel">
                                                                                        Add new address
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
                                                                                    <div className="container">
                                                                                        <div className="row">
                                                                                            <div className="col-12">
                                                                                                <p>Save address as (ex : home address, office address)</p>
                                                                                                <input type="text" placeholder='Rumah' className={Styles.txt1} />
                                                                                            </div>
                                                                                            <div className="col-6 mt-3">
                                                                                                <p>Recipient’s name</p>
                                                                                                <input type="text" className={Styles.txt1} />
                                                                                            </div>
                                                                                            <div className="col-6 mt-3">
                                                                                                <p>Telephone number</p>
                                                                                                <input type="text" className={Styles.txt1} />
                                                                                            </div>
                                                                                            <div className="col-6 mt-3">
                                                                                                <p>Adress</p>
                                                                                                <input type="text" className={Styles.txt1} />
                                                                                            </div>
                                                                                            <div className="col-6 mt-3">
                                                                                                <p>Postal code</p>
                                                                                                <input type="text" className={Styles.txt1} />
                                                                                            </div>
                                                                                            <div className="col-12 mt-3">
                                                                                                <p>City or Subdistrict</p>
                                                                                                <input type="text" className={Styles.txt2} />
                                                                                            </div>
                                                                                            <div className={Styles.wrap}>
                                                                                                <div className={Styles.wrapp}><input type="checkbox" /></div>
                                                                                                <div className="ml-3"><p>Make it the primary address</p></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="modal-footer">
                                                                                    <button
                                                                                        type="button"
                                                                                        className={Styles.btnn}
                                                                                        data-dismiss="modal"
                                                                                    >
                                                                                        Cancel
                                                                                    </button>
                                                                                    <button type="button" className="btn btn-danger rounded-pill">
                                                                                        Save
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="col-12 mt-5">
                                                                        <div className={Styles.but1}>
                                                                            <h5 className='mt-3'>Andreas jane</h5>
                                                                            <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                                                                            <button className={Styles.nt}>Change address</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
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
                                        <button type="button"
                                            data-toggle="modal"
                                            data-target="#exampleModall" className="btn btn-danger rounded-pill w-auto ml-2 mr-3 mt-3 mb-5">
                                            Select payment
                                        </button>
                                        <div class="modal fade" id="exampleModall" tabindex="-1" aria-labelledby="exampleModallLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h3 class="modal-title" id="exampleModallLabel">Payment</h3>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <h5>Payment method</h5>
                                                        <div className="container">
                                                            <div className="row mt-4">
                                                                <div className="col-md-4 col-4">
                                                                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Logo-GoPay-Vector-CDR-dan-PNG%201.png" alt="gopay" />
                                                                </div>
                                                                <div className="col-md-4 col-4"><h5>Gopay</h5></div>
                                                                <div className="col-md-4 col-4"><input type="checkbox" /></div>
                                                            </div>
                                                            <div className="row mt-5">
                                                                <div className="col-md-4 col-4 pr-5">
                                                                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/kisspng-pos-indonesia-mail-point-of-sale-logo-indonesia-5aeb329c2f74d7%201.png" alt="pos indonesia" />
                                                                </div>
                                                                <div className="col-md-4 col-4"><h5>Pos Indonesia</h5></div>
                                                                <div className="col-md-4 col-4"><input type="checkbox" /></div>
                                                            </div>
                                                            <div className="row mt-4">
                                                                <div className="col-md-4 col-4 pr-5">
                                                                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/mastercard.jpg" alt="mastercard" />
                                                                </div>
                                                                <div className="col-md-4 col-4"><h5>Mastercard</h5></div>
                                                                <div className="col-md-4 col-4"><input type="checkbox" /></div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <h5 className="card-title ml-2 mt-5">Shopping summary</h5> <br />
                                                        <div className="d-flex justify-content-between ml-2">
                                                            <p>Order</p>
                                                            <h5 className="mr-3">Rp.40.000.00</h5>
                                                        </div>
                                                        <div className="d-flex justify-content-between ml-2">
                                                            <p>Delivery</p>
                                                            <h5 className="mr-3">Rp.5.000</h5>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <div className="row">
                                                            <div className="col-md-6 col-6">
                                                                <h5 className={Styles.ed}>Shoping summary</h5>
                                                                <h5>Rp.45.000.000</h5>
                                                            </div>
                                                            <div className="col-md-6 col-6">
                                                                <button type='button' className='btn btn-danger rounded-pill ml-5 mt-2'>Buy</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     {/* ))}  */}
                </section>
            </main>
        </>

    )
}

export default ContentCheckout