import styles from "./styles.module.css";
import Step1 from "./Step1/index";

const Form = () => {
  return (
    <form className={styles.Form}>
      <Step1 />
    </form>
  );
};

export default Form;
