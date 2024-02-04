import React from 'react'
import './SingleRoute.css'
import { PRODUCTS } from '../../static/Index'
import { Link, useParams } from 'react-router-dom'


function SingleRoute() {
    const params = useParams()
    const oneItem = PRODUCTS.find((el) => el.id === params.id)
  
  return (
    <div>
          <div className="single__route">
        <div><img className='single__img' src={oneItem?.url[0]} alt="" />
        </div>
        <div>
          <h2 className='single__info'>{oneItem?.title}</h2>
          <p className='single__title'><b>maxsulot:</b> {oneItem?.category}</p>
          <mark className='product__monthly'>{oneItem.price} so'm/oyiga</mark>
          <br /><br />
          
          <h2 className='single__info'>Narxi: {oneItem?.oldprice} so'm</h2>
          <br /><br />
          <Link to={'/'}><button className='single__bt'>Home</button></Link>
         <button className='single__bt'>Cart</button>
          

        </div>

      </div>
     
    </div>
  )
}

export default SingleRoute