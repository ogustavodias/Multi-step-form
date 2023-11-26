// Styles
import styles from "./styles.module.css";

// Components
import Error from "../../components/Error";

const UserInfo = ({ name, email, phone }) => {
  return (
    <div className={`${styles.UserInfo} anime-left`}>
      <div className={styles.input_box}>
        <label htmlFor="name">Name</label>
        {name.error && <Error error={name.error} />}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
          className={`${name.error && styles.error}`}
          value={name.value}
          onChange={({ target }) => name.setValue(target.value)}
        />
      </div>
      <div className={styles.input_box}>
        <label htmlFor="email">Email Adress</label>
        {email.error && <Error error={email.error} />}
        <input
          type="text"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          className={`${email.error && styles.error}`}
          value={email.value}
          onChange={({ target }) => email.setValue(target.value)}
        />
      </div>
      <div className={styles.input_box}>
        <label htmlFor="phone">Phone Number</label>
        {phone.error && <Error error={phone.error} />}
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          className={`${phone.error && styles.error}`}
          value={phone.value}
          onChange={({ target }) => phone.setValue(target.value)}
        />
      </div>
    </div>
  );
};

export default UserInfo;
