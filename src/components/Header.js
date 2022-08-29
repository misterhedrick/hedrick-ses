import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = (props) => {
  return (
    <header id="mainHeader" className={[styles.mainHeader, styles.whiteNav].join(' ')}>
      <div className={styles.mainHeaderTitle} id="mainHeaderTitle">
        Hedrick Small Engine Shop
      </div>
      <nav className={styles.mainHeaderNav}>
        <ul className={styles.mainHeaderNavItems}>
          <li className={styles.mainHeaderNavItem}>
            Home
          </li>
          <li className={styles.mainHeaderNavItem}>
            Add
          </li>
          <li className={styles.mainHeaderNavItem}>
            Login
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
