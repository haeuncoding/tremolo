import React from 'react'
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import './SecondaryNavigation.css'

function SecondaryNavigation() {

  const CATEGORIES = [
    "Electric Guitars",
    "Basses",
    "Pedals and Amplifiers",
    "Pro Audio Equipment", 
    "Drums & Percussion",
    "Keyboards & Synths"
  ]

  return (
    <ul id="sec-nav-container">
      <li>
        <Link to="#"
          class="category-link">
            Electric Guitars
        </Link>
      </li>
      <div class="vl" />
      <li>
        <Link to="#"
          class="category-link">
            Basses
          </Link>
      </li>
      <div class="vl" />
      <li>
        <Link to="#"
          class="category-link">
            Pedals and Amplifiers
        </Link>
      </li>
      <div class="vl" />
      <li>
        <Link to="#"
          class="category-link">
            Pro Audio Equipment
        </Link>
      </li>
      <div class="vl" />
      <li>
        <Link to="#"
          class="category-link">
            Drums & Percussion
        </Link>
      </li>
      <div class="vl" />
      <li>
        <Link to="#"
          class="category-link">
            Keyboards & Synths
        </Link>
      </li>
    </ul>
  );
}

export default SecondaryNavigation;