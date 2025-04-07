import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
  const [appData, setAppData] = useState([]);

  return (
    <StateContext.Provider value={[appData, setAppData]}>
      {props.children}
    </StateContext.Provider>
  );
};
