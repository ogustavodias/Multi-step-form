import SubTitle from "../../SubTitle";
import Title from "../../Title";
import styles from "./styles.module.css";

const Step1 = () => {
  return (
    <div className={styles.Step1}>
      <Title>Personal info</Title>
      <SubTitle>
        Please provide your name, email address, and phone number.
      </SubTitle>
    </div>
  );
};

export default Step1;
