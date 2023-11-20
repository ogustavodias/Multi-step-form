import "./global.css";
import styles from "./styles.module.css";
import NavigationPainel from "./components/NavigationPainel";

const App = () => {
  return (
    <div className={styles.App}>
      <NavigationPainel />
    </div>
  );
};

export default App;
