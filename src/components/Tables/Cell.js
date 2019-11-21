import React from "react";
import classNames from "classnames";
import { uid } from "react-uid";

const Cell = ({ content, header, stickyColumn, headerIndex }) => {
  const headerStyles = classNames({
    "table__header--sticky-column": stickyColumn
  });

  const cellMarkup = header ? (
    <>
      {/* If first column in data table give it these classes */}
      {headerIndex === 0 ? (
        <th role="columnheader" scope="col" className={headerStyles}>
          <span role="heading" className="bx--table-header-label">
            {content}
          </span>
        </th>
      ) : (
        <th role="columnheader" scope="col" className={headerStyles}>
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
            <th
              key={uid(value)}
              role="rowheader"
              className={stickyColumn && "table__row--sticky-column"}
              scope="row"
            >
              {value}
            </th>
          ) : (
            <td role="cell" className="table-cell">
              {value}
            </td>
          )}
        </>
      ))
  );

  return cellMarkup;
};

export default Cell;
