import CartIcon from '../../../assets/CartIconFin.png';
import CartIconColor from '../../../assets/CartIconFinColor.png';
// import SideCart from './SideCart/SideCart'
// import { slide as Cart } from 'react-burger-menu';
import React, { useState } from 'react';
import './Button.css'

const CartButton = () => {
  const [isHover, setIsHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleCartClick = (e) => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  } 
  return (
    <div className="nav-icon-container">
      <button
        className="nav-icon"
        onMouseOver={e => (setIsHover(true))} 
        onMouseOut={e => (setIsHover(false))}
        cursor="pointer"
        // onClick={handleCartClick}
      >
        {/* <Cart className="nav-icon"
          id="cart-icon-button"
          customBurgerIcon={ */}
          <img className="nav-icon"
          id="cart-icon-button"
          src={isHover ? CartIconColor : CartIcon } 
          />

        <div className="nav-link-container">
          <label htmlFor="cart-icon-button">
            Cart
          </label>
        </div>
      </button>

    </div>
  )
}

export default CartButton;