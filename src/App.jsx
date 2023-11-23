// Styles
import "./global.css";
import styles from "./styles.module.css";

// Components
import NavigationPainel from "./components/NavigationPainel";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Button from "./components/Button/index";

// Context
import { AppContextProvider } from "./context";

// Current page
import CurrentPage from "./pages/CurrentPage";

const App = () => {
  return (
    <AppContextProvider>
      <div className={styles.App}>
        <NavigationPainel />
        <form className={styles.form}>
          <section className={styles.form_content}>
            <Title>Personal Info</Title>
            <Subtitle>
              Please provide your name, email address, and phone number.
            </Subtitle>
            <CurrentPage />
          </section>
          <div className={styles.form_controls}>
            <Button type={"back"} />
            <Button type={"next"} />
          </div>
        </form>
      </div>
    </AppContextProvider>
  );
};

export default App;
