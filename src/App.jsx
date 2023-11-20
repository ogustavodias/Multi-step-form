// Styles
import "./global.css";
import styles from "./styles.module.css";

// Components
import NavigationPainel from "./components/NavigationPainel";
import UserInfo from "./pages/UserInfo";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Button from "./components/Button/index";
/* import SelectPlan from "./pages/SelectPlan"; */

const App = () => {
  return (
    <div className={styles.App}>
      <NavigationPainel />
      <form className={styles.form}>
        <section className={styles.form_content}>
          <Title>Personal Info</Title>
          <Subtitle>
            Please provide your name, email address, and phone number.
          </Subtitle>
          <UserInfo />
        </section>
        <div className={styles.form_controls}>
          <Button type={"back"} />
          <Button type={"next"} />
        </div>
      </form>
    </div>
  );
};

export default App;
