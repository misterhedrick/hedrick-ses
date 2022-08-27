import styles from '../styles/Footer.module.scss';

const Footer = (props) => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.mainFooterItems}>
        <div className={styles.mainFooterItem} onclick="scrollToByID('home')">
          <i class="fas fa-home fa-2x">home</i>
        </div>
        <div className={styles.mainFooterItem} onclick="scrollToByID('me')">
          <i class="fas fa-user fa-2x">user</i>
        </div>
        <div className={styles.mainFooterItem} onclick="scrollToByID('languages')">
          <i class="fas fa-laptop-code fa-2x">code</i>
        </div>
        <div className={styles.mainFooterItem} onclick="scrollToByID('achievements')">
          <i class="fas fa-tasks fa-2x">task</i>
        </div>
        <div className={styles.mainFooterItem} onclick="scrollToByID('experience')">
          <i class="fas fa-history fa-2x">history</i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
