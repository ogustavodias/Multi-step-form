// Styles
import styles from "./styles.module.css";

// Context
import { useContext } from "react";
import { AppContext } from "../../context";

const AddOns = () => {
  const { data, changeData } = useContext(AppContext);
  const { online_service, larger_storage, customizable_profile } = data.addons;
  console.log(online_service, larger_storage, customizable_profile);
  return (
    <div className={`${styles.AddOns} anime-left`}>
      <div className={styles.service_box}>
        <input
          type="checkbox"
          name="addons"
          id="online_service"
          value={!online_service}
          onChange={changeData}
          checked={online_service}
        />
        <label htmlFor="online_service">
          <div className={styles.service_info}>
            <span className={styles.service_name}>Online service</span>
            <span className={styles.service_resume}>
              Access to multiplayer games
            </span>
          </div>
        </label>
        <span className={styles.service_price}>+$1/mo</span>
      </div>
      <div className={styles.service_box}>
        <input
          type="checkbox"
          name="addons"
          id="larger_storage"
          value={!larger_storage}
          onChange={changeData}
          checked={larger_storage}
        />
        <label htmlFor="larger_storage">
          <div className={styles.service_info}>
            <span className={styles.service_name}>Larger storage</span>
            <span className={styles.service_resume}>
              Extra 1TB of cloud save
            </span>
          </div>
        </label>
        <span className={styles.service_price}>+$2/mo</span>
      </div>
      <div className={styles.service_box}>
        <input
          type="checkbox"
          name="addons"
          id="customizable_profile"
          value={!customizable_profile}
          onChange={changeData}
          checked={customizable_profile}
        />
        <label htmlFor="customizable_profile">
          <div className={styles.service_info}>
            <span className={styles.service_name}>Customizable profile</span>
            <span className={styles.service_resume}>
              Custom theme on your profile
            </span>
          </div>
        </label>
        <span className={styles.service_price}>+$1/mo</span>
      </div>
    </div>
  );
};

export default AddOns;
