// Components
import Title from "../../components/Title";

//Styles
import styles from "./styles.module.css";

const Successful = () => {
  return (
    <div className={styles.Successful}>
      <span className={styles.icon}></span>
      <Title>Thank you!</Title>
      <p>
        Thanks for confirming your subscription! We have hope you have fun using
        our platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Successful;
