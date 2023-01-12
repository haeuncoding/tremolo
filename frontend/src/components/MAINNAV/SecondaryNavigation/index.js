import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as categoryActions from "../../../store/categories"
import { NavLink, Link } from "react-router-dom";
import './SecondaryNavigation.css'
import CategoryLink from './CategoryLink';

function SecondaryNavigation() {
  const dispatch = useDispatch();
  const categoriesArr = useSelector(categoryActions.getCategories)
  const categories = categoriesArr
  console.log(categories)
  
  useEffect(() => {
    dispatch(categoryActions.fetchCategories())
  }, [dispatch])

  if (!categories) {return null}

  
// {<CategoryLink category={category}

  return (
    <ul id="sec-nav-container">
      {categories.map(category => <CategoryLink category={category} />)}
      <li className="sec-nav-link-container">
        <NavLink to="/my_feed"
          className="sec-nav-link">
            View All
        </NavLink>
      </li>
    </ul>
  );
}

export default SecondaryNavigation;