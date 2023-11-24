// Styles
import styles from "./styles.module.css";

// Context
import { useContext } from "react";
import { AppContext } from "../../context";

const Title = () => {
  const { step } = useContext(AppContext);
  let title;

  if (step === 1) title = "Personal info";

  if (step === 2) title = "Select you plan";

  if (step === 3) title = "Pick add-ons";

  if (step === 4) title = "Finishing up";

  if (step === 5) title = "Thank you!";

  return (
    <h1 className={`${styles.Title} ${step === 5 && styles.successful}`}>
      {title}
    </h1>
  );
};

export default Title;
