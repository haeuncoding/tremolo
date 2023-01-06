import React from 'react';
import { slide as Cart } from 'react-burger-menu';
import { useState } from 'react';
import './SideCart.css'

const SideCart = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCartClick = (e) => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  } 
  return (
    <Cart isOpen={isOpen} customBurgerIcon={ false } right>


    </Cart>
  )
}

export default SideCart