import React, { useState } from 'react';
import * as sessionActions from '../../../store/session';
import UserIconInactive from '../../../assets/UserIconNoHover.png'
import UserIconActive from '../../../assets/UserIconHover.png'
import { useDispatch } from 'react-redux';
import './ProfileDropdown.css'


function ProfileDropdown({ user }) {
  // const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch()
  const [isHover, setIsHover] = useState(false)

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
  <div class="logged-in-dropdown">
      <button 
        // class="logged-in-drop-button"
        class="nav-icon"
        onMouseOver={e => (setIsHover(true))} 
        onMouseOut={e => (setIsHover(false))}
        onClick={e => (setIsHover(true))}
      >
        <img class="nav-icon"
          src={isHover ? UserIconActive : UserIconInactive}
        />  
        <label for="logged-in-dropdown-content">
          Profile
        </label>
      </button>
      <div class="logged-in-dropdown-content" id="logged-in-dropdown-content">
          Welcome back, {user.username}
        <a onClick={logout}>Log Out</a>
      </div>
    </div>
  )
}

export default ProfileDropdown;