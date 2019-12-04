import React from 'react';
import './modal.css';

const Modal = ({ modalClose, show,modalSubmit }) => {
  const modalChange = show ? "modal display-block" : "modal display-none";
  return (
    <React.Fragment>
    <div className={modalChange}>
      <p className="modal__question">¿Do you sure save this task?</p>
      <button onClick={modalClose} className="modal__btn">Add other task</button>
      <button type="submit" onSubmit={modalSubmit} className="modal__btn modal__btn-left">Show Tasks</button>
    </div>
    </React.Fragment>
  );
};

export default Modal