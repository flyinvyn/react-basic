import React from 'react'
import SideBarCostumer from './profile/content/SideBarCostumer'
import Styles from '../css/Profile.module.css'
import Nav from 'react-bootstrap/Nav';

import NavbarItem from '../componentPage/NavbarItem';
const ProfileCostumerOrder = () => {
    return (
        <>
            <div className={Styles.vb}>
                <NavbarItem />
                <div className={Styles.content6}>
                    <SideBarCostumer />
                    <h3>My order</h3>
                    <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/profile-order">All item</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1"><p>Not yet paid</p></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2"><p>Packed</p></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3"><p>Sent</p></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4"><p>Completed</p></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-5"><p>Order cancel</p></Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                </div>
            </div>
        </>
    )
}

export default ProfileCostumerOrder