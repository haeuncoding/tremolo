import { NavLink, Link } from "react-router-dom";

const CategoryLink = ({category}) => {
  const categoryName = category.category
  return (
    <li>
      <NavLink to="#"
        class="category-link">
          {categoryName}
      </NavLink>
    </li>
  )
}
export default CategoryLink
{/* 
    <div class="vl" />
  </> */}