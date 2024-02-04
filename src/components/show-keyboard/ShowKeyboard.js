import React from 'react'
import './ShowKeyboard.css'
import { useLocation } from 'react-router-dom'


function ShowKeyboard() {
  const {pathname} = useLocation()
    if(pathname.includes("product")){
        return <></>
    }
  return (
    <div className='show__wrapper'>
<img src={"https://cdn.shopify.com/s/files/1/0561/8345/5901/files/CS-Support_Center_hx-icon-bold360-chat.webp?v=1634149273"} alt="" className='comment'/>
            <div className="show__grid">
                <div className="show__grid_keyboard">
                    <div className="show__grid_text">
                       <h1>SHOW OFF YOUR PERSONALITY</h1>
                       <p>With The Latest HX3D Drops!</p>
                    </div>
                    <div className="show__grid_img">
                    <div className="show__grid_img2-text"><p> MapleStory comes alive with this collection of 3D Printed Accessories!</p> <h2> HyperX X MapleStory</h2></div>
                    </div>
                </div>
                

                <div className="show__grid_keyboard">
                <div className="show__grid_img2">
                  <div className="show__grid_img2-text"><p> MapleStory comes alive with this collection of 3D Printed Accessories!</p> <h2> HyperX X MapleStory</h2></div>
                         
                    </div>
                </div>
            </div>

    </div>
  )
}

export default ShowKeyboard