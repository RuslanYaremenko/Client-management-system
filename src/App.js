import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Routes from './Routes';
import styles from './App.module.scss';
import store from './configureStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.container}>
          <NavBar />
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
