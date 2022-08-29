import styles from "../styles/Client.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const phoneIcon = <FontAwesomeIcon icon={faPhone} size="2x" />;

const Client = (props) => {
  return (
    <div className={styles.Client}>
      <h1> I am a client </h1>
      <div>{phoneIcon}</div>
    </div>
  );
};

export default Client;
