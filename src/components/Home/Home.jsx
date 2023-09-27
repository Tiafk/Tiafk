import styles from './_home.module.scss';
import React from 'react';
import Header from '../Header/Header';
import HomeText from './HomeText/HomeText';

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <HomeText />
    </div>
  )
}

export default Home;