// Styles
import styles from "./styles.module.css";

// Button global component
import Button from "../Button";

const FormControls = () => {
  return (
    <div className={styles.FormControls}>
      <Button type={"back"} />
      <Button type={"next"} />
    </div>
  );
};

export default FormControls;
