import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ModelReviewModalForm from './ModelReviewModalForm';

function EditReviewModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ModelReviewModalForm />
        </Modal>
      )}
    </>
  );
}
