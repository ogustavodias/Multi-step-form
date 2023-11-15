import NavigationLink from "../NavigationLink";
import styles from "./styles.module.css";

const HeaderSideNav = () => {
  return (
    <nav className={styles.HeaderSideNav}>
      <ul>
        <li>
          <NavigationLink step={1} description={"YOUR INFO"} path={"/"}/>
        </li>
        <li>
          <NavigationLink step={2} description={"SELECT PLAN"} path={"/step-2"}/>
        </li>
        <li>
          <NavigationLink step={3} description={"ADD-ONS"} path={"/step-3"}/>
        </li>
        <li>
          <NavigationLink step={4} description={"SUMMARY"} path={"/step-4"}/>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderSideNav;
