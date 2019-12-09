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

    const idx = cols.indexOf(id);

    e.dataTransfer.setData("colIdx", idx);
  };

  const handleDragOver = e => e.preventDefault();
  const handleDragEnter = e => {
    const { id } = e.target;
    setDragOver(id);
  };

  const handleOnDrop = e => {
    const { id } = e.target;
    const droppedColIdx = cols.indexOf(id);
    const draggedColIdx = e.dataTransfer.getData("colIdx");
    const tempCols = [...cols];

    tempCols[draggedColIdx] = cols[droppedColIdx];
    tempCols[droppedColIdx] = cols[draggedColIdx];
    setCols(tempCols);
    setDragOver("");
  };

  console.log();
  return (
    <div className="App">
      <table className="bx--data-table">
        <thead>
          <tr>
            {cols.map(col => (
              <th
                id={col}
                key={col}
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleOnDrop}
                onDragEnter={handleDragEnter}
                dragOver={col === dragOver}
              >
                {console.log(rows)}
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr>
              {Object.entries(row).map(([k, v], idx) => (
                <td key={v} dragOver={cols[idx]}>
                  {row[cols[idx]]}
                </td>
              ))}
            </tr>
            // <tr key={row.id}>
            //   {Object.entries(row).map(([k, v], idx) => (

            //     <td key={v} dragOver={cols[idx] === dragOver}>
            //       {row[cols[idx]]}
            //     </td>
            //   ))}
            // </tr>
          ))}
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
