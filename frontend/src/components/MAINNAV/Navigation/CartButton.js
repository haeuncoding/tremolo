import CartIcon from '../../../assets/CartIconFin.png';
import CartIconColor from '../../../assets/CartIconFinColor.png';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './Button.css'

const CartButton = () => {
  const [isHover, setIsHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  return (
    <NavLink to="/cart">
      <div className="nav-icon-container">
        <button
          className="nav-icon"
          onMouseOver={e => (setIsHover(true))} 
          onMouseOut={e => (setIsHover(false))}
          cursor="pointer"
        >
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
    </NavLink>
  )
}

export default CartButton;