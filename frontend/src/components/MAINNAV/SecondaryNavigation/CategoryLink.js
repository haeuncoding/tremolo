import { NavLink, Link } from "react-router-dom";
import './SecondaryNavigation.css'


const CategoryLink = ({category}) => {

  return (
    <>
      <li category={category}>
        <NavLink className="sec-nav-link" to={`/categories/${category.id}`}>
          {category.category}
        </NavLink>
      </li>
      <div className="vl"/>
    </>
  )
}
export default CategoryLink
