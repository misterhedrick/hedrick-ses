import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.scss";

const Header = (props) => {
  return (
    <header
      id="mainHeader"
      className={[styles.mainHeader, styles.whiteNav].join(" ")}
    >
      <div className={styles.mainHeaderTitle} id="mainHeaderTitle">
        Hedrick Small Engine Shop
      </div>
      {/* <nav className={styles.mainHeaderNav}>
        <div className={styles.mainHeaderNavItems}>
          <NavLink className={styles.mainHeaderNavItem} to="">
            Home
          </NavLink>
          <NavLink className={styles.mainHeaderNavItem} to="">
            Add
          </NavLink>
          <NavLink className={styles.mainHeaderNavItem} to="/Admin">
            Login
          </NavLink>
        </div>
      </nav> */}
    </header>
  );
};

export default Header;
