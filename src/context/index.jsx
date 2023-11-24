import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    payment_type: "monthly",
    addons: {
      online_service: false,
      larger_storage: false,
      customizable_profile: false,
    },
  });

  function changeData(e) {
    const { name, id } = e.target;

    if (name !== "addons") {
      setData((previous) => {
        return { ...previous, [name]: e.target.value };
      });
    } else {
      setData((previous) => {
        return {
          ...previous,
          [name]: { ...previous[name], [id]: e.target.value },
        };
      });
    }
  }

  return (
    <AppContext.Provider value={{ step, setStep, data, changeData }}>
      {children}
    </AppContext.Provider>
  );
};
