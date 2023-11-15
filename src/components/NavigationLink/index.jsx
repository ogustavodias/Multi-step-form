import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const NavigationLink = ({ step, description, path }) => {
  return (
    <NavLink className={styles.NavigationLink} to={path}>
      <span className={styles.stepNumber}>{step}</span>
      <div className={styles.stepInfo}>
        <span className={styles.step}>STEP {step}</span>
        <span className={styles.stepDescription}>{description}</span>
      </div>
    </NavLink>
  );
};

export default NavigationLink;
