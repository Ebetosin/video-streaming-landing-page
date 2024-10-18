import React from 'react';
import { AppProvider } from './context/AppContext';
import Carousel from './components/Carousel';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';

const App = () => {
  return (
    <AppProvider>
      <div style={{ padding: '20px' }}>
        <h1>Video Streaming Platform</h1>
        <SearchBar />
        <Carousel />
        <button onClick={() => setModalOpen(true)}>Login/Sign-Up</button>
        <Modal />
      </div>
    </AppProvider>
  );
};

export default App;