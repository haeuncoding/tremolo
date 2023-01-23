import React from 'react'
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import './Navigation.css'
import GenDropdown from '../../SESSIONS/GenDropdown';
import ProfileDropdown from '../../SESSIONS/ProfileDropdown';

import logo from '../../../assets/TremoloLogo.png'
import logoColor from '../../../assets/TremoloLogo_Color.png'
import SearchButton from './SearchButton';
import FeedGridButton from './FeedGridButton';
import CartButton from './CartButton';
import WatchListButton from './WatchListButton';
import NotifBellButton from './NotifBellButton';
// import ListingFormPage from '../LISTINGS/ListingFormPage';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <li className="session-link">
        <ProfileDropdown user={sessionUser} />
      </li>
    );
  } else {
    sessionLinks = (
      <>
        <li className="session-link">
          <GenDropdown />
        </li>

      </>
    );
  }

  

  return (
    <div id="main-nav-container">
      <ul id="logo-nav">
        <li>
          <NavLink to="/">
            <img id="tremolo_logo" 
              src={logo}
              onMouseOver={e => (e.currentTarget.src = logoColor)} 
              onMouseOut={e => (e.currentTarget.src = logo)} 
              />
          </NavLink>
        </li>
      </ul>

      <ul id="main-nav">
        {/* <li className="search-container"> */}
          {/* <input type="text" className="search-bar" placeholder="Look for used and new gear here..." /> */}
          {/* <div className="vl" id="search-vl" /> */}
          {/* <SearchButton className="search-bar"/> */}
        {/* </li> */}
        <li>
          <NavLink to="/new_listing">
            <button id="new-listing-button">
              Create a Listing
            </button>
          </NavLink>
        </li>
        {/* <li className="button-container"> */}
          {/* <WatchListButton /> */}
        {/* </li> */}
        {/* <li className="button-container"> */}
          {/* <FeedGridButton /> */}
        {/* </li> */}
        <li className="button-container">
          <CartButton />
        </li>
        {/* <li className="button-container"> */}
          {/* <NotifBellButton /> */}
        {/* </li> */}
          {sessionLinks}
      </ul>
    </div>
  );
}

export default Navigation;