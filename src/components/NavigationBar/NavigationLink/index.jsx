import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const NavigationLink = ({ step, children, path }) => {
  return (
    <NavLink className={styles.NavigationLink} to={path}>
      <span className={styles.step_number}>{step}</span>
      <div className={styles.step_info}>
        <span className={styles.step_number_discursive}>STEP {step}</span>
        <span className={styles.step_description}>{children}</span>
      </div>
    </NavLink>
  );
};

export default NavigationLink;
