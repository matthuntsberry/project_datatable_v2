import React, { createContext, useState } from "react";

export const SideFilterContext = createContext();

function SideFilterContextProvider(props) {
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <SideFilterContext.Provider
      value={{ toggle, setToggle, handleToggleClick }}
    >
      {props.children}
    </SideFilterContext.Provider>
  );
}

export default SideFilterContextProvider;
