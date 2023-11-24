// Styles
import styles from "./styles.module.css";

// Context
import { useContext } from "react";
import { AppContext } from "../../context";

const Subtitle = () => {
  const {step} = useContext(AppContext);
  let subtitle;

  if (step === 1) subtitle = "Please provide your name, email address, and phone number.";

  if (step === 2) subtitle = "You have the option of monthly of yearly billing";

  if (step === 3) subtitle = "Add-ons help enhance your gaming experience.";

  if (step === 4) subtitle = "Double-check everything looks OK before confirming";

  if (step === 5) subtitle = "";

  return <h2 className={styles.Subtitle}>{subtitle}</h2>;
};

export default Subtitle;
