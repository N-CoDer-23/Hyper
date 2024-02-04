import React from 'react'
import './Footer.css'
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import { SiTiktok } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { SiFampay } from "react-icons/si";
import { FaCcVisa, FaMeta } from "react-icons/fa6";
import { IoLogoPlaystation } from "react-icons/io5";
import { FaCcMastercard } from "react-icons/fa6";
import { useLocation } from 'react-router-dom'

function Footer() {
  const {pathname} = useLocation()
  if(pathname.includes("product")){
      return <></>
  }
  return (
    <div className='footer__wrapper' >
      <div className="footer__top__title">
        <div className="footer__top">
        <h2>Join the #HyperXFamily on social!</h2>
        <p>Get a sneak peek at our new products and deals when you sign up to join the HyperX Family.</p>
        <IoLogoInstagram />
        <IoLogoFacebook />
        <IoLogoTwitter />
        <SiTiktok />
        <IoLogoYoutube />
      </div>
      <hr />
      <div className="footer__top">
        <h2>Sign up for our newsletter to receive a 20% discount!</h2>
        <p>Get a sneak peek at our new products and deals when you sign up to join the HyperX Family.</p>
        <input type="text" placeholder='Email addres'/>
        <button className='footer__btn'>Sign up</button>
      </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__collection">
          <ul>
            <h2>Support</h2>
            <li>Product Support</li>
            <li>Contact Support</li>
            <li>Shipping Information</li>
            <li>Refund Policy</li>
            <li>HP/HYPERX Visual Content Terms of Use</li>
          </ul>
          <ul>
            <h2>Company</h2>
            <li>Product Support</li>
            <li>Contact Support</li>
            <li>Shipping Information</li>
            <li>Refund Policy</li>
            <li>Visual Content</li>
            <li>Terms of Use</li>
            <li>Limited Warranty Statement</li>
            <li>Accessibility</li>
            <li>Use of Cookies</li>
            <li>Personal Data Rights</li>
            <li>Terms of Service</li>
          </ul>
          <ul>
            <h2>Support</h2>
            <li>Product Support</li>
            <li>Contact Support</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer__logo">
          <img src={"https://1000logos.net/wp-content/uploads/2021/04/HyperX-logo.jpg"} alt="" />
        </div>


        <div className="footer__logo2">
          <img src={"https://1000logos.net/wp-content/uploads/2021/04/HyperX-logo.jpg"} alt="" />
        </div>
        <div className="footer__collection2">
          <ul>
            <h2>Support</h2>
            <li>Product Support</li>
            <li>Contact Support</li>
            <li>Shipping Information</li>
            <li>Refund Policy</li>
            <li>HP/HYPERX Visual Content Terms of Use</li>
          </ul>
          <ul>
            <h2>Company</h2>
            <li>Product Support</li>
            <li>Contact Support</li>
            <li>Shipping Information</li>
            <li>Refund Policy</li>
            <li>Visual Content</li>
            <li>Terms of Use</li>
            <li>Limited Warranty Statement</li>
            <li>Accessibility</li>
            <li>Use of Cookies</li>
            <li>Personal Data Rights</li>
            <li>Terms of Service</li>
          </ul>
          <ul>
            <h2>Other Resources</h2>
            <li>Product Support</li>
            <li>Contact Support</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <hr />
      <br />
        <div className="icons">
        <p>United States | EN</p>
        <div className='svg'>
           <SiFampay />
        <FaCcVisa />
        <FaMeta />
        <IoLogoPlaystation />
        <FaCcMastercard />
        </div>
       
        </div>
        <br />
        <hr />
      
    </div>
  )
}

export default Footer