import { NavLink } from "react-router-dom";

import styles from "../styles/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const plusIcon = <FontAwesomeIcon icon={faCirclePlus} size="2x"/>;
const houseIcon = <FontAwesomeIcon icon={faHouse} size="2x"/>;
const userIcon = <FontAwesomeIcon icon={faUser} size="2x"/>;

const Footer = (props) => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.mainFooterItems}>
        <NavLink to="" className={styles.mainFooterItem}>{houseIcon}</NavLink>
        <NavLink to="/add" className={styles.mainFooterItem}>{plusIcon}</NavLink>
        <NavLink to="/login" className={styles.mainFooterItem}>{userIcon}</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
