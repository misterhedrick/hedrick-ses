import { useContext } from 'react';
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import AuthContext from '../store/auth-context';
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
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const authAdminRouteClickHandler = () => {
    console.log('looking for a route');
    console.log('logged in? ', authCtx.isLoggedIn);
    if(authCtx.isLoggedIn){
      console.log('going to admin');
      navigate('/admin');
    } else {
      console.log('going to auth');
      navigate('/auth');
    }
  }
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.mainFooterItems}>
        <NavLink to="" className={styles.mainFooterItem}>{houseIcon}</NavLink>
        <NavLink to="/add" className={styles.mainFooterItem}>{plusIcon}</NavLink>
        <div onClick={authAdminRouteClickHandler} className={styles.mainFooterItem}>{userIcon}</div>
      </div>
    </footer>
  );
};

export default Footer;
