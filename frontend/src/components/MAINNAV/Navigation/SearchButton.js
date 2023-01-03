import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import SearchIcon from '../../../assets/search-line-icon.svg'


const SearchButton = () => {
return (
  <div>
    <button type="" id="search-button">
      <img id="search-icon" style={{ width: "1.25vw", height: "auto" }} src={SearchIcon} />
    </button>
  </div>
)}

export default SearchButton;