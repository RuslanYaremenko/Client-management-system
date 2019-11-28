import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Routes from './Routes';
import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <NavBar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
