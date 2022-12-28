import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import SearchIcon from '../../assets/search-line-icon.svg'


const SearchButton = () => {
return (
  <div>
    <img style={{ width: "2vw", height: "auto" }} src={SearchIcon} />
  </div>
)}

export default SearchButton;