import React, { createContext, useState } from "react";

export const PaginationContext = createContext();

function PaginationContextProvider(props) {
  const [totalItems] = useState(100);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  return (
    <PaginationContext.Provider
      value={{
        totalItems,
        firstRowIndex,
        setFirstRowIndex,
        currentPageSize,
        setCurrentPageSize
      }}
    >
      {props.children}
    </PaginationContext.Provider>
  );
}

export default PaginationContextProvider;
