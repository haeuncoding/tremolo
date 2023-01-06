import CartIcon from '../../../assets/CartIconFin.png';
import CartIconColor from '../../../assets/CartIconFinColor.png';
import SideCart from './SideCart/SideCart'
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
        onClick={handleCartClick}
      >
        <img className="nav-icon"
          id="cart-icon-button"
          src={isHover ? CartIconColor : CartIcon}
          />
        <div className="nav-link-container">
          <label htmlFor="cart-icon-button">
            <SideCart  right />
            Cart
          </label>
        </div>
      </button>

    </div>
  )
}

export default CartButton;