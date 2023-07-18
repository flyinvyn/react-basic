import React from 'react'
import ContetnProfile from './content/ContetnProfile'
import SideBar from './content/SideBar'
import Navbar from '../../componentPage/NavbarProfile'
import '../profile/content/Profile.css'

const Profile = () => {
  return (
    <>
    <div className='bg'>
    <Navbar />
    <SideBar />
    <ContetnProfile />
    </div>
    </>
  )
}

export default Profile