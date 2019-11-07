import React from "react";

const Cell = ({ content, header, sticky, headerIndex }) => {
  const cellMarkup = header ? (
    <>
      {/* If first column in data table give it these classes */}
      {headerIndex === 0 ? (
        <th role="columnheader" className={sticky && "sticky"} scope="col">
          <span role="heading" className="bx--table-header-label">
            {content}
          </span>
        </th>
      ) : (
        <th role="columnheader" className="cell" scope="col">
          <span role="heading" className="bx--table-header-label">
            {content}
          </span>
        </th>
      )}
    </>
  ) : (
    Object.values(content)
      .slice(1)
      .map((value, i) => (
        <>
          {/* If first column in data table give it these classes */}
          {i === 0 ? (
            <th role="rowheader" className={sticky && "sticky"} scope="row">
              {value}
            </th>
          ) : (
            <td role="cell" className="cell" key={i}>
              {value}
            </td>
          )}
        </>
      ))
  );

  return cellMarkup;
};

export default Cell;
