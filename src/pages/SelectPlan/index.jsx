// Styles
import { useContext } from "react";
import styles from "./styles.module.css";

// Context
import { AppContext } from "../../context/index";

// Catalog plan
import catalog_plans from "../../catalog/plans.json";

const SelectPlan = () => {
  const { data, onChange } = useContext(AppContext);
  const { plan, payment_type } = data;

  return (
    <div className={`${styles.SelectPlan} anime-left`}>
      <div className={styles.plans}>
        <div className={styles.plan_box}>
          <input
            type="radio"
            id="arcade"
            name="plan"
            value={"arcade"}
            checked={plan === "arcade"}
            onChange={({ target }) => onChange(target.name, target.value)}
          ></input>
          <label htmlFor="arcade" className={styles.arcade}>
            <div className={styles.plan_infos}>
              <span className={styles.plan}>Arcade</span>
              <span className={styles.price}>{`$${catalog_plans.arcade[payment_type]}/${
                payment_type === "yearly" ? "yr" : "mo"
              }`}</span>
              {payment_type === "yearly" && (
                <span className={styles.bonus}>2 months free</span>
              )}
            </div>
          </label>
        </div>
        <div className={styles.plan_box}>
          <input
            type="radio"
            id="advanced"
            name="plan"
            value={"advanced"}
            checked={plan === "advanced"}
            onChange={({ target }) => onChange(target.name, target.value)}
          ></input>
          <label htmlFor="advanced" className={styles.advanced}>
            <div className={styles.plan_infos}>
              <span className={styles.plan}>Advanced</span>
              <span className={styles.price}>{`$${
                catalog_plans.advanced[payment_type]
              }/${payment_type === "yearly" ? "yr" : "mo"}`}</span>
              {payment_type === "yearly" && (
                <span className={styles.bonus}>2 months free</span>
              )}
            </div>
          </label>
        </div>
        <div className={styles.plan_box}>
          <input
            type="radio"
            id="pro"
            name="plan"
            value={"pro"}
            checked={plan === "pro"}
            onChange={({ target }) => onChange(target.name, target.value)}
          ></input>
          <label htmlFor="pro" className={styles.pro}>
            <div className={styles.plan_infos}>
              <span className={styles.plan}>Pro</span>
              <span className={styles.price}>{`$${catalog_plans.pro[payment_type]}/${
                payment_type === "yearly" ? "yr" : "mo"
              }`}</span>
              {payment_type === "yearly" && (
                <span className={styles.bonus}>2 months free</span>
              )}
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
            value={payment_type === "monthly" ? "yearly" : "monthly"}
            checked={payment_type === "yearly"}
            onChange={({ target }) => onChange(target.name, target.value)}
          />
          <span className={`${payment_type === "monthly" && styles.monthly}`}>
            Monthly
          </span>
          <span className={styles.switch}></span>
          <span className={`${payment_type === "yearly" && styles.yearly}`}>
            Yearly
          </span>
        </label>
      </div>
    </div>
  );
};

export default SelectPlan;
