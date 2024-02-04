import React from 'react'
import './Navbar.css'
import NavbarTop from './NavbarTop'
import { IoSearch, IoBagHandleOutline } from "react-icons/io5";



function Navbar() {
   
    return (
        <div>
            <NavbarTop />
            <div className="container">
                <div className="navbar__wrapper">
                    <div className="navbar__logo">
                        <img src={"https://1000logos.net/wp-content/uploads/2021/04/HyperX-logo.jpg"} width={150} alt="" />
                        <div className="navbar__title">
                            <div className="navbar__item">
                                <ul><li>Sale</li> </ul>
                                <hr className='nav__item_hr' />
                                <ul><li>Shop By Category</li></ul>
                                <hr className='nav__item_hr' />
                                <ul><li>Shop By Platform</li></ul>
                                <hr className='nav__item_hr' />
                                <ul><li>Support</li></ul>
                                <br /><br /></div>
                            <div className="navbar__item-svg">
                                <ul><li><IoSearch /></li></ul>
                                <hr className='nav__item_hr' />
                                <ul><li><IoBagHandleOutline /></li></ul>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            



        </div>
    )
}

export default Navbar