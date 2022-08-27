import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = (props) => {
  return (
    <header id="mainHeader" className={[styles.mainHeader, styles.whiteNav].join(' ')}>
      <div className={styles.mainHeaderTitle} id="mainHeaderTitle">
        Daniel
      </div>
      <nav className={styles.mainHeaderNav}>
        <ul className={styles.mainHeaderNavItems}>
          <li className={styles.mainHeaderNavItem} onclick="scrollToByID('home')">
            Home
          </li>
          <li className={styles.mainHeaderNavItem} onclick="scrollToByID('me')">
            Me
          </li>
          <li className={styles.mainHeaderNavItem} onclick="scrollToByID('languages')">
            Languages
          </li>
          <li
            className={styles.mainHeaderNavItem}
            onclick="scrollToByID('achievements')"
          >
            Achievements
          </li>
          <li className={styles.mainHeaderNavItem} onclick="scrollToByID('experience')">
            Experience
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
