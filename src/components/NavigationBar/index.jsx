import NavigationLink from "./NavigationLink";
import styles from "./styles.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.NavigationBar}>
      <ul>
        <li><NavigationLink step={1}>YOUR INFO</NavigationLink></li>
        <li><NavigationLink step={2}>SELECT PLAN</NavigationLink></li>
        <li><NavigationLink step={3}>ADD-ONS</NavigationLink></li>
        <li><NavigationLink step={4}>SUMMARY</NavigationLink></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
