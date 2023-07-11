import React, { useState } from 'react'
import Styles from '../css/style.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    role:""
  })

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    console.log(data);
  }

  const onClick = (e) => {
    axios.post("http://localhost:5000/users/register", data)
      .then((res) => {
        alert("Register successfuly")
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <div className={Styles.container}>
      <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/blnja.png" alt="blnja" />
      <p className="text-center text-dark font-weight-bold py-3">
        Please sign up with your account!
      </p>
      <ul
        className="nav nav-pills mb-3 justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active mr-4"
            id="pills-home-tab"
            data-toggle="pill"
            data-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Customer
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            data-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Seller
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          {/* <form> */}
          <div className="form-group">
            <input
              type="text"
              name=""
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name=""
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name=""
              className="form-control"
              placeholder="Phone number"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name=""
              className="form-control"
              placeholder="Store name"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              type="role"
              className="form-control"

              placeholder="Password"
            />
          </div>
          <button className={Styles.btn} onClick={onClick}>
          Login
          </button>
          {/* </form> */}
          <p className="text-regis">
            Already have a Tokopedia account?
            <Link to={"/login"} className='text-danger'>Login</Link>
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <form>
            <div className="form-group">
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="form-control"
                placeholder="Name"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="role"
                id="role"
                className="form-control"
                placeholder="Role"
                onChange={onChange}
              />
            </div>
            <button className={Styles.btn} onClick={onClick}>
              {/* <a href="./login.html"> PRIMARY </a> */}Submit
            </button>
          </form>
          <p className="text-regis">
            Already have a Tokopedia account?
            <Link to={"/login"} className='text-danger'>Login</Link>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Signup