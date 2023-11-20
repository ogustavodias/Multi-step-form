import styles from "./styles.module.css";

const ItemPainel = ({ children, step, active }) => {
  return (
    <div className={`${styles.ItemPainel} ${active && styles.active}`}>
      <span className={styles.step_number}>{step}</span>
      <div className={styles.step_infos}>
        <span>STEP {step}</span>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default ItemPainel;
