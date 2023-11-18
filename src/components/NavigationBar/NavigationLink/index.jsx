import styles from "./styles.module.css";

const NavigationLink = ({ step, children }) => {
  return (
    <div className={styles.NavigationLink}>
      <span className={styles.step_number}>{step}</span>
      <div className={styles.step_info}>
        <span className={styles.step_number_discursive}>STEP {step}</span>
        <span className={styles.step_description}>{children}</span>
      </div>
    </div>
  );
};

export default NavigationLink;
