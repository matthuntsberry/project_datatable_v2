import React, { useRef, useEffect, useState } from "react";
import { uid } from "react-uid";
import classNames from "classnames";

const ResizeableTable = ({ headers, rows: data, stickyColumn, scrollable }) => {
  const [cols, setCols] = useState(headers);
  const [rows, setRows] = useState(data);
  const [dragOver, setDragOver] = useState("");

  const handleDragStart = e => {
    const { id } = e.target;

    const idx = cols.findIndex(i => i.key === id);

    e.dataTransfer.setData("colIdx", idx);
  };

  const handleDragOver = e => e.preventDefault();
  const handleDragEnter = e => {
    const { id } = e.target;
    setDragOver(id);
  };

  const handleOnDrop = e => {
    const { id } = e.target;

    const droppedColIdx = cols.findIndex(i => i.key === id);

    const draggedColIdx = e.dataTransfer.getData("colIdx");
    // console.log(e.dataTransfer.getData("colIdx"));
    const tempCols = [...cols];

    tempCols[draggedColIdx] = cols[droppedColIdx];
    tempCols[droppedColIdx] = cols[draggedColIdx];
    setCols(tempCols);
    setDragOver("");
  };

  //  Dynamic Styles based on props
  const tableStyles = classNames({
    "table--scroll-x": scrollable,
    "table--sticky-scroll": scrollable && stickyColumn
  });

  const headerStyles = classNames({
    "table__header--sticky-column": stickyColumn
  });

  return (
    <div className={tableStyles}>
      <table className="bx--data-table">
        <thead>
          <tr>
            {cols.map(({ key, header }, index) => {
              return index === 0 ? (
                <th
                  role="columnheader"
                  scope="col"
                  className={headerStyles}
                  id={key}
                  key={uid(key)}
                >
                  <span
                    role="heading"
                    id={key}
                    key={uid(key)}
                    draggable
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDrop={handleOnDrop}
                    onDragEnter={handleDragEnter}
                    dragOver={key === dragOver}
                    className="bx--table-header-label"
                  >
                    {header}
                  </span>
                </th>
              ) : (
                <th
                  role="columnheader"
                  scope="col"
                  className={headerStyles}
                  id={key}
                  key={uid(key)}
                  draggable
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleOnDrop}
                  onDragEnter={handleDragEnter}
                  dragOver={key === dragOver}
                >
                  <span
                    role="heading"
                    id={key}
                    key={uid(key)}
                    draggable
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDrop={handleOnDrop}
                    onDragEnter={handleDragEnter}
                    dragOver={key === dragOver}
                    className="bx--table-header-label"
                  >
                    {header}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            return (
              <tr key={i} className="table-row">
                {Object.entries(row).map((value, idx) => (
                  <>
                    {idx === 0 ? (
                      <th
                        key={uid(value)}
                        role="rowheader"
                        className={stickyColumn && "table__row--sticky-column"}
                        dragOver={cols[idx]}
                      >
                        {row[cols[idx].key]}
                      </th>
                    ) : (
                      <td
                        key={uid(value)}
                        role="cell"
                        className="table-cell"
                        dragOver={cols[idx]}
                      >
                        {row[cols[idx].key]}
                      </td>
                    )}
                  </>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResizeableTable;
