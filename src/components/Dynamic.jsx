import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dynamic = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(process.env.REACT_APP_BASEURL)
            .then((res) => {
                setProducts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    })
    return (
        <>
            {products.map((product) => (
                <div className="col-md-3 col-sm-6 m">
                    <Link to={`${product.id_product}`}>
                        <div className="border rounded product">
                            <img src={product.image_product} crossOrigin="anonymous" alt='cuy' />
                            <p>{product.shop_name}</p>
                            <div className="p-2">
                                <h5 className="card-title">
                                    {product.name_product}
                                </h5>
                                <h5 className="text-danger">Rp.{product.price}</h5>
                                {product.rate}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Dynamic