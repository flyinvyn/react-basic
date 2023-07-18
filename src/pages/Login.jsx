import React, { useState } from 'react'
import Styles from '../css/style.module.css'
import axios from 'axios'
import { Link  } from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    console.log(data);
  }

  const onClick = (e) => {
    axios.post("http://localhost:5000/users/login", data)
      .then((res) => {
        alert("Login successfuly")
        localStorage.setItem("token", res.data.data.token)
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
            className="nav-link active"
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
          <form>
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
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <Link to={'/forgot'} className="float-right py-3 text-danger">Forgot password</Link>
              <button className={Styles.btn}>
              <Link to={"/home"}>Login</Link>
              </button>
            </div>
          </form>
          <p className="text-regis">
            Don't have Tokopedia account?
            <Link to={"/signup"} className='text-danger'>Sign up</Link>
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
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
            <Link to={'/forgot'} className="float-right py-3 text-danger">Forgot password</Link>
              <button className={Styles.btn} onClick={onClick}>
              <Link to={'/home-page'}>Login</Link>
              </button>
            </div>
          </form>
          <p className="text-regis">
            Don't have Tokopedia account?
            <Link to={"/signup"} className='text-danger'>Sign up</Link>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Login