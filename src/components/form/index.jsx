import styles from "./styles.module.css";
import Step1 from "./Step1/index";
import FooterNav from "./FooterNav/index";
import Button from "./Button";

const Form = () => {
  return (
    <form className={styles.Form}>
      <Step1 />
      <FooterNav>
        <Button type={"next"} />
      </FooterNav>
    </form>
  );
};

export default Form;
