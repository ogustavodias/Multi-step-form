import SubTitle from "../../SubTitle";
import Title from "../../Title";
import styles from "./styles.module.css";

const Step2 = () => {
  return (
    <div className={styles.Step2}>
      <Title>Select your plan</Title>
      <SubTitle>You have the option of monthly or yearly billing.</SubTitle>
    </div>
  );
};

export default Step2;
