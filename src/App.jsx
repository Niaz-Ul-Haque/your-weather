import React from 'react';
import logo from './logo.svg';
import './App.css';

import './sass/app.scss';
import TopSection from './components/top/index'

function App() {
  return (
    <div className="app-container">
      <div className="main-container">
        <div className="top-section">
          <TopSection />
        </div>
        <div className="bottom-section">
          BOTTOM
        </div>
      </div>
    </div>
  )
}

export default App;
