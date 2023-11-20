import ItemPainel from "./ItemPainel";
import styles from "./styles.module.css";

const NavigationPainel = () => {
  return (
    <nav className={styles.NavigationPainel}>
      <ul>
        <li>
          <ItemPainel step={1}>YOUR INFO</ItemPainel>
        </li>
        <li>
          <ItemPainel step={2} active={true}>SELECT PLAN</ItemPainel>
        </li>
        <li>
          <ItemPainel step={3}>ADD-ONS</ItemPainel>
        </li>
        <li>
          <ItemPainel step={4}>SUMMARY</ItemPainel>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationPainel;
