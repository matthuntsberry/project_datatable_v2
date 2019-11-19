import React, { createContext, useState } from "react";

export const TableToolBarContext = createContext();

function TableToolBarContextProvider(props) {
  const [pills, setPills] = useState([]);
  const [input, setInput] = useState("");

  // const handleToggleClick = evt => {
  //   setToggle(!toggle);
  //   console.log(toggle);
  // };

  return (
    <TableToolBarContext.Provider value={{ pills, setPills, input, setInput }}>
      {props.children}
    </TableToolBarContext.Provider>
  );
}

export default TableToolBarContextProvider;
