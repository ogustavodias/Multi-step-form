// Styles
import styles from "./styles.module.css";

// Context
import { useContext } from "react";
import { AppContext } from "../../context";

const SelectPlan = () => {
  const { data, changeData } = useContext(AppContext);
  const { plan, payment_type } = data;
  console.log(data);
  return (
    <div className={`${styles.SelectPlan} anime-left`}>
      <div className={styles.plans}>
        <div className={styles.plan_box}>
          <input
            type="radio"
            id="arcade"
            name="plan"
            onChange={changeData}
            value={"arcade"}
            checked={plan === "arcade"}
          ></input>
          <label htmlFor="arcade" className={styles.arcade}>
            <div className={styles.plan_infos}>
              <span className={styles.plan}>Arcade</span>
              <span className={styles.price}>$90/yr</span>
              <span className={styles.bonus}>2 months free</span>
            </div>
          </label>
        </div>
        <div className={styles.plan_box}>
          <input
            type="radio"
            id="advanced"
            name="plan"
            onChange={changeData}
            value={"advanced"}
            checked={plan === "advanced"}
          ></input>
          <label htmlFor="advanced" className={styles.advanced}>
            <div className={styles.plan_infos}>
              <span className={styles.plan}>Advanced</span>
              <span className={styles.price}>$90/yr</span>
              <span className={styles.bonus}>2 months free</span>
            </div>
          </label>
        </div>
        <div className={styles.plan_box}>
          <input
            type="radio"
            id="pro"
            name="plan"
            onChange={changeData}
            value={"pro"}
            checked={plan === "pro"}
          ></input>
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
          <input
            type="checkbox"
            id="payment_type"
            name="payment_type"
            value={data.payment_type === "monthly" ? "yearly" : "monthly"}
            onChange={changeData}
            checked={payment_type === "yearly"}
          />
          <span>Monthly</span>
          <span className={styles.switch}></span>
          <span>Yearly</span>
        </label>
      </div>
    </div>
  );
};

export default SelectPlan;
