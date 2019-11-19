import React, { createContext, useState } from "react";

export const SideFilterContext = createContext();

function SideFilterContextProvider(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <SideFilterContext.Provider value={{ toggle, setToggle }}>
      {props.children}
    </SideFilterContext.Provider>
  );
}

export default SideFilterContextProvider;
