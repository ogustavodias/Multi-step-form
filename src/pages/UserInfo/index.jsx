import styles from "./styles.module.css";

const UserInfo = () => {
  return (
    <div className={styles.UserInfo}>
      <div className={styles.input_box}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
        />
      </div>
      <div className={styles.input_box}>
        <label htmlFor="email">Email Adress</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div className={styles.input_box}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </div>
  );
};

export default UserInfo;
