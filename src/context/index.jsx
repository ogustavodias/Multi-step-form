import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("Personal info");
  const [subtitle, setSubtitle] = useState(
    "Please provide your name, email address, and phone number"
  );

  return (
    <AppContext.Provider
      value={{ step, setStep, title, setTitle, subtitle, setSubtitle }}
    >
      {children}
    </AppContext.Provider>
  );
};
