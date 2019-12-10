import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { uid } from "react-uid";
import db from "../../db/db";

const ResizeableTable = ({ headers, rows: data }) => {
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

  return (
    <div className="App">
      <table className="bx--data-table">
        <thead>
          <tr>
            {cols.map(({ key, header }) => (
              <th
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
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            console.log(row);
            return (
              <tr key={i} className="table-row">
                {Object.entries(row).map((value, idx) => (
                  <td key={uid(value)} dragOver={cols[idx]}>
                    {console.log(cols[idx])}
                    {row[cols[idx].key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// const Cell = styled.td`
//   font-size: 14px;
//   text-align: left;
//   text-transform: capitalize;
//   vertical-align: center;
//   padding: 20px;
//   color: black;
//   border-bottom: 2px solid #eef0f5;
//   text-transform: lowercase;
//   border-left: ${({ dragOver }) => dragOver && "5px solid red"};
// `;

// const StyledTh = styled.th`
//   white-space: nowrap;
//   color: #716f88;
//   letter-spacing: 1.5px;
//   font-weight: 600;
//   font-size: 14px;
//   text-align: left;
//   text-transform: capitalize;
//   vertical-align: middle;
//   padding: 20px;
//   border-bottom: 2px solid #eef0f5;
//   text-transform: uppercase;
//   border-left: ${({ dragOver }) => dragOver && "5px solid red"};
// `;

export default ResizeableTable;
