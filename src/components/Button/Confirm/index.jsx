// Styles
import styles from "./styles.module.css";

// Context
import { AppContext } from "../../../context";
import { useContext } from "react";

const Confirm = () => {
  const { setStep } = useContext(AppContext);

  function handleConfirm() {
    setStep(5);
  }

  return (
    <button className={styles.Confirm} type="submit" onClick={handleConfirm}>
      Confirm
    </button>
  );
};

export default Confirm;
