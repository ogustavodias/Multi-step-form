import "./global.css";
import styles from "./styles.module.css";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <div className={styles.App}>
        <NavigationBar />
    </div>
  );
};

export default App;
