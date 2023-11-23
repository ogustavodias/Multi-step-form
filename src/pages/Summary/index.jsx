import styles from "./styles.module.css";

const Summary = () => {
  return (
    <div className={styles.Summary}>
      <div className={styles.summary_info}>
        <div className={styles.plan}>
          <span className={styles.plan_name}>Arcade (Monthly)</span>
          <button type="button" className={styles.type_payment_change}>
            Change
          </button>
          <span className={styles.plan_price}>$9/mo</span>
        </div>
        <div className={styles.services}>
          <div className={styles.service}>
            <span className={styles.service_name}>Online service</span>
            <span className={styles.service_price}>+$1/mo</span>
          </div>
          <div className={styles.service}>
            <span className={styles.service_name}>Larger storage</span>
            <span className={styles.service_price}>+$2/mo</span>
          </div>
        </div>
      </div>
      <div className={styles.total_box}>
        <span>Total (per month)</span>
        <span className={styles.total_price}>+$12/mo</span>
      </div>
    </div>
  );
};

export default Summary;
