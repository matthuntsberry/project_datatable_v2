import React, { useState, useEffect, useRef, useContext } from "react";
import WindowSizeListener from "react-window-size-listener";
import Measure from "react-measure";

import { Pagination } from "carbon-components-react";
import Cell from "./Cell";
import classNames from "classnames";
import SideFilter from "../../components/SideFilter";
import {
  TableContext,
  PaginationContext,
  SideFilterContext
} from "../../context";

const Table = ({ rows, headers, scrollable, sticky }) => {
  // destructure all needed contexts
  const { searchTerm, selectValue } = useContext(TableContext);
  const { toggle } = useContext(SideFilterContext);
  const {
    totalItems,
    currentPageSize,
    setCurrentPageSize,
    setFirstRowIndex
  } = useContext(PaginationContext);

  const [windowHeight, setWindowHeight] = useState(null);
  const [bounding, setBounding] = useState(0);

  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      ref.current = false;
    } else {
      const b = ref.current.getBoundingClientRect();
      setBounding(b);
    }
  }, []);

  const getResults = () => {
    const mapped = searchTerm.map(search => search[selectValue]);

    const newArr = [];

    rows.forEach(row => {
      if (mapped.includes(row[selectValue])) {
        newArr.push(row);
      }
    });

    return newArr;
  };

  const results = searchTerm.length === 0 ? rows : getResults();

  const renderHeadingRow = (header, headerIndex) => {
    return (
      <Cell
        content={header}
        header={true}
        sticky={sticky}
        headerIndex={headerIndex}
      />
    );
  };

  const theadMarkup = (
    // passing header index to keep track of first column
    // for position: sticky
    <tr role="row" className="table-col__header">
      {headers.map(({ header }, index) => renderHeadingRow(header, index))}
    </tr>
  );

  const renderRow = (row, i) => {
    return (
      <tr role="row" className="table-row" key={i}>
        <Cell content={row} sticky={sticky} />
      </tr>
    );
  };

  const tbodyMarkup = results.map((row, i) => renderRow(row, i));

  //  Dynamic Styles
  const tableStyles = classNames({
    "table--scroll-x": scrollable,
    "table--sticky-scroll": scrollable && sticky
  });

  const filterStyles = classNames({
    "component__container--side-filter side-filter--from-right": true,
    "side-filter--is-open": toggle
  });

  return (
    <WindowSizeListener
      onResize={windowSize => {
        setWindowHeight(windowSize.windowHeight);
      }}
    >
      <div className="component__container--table" ref={ref}>
        <div
          className={
            toggle
              ? "table__container table-filter--is-open"
              : "table__container"
          }
        >
          <div className={tableStyles}>
            <table
              role="table"
              summary="A list of resources listed on your ibm cloud account"
              className="bx--data-table bx--data-table--no-border"
            >
              <thead>{theadMarkup}</thead>
              <tbody>{tbodyMarkup}</tbody>
            </table>
          </div>
          <Pagination
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
              if (bounding.bottom > windowHeight) {
                console.log("Yup");
              } else {
                console.log("Nope");
              }
              console.log(bounding.bottom);
              console.log(windowHeight);
              setFirstRowIndex(pageSize * (page - 1));
            }}
          />
        </div>

        <div className={filterStyles}>
          <SideFilter rows={rows} />
        </div>
      </div>
    </WindowSizeListener>
  );
};

export default Table;
