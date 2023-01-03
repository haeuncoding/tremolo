import CartIcon from '../../../assets/CartIconFin.png';
import CartIconColor from '../../../assets/CartIconFinColor.png';
import React, { useState } from 'react';
import './Button.css'

const CartButton = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div class="nav-icon-container">
      <button
        class="nav-icon"
        onMouseOver={e => (setIsHover(true))} 
        onMouseOut={e => (setIsHover(false))}
      >
        <img class="nav-icon"
          id="cart-icon-button"
          src={isHover ? CartIconColor : CartIcon}
          />
        <div class="nav-link-container">
          <label for="cart-icon-button">
            Cart
          </label>
        </div>
      </button>

    </div>
  )
}

export default CartButton;