import React, { createContext, useState } from "react";

export const TableContext = createContext();

function TableContextProvider(props) {
  const [searchTerm, setSearchTerm] = useState([]);
  const [selectValue, setSelectValue] = useState([]);

  return (
    <TableContext.Provider
      value={{ searchTerm, setSearchTerm, selectValue, setSelectValue }}
    >
      {props.children}
    </TableContext.Provider>
  );
}

export default TableContextProvider;
