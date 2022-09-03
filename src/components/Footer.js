import { NavLink } from "react-router-dom";

import styles from "../styles/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const plusIcon = <FontAwesomeIcon icon={faCirclePlus} size="3x"/>;
const houseIcon = <FontAwesomeIcon icon={faHouse} size="3x"/>;
const userIcon = <FontAwesomeIcon icon={faUser} size="3x"/>;

const Footer = (props) => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.mainFooterItems}>
        <NavLink to="" className={styles.mainFooterItem}>{houseIcon}</NavLink>
        <NavLink to="/add" className={styles.mainFooterItem}>{plusIcon}</NavLink>
        <NavLink to="/auth" className={styles.mainFooterItem}>{userIcon}</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
