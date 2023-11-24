import styles from "./styles.module.css";

const AddOns = () => {
  return (
    <div className={`${styles.AddOns} anime-left`}>
      <div className={styles.service_box}>
        <input type="checkbox" name="online-service" id="online-service" />
        <label htmlFor="online-service">
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
        <input type="checkbox" name="large-storage" id="large-storage" />
        <label htmlFor="large-storage">
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
        <input type="checkbox" name="custom-profile" id="custom-profile" />
        <label htmlFor="custom-profile">
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
