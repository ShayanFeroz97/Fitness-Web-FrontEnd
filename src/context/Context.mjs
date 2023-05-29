import { createContext, useState } from "react";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [authUser, setAuthUser] = useState({});

  return (
    <GlobalContext.Provider
      value={{ authUser, setAuthUser, allWorkouts, setAllWorkouts }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
