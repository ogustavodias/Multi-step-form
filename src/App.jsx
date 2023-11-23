// Styles
import "./global.css";
import styles from "./styles.module.css";

// Components
import NavigationPainel from "./components/NavigationPainel";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Button from "./components/Button/index";

// Pages
/* import SelectPlan from "./pages/SelectPlan"; */
/* import UserInfo from "./pages/UserInfo"; */
/* import AddOns from "./pages/AddOns"; */
/* import Summary from "./pages/Summary"; */
import Successful from "./pages/Successful";

const App = () => {
  return (
    <div className={styles.App}>
      <NavigationPainel />
{/*       <form className={styles.form}>
        <section className={styles.form_content}>
          <Title>Personal Info</Title>
          <Subtitle>
            Please provide your name, email address, and phone number.
          </Subtitle>
          
        </section>
        <div className={styles.form_controls}>
          <Button type={"back"} />
          <Button type={"next"} />
        </div>
      </form> */}
      <Successful />
    </div>
  );
};

export default App;
