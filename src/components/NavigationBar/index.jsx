import NavigationLink from "./NavigationLink";
import styles from "./styles.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.NavigationBar}>
      <ul>
        <li><NavigationLink step={1} path={"/"}>YOUR INFO</NavigationLink></li>
        <li><NavigationLink step={2} path={"/2"}>SELECT PLAN</NavigationLink></li>
        <li><NavigationLink step={3} path={"/3"}>ADD-ONS</NavigationLink></li>
        <li><NavigationLink step={4} path={"/4"}>SUMMARY</NavigationLink></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
