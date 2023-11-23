// Styles
import styles from "./styles.module.css";

// Context
import { useContext } from "react";
import { AppContext } from "../../context";

const Subtitle = () => {
  const {subtitle} = useContext(AppContext);
  return <h2 className={styles.Subtitle}>{subtitle}</h2>;
};

export default Subtitle;
