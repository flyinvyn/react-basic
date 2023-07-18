import React from 'react'
import SideBarCostumer from './profile/content/SideBarCostumer'
import Styles from '../css/Profile.module.css'

import NavbarItem from '../componentPage/NavbarItem';
const ProfileCostumerShiping = () => {
    return (
        <>
            <div className={Styles.vb}>
                <NavbarItem />
                <div className={Styles.content6}>
                    <SideBarCostumer />
                    <h3>Choose another address</h3>
                    <p>Manage your shipping address</p>
                    <hr />
                    <div className="col-12">
                        <button type="button" data-target="#exampleModal3" data-toggle="modal" className={Styles.but}><p className={Styles.pa}>Add new address</p></button>
                    </div>
                    <div
                        className="modal fade"
                        id="exampleModal3"
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
                            <h5 className='mt-4'>Andreas jane</h5>
                            <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                            <button className={Styles.nt}>Change address</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCostumerShiping