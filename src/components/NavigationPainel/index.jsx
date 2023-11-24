// Styles
import styles from "./styles.module.css";

// Components
import ItemPainel from "./ItemPainel";

// Context
import { useContext } from "react";
import { AppContext } from "../../context";

const NavigationPainel = () => {
  const { step } = useContext(AppContext);

  return (
    <nav className={styles.NavigationPainel}>
      <ul>
        <li>
          <ItemPainel step={1} active={step === 1}>
            YOUR INFO
          </ItemPainel>
        </li>
        <li>
          <ItemPainel step={2} active={step === 2}>
            SELECT PLAN
          </ItemPainel>
        </li>
        <li>
          <ItemPainel step={3} active={step === 3}>
            ADD-ONS
          </ItemPainel>
        </li>
        <li>
          <ItemPainel step={4} active={step === 4}>
            SUMMARY
          </ItemPainel>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationPainel;
