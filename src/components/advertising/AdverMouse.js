import React from 'react'
import './AdverMouse.css'
import mouse from '../../assets/mouse.jpg'
import klv from '../../assets/klv.jpg'
import comi from '../../assets/comiks.jpg'
import { useLocation } from 'react-router-dom'

function AdverMouse() {
  const {pathname} = useLocation()
    if(pathname.includes("product")){
        return <></>
    }
  return (
    
        <div className="advermouse__wrapper">
          <div className="advermouse__img">
            <img src={mouse} alt="" />
          </div>
        <div className="advermouse__text">
        <h1>HYPERX PULSEFIRE HASTE 2 MINI </h1>
        <p>The HyperX Pulsefire Haste 2 Mini Wireless is a precise mouse for gamers who want an ultra-light mouse with wireless freedom, but want all that in a compact form factor that weighs less than 60 grams.</p>
        <button className='advermouse__text_btn'>LEARN MORE</button>
        </div>

          <div className="advermouse__img2">
            <img src={klv} alt="" />
          </div>
        <div className="advermouse__text2">
        <h1>HYPERX PUDDING KEYCAPS 2</h1>
        <p>HyperX Pudding Keycaps 2 will breathe new life into your desktop aesthetic with a customized look that allows your stunning RGB themes to shine.</p>
        <button className='advermouse__text_btn'>LEARN MORE</button>
        </div>

        <div className="advermouse__text1">
        <h1>HYPERX PUDDING KEYCAPS 2</h1>
        <p>The HyperX Pulsefire Haste 2 Mini Wireless is a precise mouse for gamers who want an ultra-light mouse with wireless freedom, but want all that in a compact form factor that weighs less than 60 grams.</p>
        <button className='advermouse__text_btn'>LEARN MORE</button>
        </div>
          <div className="advermouse__img1">
            <img src={klv} alt="" />
          </div>
          <div className="advermouse__img">
            <img src={comi} alt="" />
          </div>
        <div className="advermouse__text">
        <h1>HYPERX | OMEN & RIOT GAMES</h1>
        <p>From world-class esports to community events, right down to developers putting final touches on Champions and Agents alike, our peripherals are helping the Riot Games team perform to their absolute best and bring world-class experiences to players and fans.</p>
        <button className='advermouse__text_btn'>LEARN MORE</button>
        </div>

        </div>
       
    
  )
}

export default AdverMouse