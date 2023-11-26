import styles from "./styles.module.css";

const Error = ({ error }) => {
  return <p className={styles.Error}>{error}</p>;
};

export default Error;
