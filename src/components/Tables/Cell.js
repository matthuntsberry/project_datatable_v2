import React from "react";

const Cell = ({ content, header, sticky }) => {
  // const Cell = ({ content, header, key }) => {
  const cellMarkup = header ? (
    <th role="columnheader" className={sticky && "sticky"} scope="col">
      <span role="heading" className="bx--table-header-label">
        {content}
      </span>
    </th>
  ) : (
    Object.values(content)
      .slice(1)
      .map((value, i) => (
        <>
          {i === 0 ? (
            <th
              role="rowheader"
              className={sticky && "sticky cell"}
              scope="row"
            >
              {value}
            </th>
          ) : (
            <td role="cell" className={sticky ? "sticky cell" : "cell"} key={i}>
              {value}
            </td>
          )}
        </>
      ))
  );

  return cellMarkup;
};

export default Cell;
