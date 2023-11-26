// Styles
import styles from "./styles.module.css";

// Context
import { useContext } from "react";
import { AppContext } from "../../context/index";

// Catalog plan
import catalog_addons from "../../catalog/addons.json";

const AddOns = () => {
  const { data, onChange } = useContext(AppContext);
  const { addons, payment_type } = data;

  return (
    <div className={`${styles.AddOns} anime-left`}>
      <div className={styles.service_box}>
        <input
          type="checkbox"
          name="addons"
          id="online_service"
          value={!addons.online_service}
          checked={addons.online_service}
          onChange={({ target }) =>
            onChange(target.name, target.value, target.id)
          }
        />
        <label htmlFor="online_service">
          <div className={styles.service_info}>
            <span className={styles.service_name}>Online service</span>
            <span className={styles.service_resume}>
              Access to multiplayer games
            </span>
          </div>
        </label>
        <span className={styles.service_price}>{`+${
          catalog_addons.online_service[payment_type]
        }/${payment_type === "yearly" ? "yr" : "mo"}`}</span>
      </div>
      <div className={styles.service_box}>
        <input
          type="checkbox"
          name="addons"
          id="larger_storage"
          value={!addons.larger_storage}
          checked={addons.larger_storage}
          onChange={({ target }) =>
            onChange(target.name, target.value, target.id)
          }
        />
        <label htmlFor="larger_storage">
          <div className={styles.service_info}>
            <span className={styles.service_name}>Larger storage</span>
            <span className={styles.service_resume}>
              Extra 1TB of cloud save
            </span>
          </div>
        </label>
        <span className={styles.service_price}>{`+${
          catalog_addons.larger_storage[payment_type]
        }/${payment_type === "yearly" ? "yr" : "mo"}`}</span>
      </div>
      <div className={styles.service_box}>
        <input
          type="checkbox"
          name="addons"
          id="customizable_profile"
          value={!addons.customizable_profile}
          checked={addons.customizable_profile}
          onChange={({ target }) =>
            onChange(target.name, target.value, target.id)
          }
        />
        <label htmlFor="customizable_profile">
          <div className={styles.service_info}>
            <span className={styles.service_name}>Customizable profile</span>
            <span className={styles.service_resume}>
              Custom theme on your profile
            </span>
          </div>
        </label>
        <span className={styles.service_price}>{`+${
          catalog_addons.customizable_profile[payment_type]
        }/${payment_type === "yearly" ? "yr" : "mo"}`}</span>
      </div>
    </div>
  );
};

export default AddOns;
