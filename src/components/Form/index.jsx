//Styles
import styles from "./styles.module.css";

//Components
import CurrentPage from "../../pages/CurrentPage";
import FormControls from "../FormControls";
import Subtitle from "../Subtitle";
import Title from "../Title";

const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <section className={styles.form_content}>
        <Title />
        <Subtitle />
        <CurrentPage />
      </section>
      <FormControls />
    </form>
  );
};

export default Form;
