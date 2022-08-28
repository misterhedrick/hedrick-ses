import styles from '../styles/Footer.module.scss';

const Footer = (props) => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.mainFooterItems}>
        <div className={styles.mainFooterItem} onclick="scrollToByID('home')">
          <i class="fas fa-home fa-2x">home</i>
        </div>
        <div className={styles.mainFooterItem} onclick="scrollToByID('me')">
          <i class="fas fa-user fa-2x">Add</i>
        </div>
        <div className={styles.mainFooterItem} onclick="scrollToByID('languages')">
          <i class="fas fa-laptop-code fa-2x">Login</i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
