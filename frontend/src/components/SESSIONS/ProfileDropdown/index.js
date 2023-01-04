import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { Link } from 'react-router-dom';
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';
import * as sessionActions from '../../../store/session';
import UserIconInactive from '../../../assets/UserIconNoHover.png'
import UserIconActive from '../../../assets/UserIconHover.png'
import { useDispatch } from 'react-redux';
import './ProfileDropdown.css'


function ProfileDropdown({ user }) {
  // const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch()

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
 <div class="logged-in-dropdown">
      <button class="logged-in-drop-button">
        <img id="logged-in-profile-icon"
        alt=""
        src={UserIconInactive} 
        onMouseOver={((e) => e.target.src=UserIconActive)}
        onMouseOut={(e) => e.target.src=UserIconInactive}
        onClick={((e) => e.target.src=UserIconActive)}
        />  
        Menu
      </button>
      <div class="logged-in-dropdown-content" id="logged-in-dropdown-content">
          Welcome back, {user.username}
        <a onClick={logout}>Log Out</a>
      </div>
    </div>
  )
}

export default ProfileDropdown;