import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { Link } from 'react-router-dom';
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';
import UserIconInactive from '../../../assets/UserIconNoHover.png'
import UserIconActive from '../../../assets/UserIconHover.png'
import './GenDropdown.css'

function GenDropdown() {
  // const [showModal, setShowModal] = useState(false);

  return (
    <div class="gen-dropdown">
      <button class="gen-drop-button">
        <img id="profile-icon"
        alt=""
        src={UserIconInactive} 
        onMouseOver={(e) => e.target.src=UserIconActive}
        onMouseOut={(e) => e.target.src=UserIconInactive}
        onClick={(e) => e.target.src=UserIconActive}
        />  
        Menu
      
      </button>
      <div class="dropdown-content">
          <Link class="modal-link" to="/login">
              Login
          </Link>
          <Link class="modal-link" to="/signup">
              Signup
          </Link>
      </div>
    </div>
  )

  // return (
  //   <div className="gen-modal-container">
  //     <a id="profile-link" onClick={() => setShowModal(true)}
  //     onMouseOver={() => setShowModal(true)}
  //     onMouseOut={() => setShowModal(false)}>
  //       <img id="profile-icon"
  //       alt=""
  //       src={UserIconInactive} 
  //       onMouseOver={(e) => e.target.src=UserIconActive}
  //       onMouseOut={(e) => e.target.src=UserIconInactive}
  //       onClick={(e) => e.target.src=UserIconActive}
  //       />  
  //       Menu
  //     </a>
  //     {showModal && (
  //       <Modal onClose={() => setShowModal(false)}>
  //         <Link class="modal-link" to="/login"
  //           onClick={() => setShowModal(false)}>
  //             Login
  //         </Link>
  //         <Link class="modal-link" to="signup"
  //           onClick={() => setShowModal(false)}>
  //             Signup
  //         </Link>
  //       </Modal>
  //     )}
  //   </div>
  // );
}

export default GenDropdown;