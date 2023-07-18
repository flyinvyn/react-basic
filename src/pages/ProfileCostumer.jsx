import React from 'react'
import SideBarCostumer from './profile/content/SideBarCostumer'
import Styles from '../css/Profile.module.css'
import Form from 'react-bootstrap/Form';

import NavbarItem from '../componentPage/NavbarItem';
const ProfileCostumer = () => {
    return (
        <>
            <div className={Styles.vb}>
                <NavbarItem />
                <div className={Styles.content6}>
                    <SideBarCostumer />
                    <h3>My profile store</h3>
                    <p>Manage your profile information</p>
                    <hr />
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <p>Name</p>
                                <input type="text" className={Styles.pt6} />
                            </div>
                            <div className="row mt-3">
                                <p>Email</p>
                                <input type="text" className={Styles.pt1} />
                            </div>
                            <div className="row mt-3">
                                <p>Phone number</p>
                                <input type="text" className={Styles.pt2} />
                            </div>
                            <div className="row mt-3">
                                <p className='mt-3'>Gender</p>
                                <input type="radio" className={Styles.pt4} />
                                <p className='ml-2 mt-3'>Laki-Laki</p>
                                <input type="radio" className={Styles.pt5} />
                                <p className='ml-2 mt-3'>Perempuan</p>
                            </div>
                            <div className="row mt-3">
                                <p className='mt-3'>Date of birth</p>
                                <Form.Select aria-label="Default select example" className={Styles.slc}>
                                    <option>1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">4</option>
                                </Form.Select>
                                <Form.Select aria-label="Default select example" className={Styles.slc}>
                                    <option>January</option>
                                    <option value="1">February</option>
                                    <option value="2">March</option>
                                    <option value="3">Aprill</option>
                                </Form.Select>
                                <Form.Select aria-label="Default select example" className={Styles.slc}>
                                    <option>2000</option>
                                    <option value="1">2001</option>
                                    <option value="2">2002</option>
                                    <option value="3">2003</option>
                                </Form.Select>
                            </div>
                            <button className={Styles.buten}>Save</button>
                        </div>
                        <div className="col-4">
                            <div className='mr-5'>
                                <img className={Styles.m1g} src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/christian-buehner-DItYlc26zVI-unsplash%201.png" alt="" />
                                <div className="label">
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCostumer