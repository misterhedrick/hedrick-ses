import styles from '../../styles/UI/Form.scss';

const Form = (props) => {
    return (
      <form
        className={styles.form}
        onSubmit={props.onSubmit}
      >
        {props.children}
      </form>
    );
  };
  
  export default Form;