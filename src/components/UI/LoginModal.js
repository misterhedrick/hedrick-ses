import Card from "./Card";
import styles from "../../styles/UI/LoginModal.module.scss";

const LoginModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <h1>Login</h1>
        <label for="username"></label>
        <input id="username"></input>
        <label for="password"></label>
        <input id="password"></input>
        <button>Login</button>
      </Card>
    </div>
  );
};

export default LoginModal;
