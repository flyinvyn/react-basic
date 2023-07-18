import React, { useState } from 'react'
import Navbar from '../componentPage/NavbarProfile'
import SideBar from './profile/content/SideBar'
import Style from '../css/Profile.module.css'
import axios from 'axios'
// import Swal from 'sweetalert2'

const SellingProduct = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    name_product: "",
    price: "",
    stock: "",
    rate: "",
    shop_name: "",
    description: ""
  })

  const [image, setImage] = useState(null)

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name_product', data.name_product)
    formData.append('price', data.price)
    formData.append('stock', data.stock)
    formData.append('image_product', image)
    formData.append('rate', data.rate)
    formData.append('shop_name', data.shop_name)
    formData.append('description', data.description)
    axios.post(process.env.REACT_APP_BASEURL, formData)
      .then(() => {
        alert('create')
        setShow(false)
        window.location.reload()
      })
      .catch((err) => {
        alert(err);
        setShow(false)
      })
  }
  return (
    <>
      <div className={Style.vb}>
        <Navbar />
        <SideBar />
        <form onSubmit={handleSubmit}>
          <div className={Style.content}>
            <h4>My product</h4>
            <hr />
            <div className="col-12 mb-4">
              <p>Name of goods</p>
              <input
                className={Style.inp1}
                type="text"
                name="name_product"
                value={data.name_product}
                onChange={handleChange} />
            </div>
          </div>
          <div className={Style.content1}>
            <div className="container">
              <h4>Item details</h4>
              <hr />
              <div className="col-12">
                <p>Unit price</p>
                <input
                  className={Style.inp1}
                  type="text"
                  name="price"
                  value={data.price}
                  onChange={handleChange} />
              </div>
              <div className="col-12 mt-4">
                <p>Stock</p>
                <input
                  className={Style.inp1}
                  type="text"
                  name="stock"
                  value={data.stock}
                  onChange={handleChange} />
              </div>
              <div className="col-12 mt-4">
                <p>Rate</p>
                <input
                  className={Style.inp1}
                  type="text"
                  name="rate"
                  value={data.rate}
                  onChange={handleChange} />
              </div>
              <div className="col-12 mt-4">
                <p>Store</p>
                <input
                  className={Style.inp1}
                  type="text"
                  name="shop_name"
                  value={data.shop_name}
                  onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className={Style.content2}>
            <div className="container">
              <h4>Photo of goods</h4>
              <hr />
              <input
                type="file"
                className={Style.fle}
                name="image_product"
                onChange={handleUpload} />
            </div>
          </div>
          <div className={Style.content4}>
            <div className="container">
              <h4>Description</h4>
              <hr />
              <input
                type="text"
                className={Style.txt1}
                name="description"
                value={data.description}
                onChange={handleChange} />
            </div>
          </div>
          <div className={Style.content3}>
            <button type="submit" className={Style.butend}>Jual</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SellingProduct