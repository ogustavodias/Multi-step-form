import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  return (
    <AppContext.Provider value={{ step, setStep }}>
      {children}
    </AppContext.Provider>
  );
};
