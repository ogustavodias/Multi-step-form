// Styles
import "./global.css";
import styles from "./styles.module.css";

// Components
import NavigationPainel from "./components/NavigationPainel";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import FormControls from "./components/FormControls";

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
            <Title />
            <Subtitle />
            <CurrentPage />
          </section>
          <FormControls />
        </form>
      </div>
    </AppContextProvider>
  );
};

export default App;
