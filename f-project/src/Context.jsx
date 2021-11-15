import React, { useState } from "react";

const Context = React.createContext();
const ContextProvider = (props) => {
  const [globalState, setGlobalState] = useState({});

  const saveUserData = (userData) => {
    setGlobalState({ ...globalState, userData });
  }; //recommanded skis - obiect
  return (
    <Context.Provider value={{ data: globalState, methods: { saveUserData } }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
