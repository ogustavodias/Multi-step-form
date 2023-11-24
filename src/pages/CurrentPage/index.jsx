// Pages
import UserInfo from "../UserInfo/index";
import SelectPlan from "../SelectPlan/index";
import AddOns from "../AddOns/index";
import Summary from "../Summary/index";
import Successful from "../Successful/index";

// Context
import { AppContext } from "../../context/index";
import { useContext } from "react";

const CurrentPage = () => {
  const { step } = useContext(AppContext);

  if (step === 1) return <UserInfo />;

  if (step === 2) return <SelectPlan />;

  if (step === 3) return <AddOns />;

  if (step === 4) return <Summary />;

  if (step === 5) return <Successful />;
};

export default CurrentPage;
