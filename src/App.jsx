import "./global.css";
import styles from "./styles.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import StepOne from "./pages/StepOne/index";

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<StepOne />} />
          <Route exact path="/2" element={<StepOne />} />
          <Route exact path="/3" element={<StepOne />} />
          <Route exact path="/4" element={<StepOne />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
