// Styles
import styles from "./styles.module.css";

// Context
import { useContext } from "react";
import { AppContext } from "../../context";

const Title = () => {
  const { title, step } = useContext(AppContext);

  return <h1 className={`${styles.Title} ${step === 5 && styles.successful}`}>{title}</h1>;
};

export default Title;
