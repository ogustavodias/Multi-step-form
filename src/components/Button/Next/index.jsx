// Styles
import styles from "./styles.module.css";

// Context
import { AppContext } from "../../../context";
import { useContext } from "react";

const Next = () => {
  const { setStep, step } = useContext(AppContext);

  function handleNext() {
    if (step < 5) setStep((previous) => previous + 1);
  }

  return (
    <button className={styles.Next} type="button" onClick={handleNext}>
      Next Step
    </button>
  );
};

export default Next;
