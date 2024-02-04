import React from 'react'
import './Blog.css'
import { useLocation } from 'react-router-dom'

function Blog() {
  const {pathname} = useLocation()
    if(pathname.includes("product")){
        return <></>
    }
  return (
    <div>
        <div className="container blog__wrapper">
        <h1>Blog</h1>
        <div className="blog__carta">
          <div className="blog__cart">
            <img src={"https://hyperx.com/cdn/shop/articles/20231108_180918317_iOS.jpg?v=1700573567&width=240"} alt="" />
          <b>Call of Duty: Modern Warfare III RGB Keyboard Themes For Ngenuity</b>
          <p>Admit it, you’ve already spent hours tinkering with your Modern Warfare III weapons and skins. Thankfully, setting up your real-life load...</p>
          </div>
          
          <div className="blog__cart">
            <img src={"https://hyperx.com/cdn/shop/articles/Modern-warfare-3-map-spots-highrise-2-3.jpg?v=1700567020&width=240"} alt="" />
          <b>Call of Duty: Modern Warfare III RGB Keyboard Themes For Ngenuity</b>
          <p>Admit it, you’ve already spent hours tinkering with your Modern Warfare III weapons and skins. Thankfully, setting up your real-life load...</p>
          </div>
          
          <div className="blog__cart">
            <img src={"https://hyperx.com/cdn/shop/articles/Call_of_Duty_MWIII_Blog_Banner_4_d813eeaf-9a6a-48bc-9c3f-83f390284b2b.jpg?v=1699969672&width=240"} alt="" />
          <b>Call of Duty: Modern Warfare III RGB Keyboard Themes For Ngenuity</b>
          <p>Admit it, you’ve already spent hours tinkering with your Modern Warfare III weapons and skins. Thankfully, setting up your real-life load...</p>
          </div>
          
          <div className="blog__cart">
            <img src={"https://hyperx.com/cdn/shop/articles/most-overpowers-weapons-call-of-duty-model-1887-2.jpg?v=1698227020&width=240"} alt="" />
          <b>Call of Duty: Modern Warfare III RGB Keyboard Themes For Ngenuity</b>
          <p>Admit it, you’ve already spent hours tinkering with your Modern Warfare III weapons and skins. Thankfully, setting up your real-life load...</p>
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default Blog