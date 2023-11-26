//Styles
import styles from "./styles.module.css";

//Components
import CurrentPage from "../../pages/CurrentPage";
import FormControls from "../FormControls";
import Subtitle from "../Subtitle";
import Title from "../Title";

// Custom Hook
import useUserInfo from "../../hooks/useUserInfo";

// Context
import { useContext } from "react";
import { AppContext } from "../../context/index";

const Form = () => {
  const { setStep, step, onChange } = useContext(AppContext);
  const userInfo = {
    name: useUserInfo(),
    email: useUserInfo("email"),
    phone: useUserInfo("phone"),
  };
  const { name, email, phone } = userInfo;

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = Object.keys(userInfo)
      .map((item) => userInfo[item].validate() === true)
      .every((item) => item === true);
    if (isValid) setStep((previous) => previous + 1);
    if (isValid && step === 4) {
      Object.keys(userInfo).forEach((item) => onChange([item], userInfo[item]));
    }
  }

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <section className={styles.form_content}>
        <Title />
        <Subtitle />
        <CurrentPage name={name} email={email} phone={phone} />
      </section>
      <FormControls />
    </form>
  );
};

export default Form;
