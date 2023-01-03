import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginFormPage from './LoginForm';
import SignupFormPage from '../SignupFormPage';

function GenModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a onClick={() => setShowModal(true)}>Log In</a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default GenModal;