// Estilos
import "./global.css";
import styles from "./styles.module.css";

// Componentes
import NavigationPainel from "./components/NavigationPainel";
import UserInfo from "./pages/UserInfo";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

const App = () => {
  return (
    <div className={styles.App}>
      <NavigationPainel />
      <form className={styles.form}>
        <section className={styles.form_content}>
          <Title>Personal Info</Title>
          <Subtitle>Please provide your name, email address, and phone number.</Subtitle>
          <UserInfo />
        </section>
      </form>
    </div>
  );
};

export default App;
