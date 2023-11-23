// Styles
import styles from "./styles.module.css";

// Button global component
import Button from "../Button";

// Context
import { useContext } from "react";
import { AppContext } from "../../context";

const FormControls = () => {
  const { step } = useContext(AppContext);

  if (step === 5) return null;
  return (
    <div className={styles.FormControls}>
      {step > 1 && <Button type={"back"} />}
      {step < 4 && <Button type={"next"} />}
      {step === 4 && <Button type={"confirm"} />}
    </div>
  );
};

export default FormControls;
