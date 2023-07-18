import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import updateProductAction from '../config/redux/action/updateProductAction';

const ModalUpdate = ({id_product, name_product, price, stock, rate, shop_name, description, children}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    name_product,
    price,
    stock,
    rate,
    shop_name,
    description
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
    dispatch(updateProductAction(data, image ,id_product, setShow))

  }

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        {children}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{children} product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              className="form-control"
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
            <input
              className="form-control mt-3"
              type="text"
              placeholder="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">{children}</button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalUpdate;