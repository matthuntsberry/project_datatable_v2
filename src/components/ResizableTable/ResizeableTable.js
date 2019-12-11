import React, { useRef, useLayoutEffect, useState, useContext } from "react";
import classNames from "classnames";
import { uid } from "react-uid";
import { Pagination } from "carbon-components-react";

// my imports
import {
  useElementDimensions,
  getElementDimensions
} from "../../hooks/useElementDimensions";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { PaginationContext } from "../../context";

const ResizeableTable = ({ headers, rows, stickyColumn, scrollable }) => {
  const {
    totalItems,
    currentPageSize,
    setCurrentPageSize,
    setFirstRowIndex
  } = useContext(PaginationContext);

  // State
  const [cols, setCols] = useState(headers);

  // const [rows, setRows] = useState(data);
  // console.log(data);
  // console.log(rows);
  const [dragOver, setDragOver] = useState("");

  const [updatedElementDimensions, updateElementDimensions] = useState({});
  const [toggleStickyPagination, setToggleStickyPagination] = useState(false);
  const [toggleStickyHeader, setToggleStickyHeader] = useState(false);

  // Ref - Used to target which DOM element we want to reference / Keep track
  const componentContainerTableRef = useRef();
  const tableRef = useRef();

  // Hooks
  const { height: windowHeight } = useWindowDimensions();
  const { height: elementHeight } = useElementDimensions(
    componentContainerTableRef,
    [updatedElementDimensions, tableRef]
  );

  // This is used specifically for layout measurements.
  // We want to know when the targeted element exceeds the bottom of the
  // viewport and update the state
  useLayoutEffect(
    () => {
      // Call getElements to set componentContainerTableRef.current
      // else ref is undefined
      getElementDimensions(componentContainerTableRef);

      console.log("elementHeight:", elementHeight);
      console.log("windowHeight:", windowHeight);
      // subtract the height of the pageheader (242)
      if (windowHeight - 242 < elementHeight) {
        tableRef.current.setAttribute(
          "style",
          `height: ${windowHeight - 295}px`
        );
        setToggleStickyPagination(true);
        setToggleStickyHeader(true);
        console.log(toggleStickyHeader);
      } else {
        setToggleStickyPagination(false);
        console.log(toggleStickyHeader);
        tableRef.current.removeAttribute("style");
        setToggleStickyHeader(false);
      }
    },
    // only rerender if one these variables updates
    [windowHeight, elementHeight, toggleStickyPagination, toggleStickyHeader]
  );

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

  const paginationStyles = classNames({
    "table--sticky-pagination": toggleStickyPagination
  });

  return (
    <div
      className="component__container--table"
      ref={componentContainerTableRef}
    >
      <div className="table__container">
        <div className={tableStyles}>
          <table
            className="bx--data-table bx--data-table--no-border"
            ref={tableRef}
          >
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
                    {Object.entries(row)
                      .slice(1)
                      .map((value, idx) => (
                        <>
                          {idx === 0 ? (
                            <th
                              key={uid(value)}
                              role="rowheader"
                              className={
                                stickyColumn && "table__row--sticky-column"
                              }
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
        <Pagination
          className={paginationStyles}
          totalItems={totalItems}
          backwardText="Previous page"
          forwardText="Next page"
          pageSize={currentPageSize}
          pageSizes={[5, 10, 15, 25]}
          itemsPerPageText="Items per page"
          onChange={({ page, pageSize }) => {
            if (pageSize !== currentPageSize) {
              setCurrentPageSize(pageSize);
            }
            setFirstRowIndex(pageSize * (page - 1));

            // used to update the element dimensions,
            // but its real purpose is to cause a rerender
            // on useEffect.  We use this second set of Element
            // dimension instead of setElementDimension because
            // when the original is called in use effect it cause
            // a stackoverflow of rerenders.
            updateElementDimensions({
              width: componentContainerTableRef.current.offsetWidth,
              height: componentContainerTableRef.current.offsetHeight
            });
          }}
        />
      </div>
    </div>
  );
};

export default ResizeableTable;
