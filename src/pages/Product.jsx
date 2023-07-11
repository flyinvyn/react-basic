import React, { useEffect, useState } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import ModalCreate from '../components/ModalCreate';
import ModalUpdate from '../components/ModalUpdate';
import ModalDelete from '../components/ModalDelete';
import { Link } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/products/")
            .then((res) => {
                setProducts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    })
    return (
        <div className='m-4'>
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
                            <form className="form-inline my-2 my-lg-0">
                                <button className="filter">
                                    <a href="./detail.html">
                                        <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/filter%201.png" alt="" />
                                    </a>
                                </button>
                                <button className="hd">
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
            <br />
            <br />
            <br />
            <ModalCreate />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Store</th>
                        <th scope="col">Action </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr>
                            <th>{product.id_product}</th>
                            <td>{product.name_product}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td><img src={product.image_product} crossOrigin="anonymous" style={{width:100}} alt='img'/></td>
                            <td>{product.rate}</td>
                            <td>{product.shop_name}</td>
                            <td>
                                <Link to={`${product.id_product}`}>
                                    <button className='btn btn-success' style={{ marginRight: "10px" }}>Detail</button>
                                </Link>
                                <ModalUpdate id_product={product.id_product} name_product={product.name_product} price={product.price}
                                    stock={product.stock} rate={product.rate} shop_name={product.shop_name}>Update</ModalUpdate>
                                <ModalDelete id_product={product.id_product}>Delete</ModalDelete>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Product