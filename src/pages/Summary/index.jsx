// Styles
import styles from "./styles.module.css";

// Context
import { useContext } from "react";
import { AppContext } from "../../context/index";

// Custom hook capitalize
import useCapitalize from "../../hooks/useCapitalize";

// Catalog plan and addons
import catalog_plans from "../../catalog/plans.json";
import catalog_addons from "../../catalog/addons.json";

const Summary = () => {
  const { data, onChange } = useContext(AppContext);
  const { plan, payment_type, addons } = data;
  const selected_addons = Object.keys(addons).filter(
    (item) => addons[item] === true
  );

  function calcTotalPrice() {
    let total_plan = 0;
    let total_addons = 0;

    total_plan = catalog_plans[plan][payment_type];
    total_addons = selected_addons.reduce((acc, item) => {
      return acc + catalog_addons[item][payment_type];
    }, 0);

    return total_plan + total_addons;
  }

  return (
    <div className={`${styles.Summary} anime-left`}>
      <div className={styles.summary_info}>
        <div className={styles.plan}>
          <span className={styles.plan_name}>{`${useCapitalize(
            plan
          )} (${useCapitalize(payment_type)})`}</span>
          <button
            type="button"
            className={styles.type_payment_change}
            name="payment_type"
            value={payment_type === "monthly" ? "yearly" : "monthly"}
            onClick={({ target }) => onChange(target.name, target.value)}
          >
            Change
          </button>
          <span className={styles.plan_price}>{`$${
            catalog_plans[plan][payment_type]
          }/${payment_type === "yearly" ? "yr" : "mo"}`}</span>
        </div>
        <div className={styles.services}>
          {selected_addons.map((item) => {
            return (
              <div className={styles.service} key={item}>
                <span className={styles.service_name}>
                  {item === "larger_storage"
                    ? "Larger storage"
                    : item === "online_service"
                    ? "Online service"
                    : "Customizable profile"}
                </span>
                <span className={styles.service_price}>{`+${
                  catalog_addons[item][payment_type]
                }/${payment_type === "yearly" ? "yr" : "mo"}`}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.total_box}>
        <span>{`Total (per ${
          payment_type === "yearly" ? "year" : "month"
        })`}</span>
        <span className={styles.total_price}>{`+${calcTotalPrice()}/${
          payment_type === "yearly" ? "yr" : "mo"
        }`}</span>
      </div>
    </div>
  );
};

export default Summary;
