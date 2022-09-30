import React from 'react';
import styles from '@styles/App.module.css';
import url from '@assets/react-icon.png';

const App = () => (
  <div className={styles.header}>
    <h1> Hello, React18/Webpack Boilerplate</h1>
    <img src={url} alt="test" />
  </div>
);

export default App;
