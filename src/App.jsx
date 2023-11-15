import styles from "./styles.module.css";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderSideNav from "./components/HeaderSideNav";
import Form from "./components/form/index";

function App() {
  return (
    <section className={styles.container}>
      <BrowserRouter>
        <HeaderSideNav />
        <Routes>
          <Route path="/" exact element={<Form step={1} />} />
          <Route path="/step-2" exact element={<Form step={2} />} />
          <Route path="/step-3" exact element={<Form step={3} />} />
          <Route path="/step-4" exact element={<Form step={4} />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
