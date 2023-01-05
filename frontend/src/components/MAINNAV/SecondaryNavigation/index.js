import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as categoryActions from "../../../store/categories"
import { NavLink, Link } from "react-router-dom";
import './SecondaryNavigation.css'
import CategoryLink from './CategoryLink';

function SecondaryNavigation() {
  const dispatch = useDispatch();
  const categories = useSelector(categoryActions.getCategories)
  console.log(categories)
  useEffect(() => {
    dispatch(categoryActions.fetchCategories())
  }, [dispatch])

  return (
    <ul id="sec-nav-container">
      {categories.map(category => {<CategoryLink category={category} />})}
      <li>
        <NavLink to="#"
          class="category-link">
            View All
        </NavLink>
      </li>
    </ul>
  );
}

export default SecondaryNavigation;