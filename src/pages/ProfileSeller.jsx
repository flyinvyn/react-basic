import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Navbar from '../componentPage/NavbarProfile'
import SideBar from './profile/content/SideBar'
import Styles from '../css/Profile.module.css'

const ProfileSeller = () => {
    return (
        <>
            <div className={Styles.vb}>
                <Navbar />
                <div className={Styles.content6}>
                    <SideBar />
                    <h3>My profile store</h3>
                    <p>Manage your profile information</p>
                    <hr />
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <p>Store name</p>
                                <input type="text" className={Styles.pt} />
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
                                <p>Store description</p>
                                <input type="text" className={Styles.pt3} />
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

export default ProfileSeller