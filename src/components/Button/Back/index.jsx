// Styles
import styles from "./styles.module.css";

// Context
import { AppContext } from "../../../context";
import { useContext } from "react";

const Back = () => {
  const { setStep, step } = useContext(AppContext);

  function handleBack() {
    if (step > 1) setStep((previous) => previous - 1);
  }

  return (
    <button className={styles.Back} type="button" onClick={handleBack}>
      Go Back
    </button>
  );
};

export default Back;
