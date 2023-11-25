// Styles
import styles from "./styles.module.css";

// Context
import { useContext } from "react";
import { AppContext } from "../../context";

const UserInfo = () => {
  const { data, changeData } = useContext(AppContext);
  console.log(data);
  return (
    <div className={`${styles.UserInfo} anime-left`}>
      <div className={styles.input_box}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
          value={data.name}
          onChange={changeData}
        />
      </div>
      <div className={styles.input_box}>
        <label htmlFor="email">Email Adress</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          value={data.email}
          onChange={changeData}
        />
      </div>
      <div className={styles.input_box}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          value={data.phone}
          onChange={changeData}
        />
      </div>
    </div>
  );
};

export default UserInfo;
