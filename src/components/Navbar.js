import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import{GiShoppingCart} from 'react-icons/gi'
import{SiVectorlogozone} from 'react-icons/si'
function Navbar() {
  const select = useSelector((state) => state.CartSlice)

  return (
    <div>
      <div className='nav-container'>
        <span ><SiVectorlogozone className='logo1' size={35}></SiVectorlogozone></span>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/cart' >Cart</Link>
        <span ><GiShoppingCart className='logo' size={50}></GiShoppingCart><h3> {select.cart.length}</h3></span>
      </div>
      </div>
   
  )
}

export default Navbar