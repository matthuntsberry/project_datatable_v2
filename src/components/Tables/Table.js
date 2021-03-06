// Third Party Packages
import React, { useState, useLayoutEffect, useRef, useContext } from "react";
import classNames from "classnames";
import { uid } from "react-uid";
import { Pagination } from "carbon-components-react";

// My Imports
import Cell from "./Cell";
import SideFilter from "../../components/SideFilter";
import {
  TableContext,
  PaginationContext,
  SideFilterContext
} from "../../context";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import {
  useElementDimensions,
  getElementDimensions
} from "../../hooks/useElementDimensions";

const Table = ({ rows, headers, scrollable, stickyColumn }) => {
  // Contexts - destructure all needed contexts
  const { searchTerm, selectValue } = useContext(TableContext);
  const { toggle } = useContext(SideFilterContext);
  const {
    totalItems,
    currentPageSize,
    setCurrentPageSize,
    setFirstRowIndex
  } = useContext(PaginationContext);

  // State
  const [updatedElementDimensions, updateElementDimensions] = useState({});
  const [toggleStickyPagination, setToggleStickyPagination] = useState(false);

  // Ref - Used to target which DOM element we want to reference / Keep track
  const componentContainerTableRef = useRef();

  // Hooks
  const { height: windowHeight } = useWindowDimensions();
  const { height: elementHeight } = useElementDimensions(
    componentContainerTableRef,
    updatedElementDimensions
  );

  // This is used specifically for layout measurements.
  // We want to know when the targeted element exceeds the bottom of the
  // viewport and update the state
  useLayoutEffect(
    () => {
      // Call getElements to set componentContainerTableRef.current
      // else ref is undefined
      getElementDimensions(componentContainerTableRef);

      // subtract the height of the pageheader (242)

      if (windowHeight - 242 < elementHeight) {
        setToggleStickyPagination(true);
      } else {
        setToggleStickyPagination(false);
      }
    },
    // only rerender if one these variables updates
    [windowHeight, elementHeight, toggleStickyPagination]
  );

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
        stickyColumn={stickyColumn}
        headerIndex={headerIndex}
        key={uid(header)}
      />
    );
  };

  const theadMarkup = (
    // passing header index to keep track of first column
    // for position: sticky
    <tr role="row" className="table__header">
      {headers.map(({ header }, index) => renderHeadingRow(header, index))}
    </tr>
  );

  const renderRow = row => {
    return (
      <tr role="row" className="table-row" key={uid(row)}>
        <Cell content={row} stickyColumn={stickyColumn} key={uid(row)} />
      </tr>
    );
  };
  const tbodyMarkup = results.map(row => renderRow(row));

  //  Dynamic Styles based on props
  const tableStyles = classNames({
    "table--scroll-x": scrollable,
    "table--sticky-scroll": scrollable && stickyColumn
  });

  const filterStyles = classNames({
    "component__container--side-filter side-filter--from-right": true,
    "side-filter--is-open": toggle
  });

  const paginationStyles = classNames({
    "table--sticky-pagination": toggleStickyPagination
  });

  return (
    <div
      className="component__container--table"
      ref={componentContainerTableRef}
    >
      <div
        className={
          toggle ? "table__container table-filter--is-open" : "table__container"
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

      <div className={filterStyles}>
        <SideFilter rows={rows} />
      </div>
    </div>
  );
};

export default Table;
