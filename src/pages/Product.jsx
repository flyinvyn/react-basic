import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import ModalUpdate from '../components/ModalUpdate';
import ModalDelete from '../components/ModalDelete';
import { Link } from 'react-router-dom';
import Style from '../css/Profile.module.css'
import { useDispatch, useSelector } from 'react-redux';
import getProductAction from '../config/redux/action/getProductAction';
import Pagination from '../Pagination';

const Product = () => {
    // const onHeaderClick = (e) => {
    //     let type = e.target.textContent.toLowerCase();
    //     const sorted = [...product].sort((a, b) => (a[type] > b[type]) ? 1 : ((b[type] > a[type]) ? -1 : 0))
    // }
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerpage] = useState(3)
    const [order, setOrder] = useState("ASC")
    const [data, setData] = useState()

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted)
            setOrder("DSC")
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted)
            setOrder("ASC")
        }
    }

    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const { product } = useSelector((state) => state.product)
    useEffect(() => {
        dispatch(getProductAction())
    })

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = product.slice(firstPostIndex, lastPostIndex);
    return (
        <div>
            <br />
            {/* <ModalCreate /> */}
            <h3>My product</h3>
            <div className="d-flex">
                <Link to={'/profile'}><p>All item</p></Link>
                <p className='ml-5'>Sold out</p>
                <p className='ml-5'>Archived</p>
            </div>
            <hr />
            <div>
                <input type="text" placeholder='Search' className={Style.search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <br />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th onClick={() => sorting("name_product")} scope="col">Name product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Store</th>
                        <th scope="col">Description </th>
                        <th scope="col">Action </th>
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.filter((product) => {
                        if (search === "") {
                            return product
                        } else if (product.name_product.toLowerCase().includes(search.toLowerCase())) {
                            return product
                        }
                    })
                        .map((product) => (
                            <tr>
                                <th>{product.id_product}</th>
                                <td>{product.name_product}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td><img src={product.image_product} crossOrigin="anonymous" style={{ width: 70 }} alt='img' /></td>
                                <td>{product.rate}</td>
                                <td>{product.shop_name}</td>
                                <td>{product.description}</td>
                                <td>
                                    <Link to={`${product.id_product}`}>
                                        <button className='btn btn-success'>Detail</button>
                                    </Link>
                                    <ModalUpdate id_product={product.id_product} name_product={product.name_product} price={product.price}
                                        stock={product.stock} rate={product.rate} shop_name={product.shop_name} description={product.description}>Update</ModalUpdate>
                                    <ModalDelete id_product={product.id_product}>Delete</ModalDelete>
                                </td>
                            </tr>
                        ))}
                    <Pagination
                            totalPosts={product.length}
                            postPerPage={postPerPage}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                        />
                </tbody>
            </table>
        </div>
    )
}

export default Product