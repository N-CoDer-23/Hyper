import React from 'react'
import './Categories.css'
import { PRODUCTS } from '../../static/Index'
import { Link } from 'react-router-dom'


function Categories() {
  return (
    <div className='container'>
        <div className="categries__title">
        <h1>Top Categories</h1>
        </div>
        <div className="categories__cart">
        {
            PRODUCTS?.map((el)=> <div key={el.id} >
                <Link to={`product/${el.id}`}>
                <img src={el.url} alt="" width={300}/>
                </Link>
                <h4>{el.title}</h4>
            
            
        </div>)
        }
        
        </div>


        <div className="category__icons">
            <div className="category__icons_cart">
                <img src={"https://hyperx.com/cdn/shop/files/free_ship_1f3e570d-b1b3-4f95-879a-c6fabfa4deb6_96x_1_180x.png?v=1622541594"} alt="" />
                <p>Free Standard Shipping on all Orders</p>
            </div>
            <div className="category__icons_cart">
                <img src={"https://hyperx.com/cdn/shop/files/Fill_1_2x_b70dc42e-83f2-44a8-b5e4-e7a23c4e4093_70x_1_180x.png?v=1622541591"} alt="" />
                <p>30-Day Hassle-Free Product Return</p>
            </div>
            <div className="category__icons_cart">
                <img src={"https://hyperx.com/cdn/shop/files/Combined_Shape_2x_66x_d2dfaedc-617d-49d5-ad75-9e31548be966_180x.png?v=1622541587"} alt="" />
                <p>Up to 2-year Warranty on all products</p>
            </div>
            <div className="category__icons_cart">
                <img src={"https://hyperx.com/cdn/shop/files/Group_2x_80x_40a566e5-23f0-42ef-9203-05ec79bc2e61_180x.png?v=1622541583"} alt="" />
                <p>Free and Easy Technical Support</p>
            </div>
        </div>
    </div>
  )
}

export default Categories