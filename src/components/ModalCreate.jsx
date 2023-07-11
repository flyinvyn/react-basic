import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCreate = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    name_product: "",
    price: "",
    stock: "",
    rate: "",
    shop_name: ""
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
    axios.post(process.env.REACT_APP_API_BACKEND + "products", formData)
      .then(() => {
        alert("Product created")
        setShow(false)
        window.location.reload()
      })
      .catch((err) => {
        alert(err);
        setShow(false)
      })
      console.log(process.env.REACT_APP_API_BACKEND);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="name"
              name="name_product"
              value={data.name_product}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="price"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="stock"
              name="stock"
              value={data.stock}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="file"
              placeholder="image"
              name="image_product"
              onChange={handleUpload}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="rate"
              name="rate"
              value={data.rate}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="shop_name"
              name="shop_name"
              value={data.shop_name}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">Create</button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalCreate;