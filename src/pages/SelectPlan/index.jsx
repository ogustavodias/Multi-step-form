import styles from "./styles.module.css";

const SelectPlan = () => {
  return (
    <div className={`${styles.SelectPlan} anime-left`}>
      <div className={styles.plans}>
        <div className={styles.plan_box}>
          <input type="radio" id="arcade" name="plan"></input>
          <label htmlFor="arcade" className={styles.arcade}>
            <div className={styles.plan_infos}>
              <span className={styles.plan}>Arcade</span>
              <span className={styles.price}>$90/yr</span>
              <span className={styles.bonus}>2 months free</span>
            </div>
          </label>
        </div>
        <div className={styles.plan_box}>
          <input type="radio" id="advanced" name="plan"></input>
          <label htmlFor="advanced" className={styles.advanced}>
            <div className={styles.plan_infos}>
              <span className={styles.plan}>Advanced</span>
              <span className={styles.price}>$90/yr</span>
              <span className={styles.bonus}>2 months free</span>
            </div>
          </label>
        </div>
        <div className={styles.plan_box}>
          <input type="radio" id="pro" name="plan"></input>
          <label htmlFor="pro" className={styles.pro}>
            <div className={styles.plan_infos}>
              <span className={styles.plan}>Pro</span>
              <span className={styles.price}>$90/yr</span>
              <span className={styles.bonus}>2 months free</span>
            </div>
          </label>
        </div>
      </div>
      <div className={styles.payment_type}>
        <label htmlFor="payment_type">
          <input type="checkbox" id="payment_type" name="payment_type"/>
          <span>Monthly</span>
          <span className={styles.switch}></span>
          <span>Yearly</span>
        </label>
      </div>
    </div>
  );
};

export default SelectPlan;
