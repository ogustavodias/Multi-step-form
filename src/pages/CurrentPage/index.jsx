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
  const { step, setTitle, setSubtitle } = useContext(AppContext);
  let title, subtitle;

  if (step === 1) {
    title = "Personal info";
    subtitle = "Please provide your name, email address, and phone number.";
    setTitle(title);
    setSubtitle(subtitle);
    return <UserInfo />;
  }

  if (step === 2) {
    title = "Select you plan";
    subtitle = "You have the option of monthly of yearly billing";
    setTitle(title);
    setSubtitle(subtitle);
    return <SelectPlan />;
  }

  if (step === 3) {
    title = "Pick add-ons";
    subtitle = "Add-ons help enhance your gaming experience.";
    setTitle(title);
    setSubtitle(subtitle);
    return <AddOns />;
  }

  if (step === 4) {
    title = "Finishing up";
    subtitle = "Double-check everything looks OK before confirming";
    setTitle(title);
    setSubtitle(subtitle);
    return <Summary />;
  }

  if (step === 5) {
    title = "Thank you!";
    subtitle = "";
    setTitle(title);
    setSubtitle(subtitle);
    return <Successful />;
  }
};

export default CurrentPage;
