import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import styles from "../styles/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faHouse,
  faUser,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const arrowLeftIcon = <FontAwesomeIcon icon={faArrowCircleLeft} size="3x" />;
const plusIcon = <FontAwesomeIcon icon={faCirclePlus} size="3x" />;
const houseIcon = <FontAwesomeIcon icon={faHouse} size="3x" />;
const userIcon = <FontAwesomeIcon icon={faUser} size="3x" />;

const Footer = (props) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const authAdminRouteClickHandler = () => {
    if (authCtx.isLoggedIn) {
      navigate("/admin");
    } else {
      navigate("/auth");
    }
  };
  const backClickHandler = () => {
    navigate(-1);
  }
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.mainFooterItems}>
        <div onClick={backClickHandler} className={styles.mainFooterItem}>
          {arrowLeftIcon}
        </div>
        <NavLink to="" className={styles.mainFooterItem}>
          {houseIcon}
        </NavLink>
        <NavLink to="/add" className={styles.mainFooterItem}>
          {plusIcon}
        </NavLink>
        <div
          onClick={authAdminRouteClickHandler}
          className={styles.mainFooterItem}
        >
          {userIcon}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
