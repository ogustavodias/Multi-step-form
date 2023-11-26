import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const initial = {
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    payment_type: "monthly",
    addons: {
      online_service: false,
      larger_storage: false,
      customizable_profile: false,
    },
  };
  const [data, setData] = useState(initial);

  function onChange(property, value, id) {
    if (property === "addons") 
      setData(previous => {return {...previous, [property]: {...previous[property], [id]: value === "true"}}});
    else
      setData(previous => {return {...previous, [property]: value}});
  }

  return (
    <AppContext.Provider value={{ step, setStep, data, onChange }}>
      {children}
    </AppContext.Provider>
  );
};
