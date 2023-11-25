// Styles
import "./global.css";
import styles from "./styles.module.css";

// Components
import NavigationPainel from "./components/NavigationPainel";
import Form from "./components/Form";

// Context
import { AppContextProvider } from "./context";

const App = () => {
  return (
    <AppContextProvider>
      <div className={styles.App}>
        <NavigationPainel />
        <Form />
      </div>
    </AppContextProvider>
  );
};

export default App;
