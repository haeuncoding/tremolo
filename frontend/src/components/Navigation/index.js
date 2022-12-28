import React from 'react'
import ProfileButton from "./ProfileButton"
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import './Navigation.css'
import LoginFormModal from '../LoginFormModal';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <li>
        <ProfileButton user={sessionUser} />
      </li>
    );
  } else {
    sessionLinks = (
      <>
        <li>
          <LoginFormModal />
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink to="/"><img src={require("../../assets/TremoloLogo.png")} /></NavLink>
      </li>
      <li>
        <input type="text" class="search_bar" placeholder="Look for used and new gear here..." />
      </li>
      <li>
        <button>
          Create a New Listing
        </button>
      </li>
      {sessionLinks}
    </ul>
  );
}

export default Navigation;