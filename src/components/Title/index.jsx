// Styles
import styles from "./styles.module.css";

// Context
import { useContext } from "react";
import { AppContext } from "../../context";

const Title = () => {
  const { title } = useContext(AppContext);

  return <h1 className={styles.Title}>{title}</h1>;
};

export default Title;
