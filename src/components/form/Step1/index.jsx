import SubTitle from "../../SubTitle";
import Title from "../../Title";
import BtnBack from "../Button/Back";
import BtnConfirm from "../Button/Confirm";
import BtnNext from "../Button/Next";
import styles from "./styles.module.css";

const Step1 = () => {
  return (
    <div className={styles.Step1}>
      <Title>Personal info</Title>
      <SubTitle>
        Please provide your name, email address, and phone number.
      </SubTitle>
      <BtnNext />
      <BtnBack />
      <BtnConfirm/>
    </div>
  );
};

export default Step1;
