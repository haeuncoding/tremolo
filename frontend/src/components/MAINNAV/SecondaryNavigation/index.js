import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as categoryActions from "../../../store/categories"
import { NavLink, Link } from "react-router-dom";
import './SecondaryNavigation.css'
import CategoryLink from './CategoryLink';

function SecondaryNavigation() {
  const dispatch = useDispatch();
  const categoriesArr = useSelector(categoryActions.getCategories)
  const categories = categoriesArr[0]
  console.log(categories)
  
  useEffect(() => {
    dispatch(categoryActions.fetchCategories())
  }, [dispatch])

  
// {<CategoryLink category={category}

  return (
    <ul id="sec-nav-container">
      {/* {categories.map(category => <h2>{category.name}</h2>)} */}
      <li>
        category
      </li>
      <li>
        category
      </li>
      <li>
        category
      </li>
      <li>
        category
      </li>
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