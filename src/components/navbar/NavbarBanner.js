import React from 'react'
import { useLocation } from 'react-router-dom'

function NavbarBanner() {
    const {pathname} = useLocation()
    if(pathname.includes("product")){
        return <></>
    }
  return (
    <div className="navbar__banner">
                
            </div>
  )
}

export default NavbarBanner