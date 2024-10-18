import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Modal = () => {
  const { isModalOpen, setModalOpen } = useContext(AppContext);

  if (!isModalOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '5px' }}>
        <h2>Login / Sign Up</h2>
        <button onClick={() => setModalOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;