import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useContext
} from "react";
import classNames from "classnames";
import { uid } from "react-uid";
import { Pagination } from "carbon-components-react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Cell from "./Cell";
import SideFilter from "../../components/SideFilter";
import {
  TableContext,
  PaginationContext,
  SideFilterContext
} from "../../context";

const Table = ({ rows, headers, scrollable, stickyColumn }) => {
  // destructure all needed contexts
  const { searchTerm, selectValue } = useContext(TableContext);
  const { toggle } = useContext(SideFilterContext);
  const {
    totalItems,
    currentPageSize,
    setCurrentPageSize,
    setFirstRowIndex
  } = useContext(PaginationContext);

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  console.log("windowWidth:", windowWidth);
  console.log("windowHeight:", windowHeight);

  // const [windowDimensions, setWindowHeight] = useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth
  // });
  const [toggleStickyHeader, setToggleStickyHeader] = useState(false);
  const [toggleStickyPagination, setToggleStickyPagination] = useState(false);
  const [elementDimensions, setElementDimensions] = useState({
    width: null,
    height: null
  });
  const [updatedElementDimensions, updateElementDimensions] = useState({
    width: elementDimensions.width,
    height: elementDimensions.height
  });

  // Used to target which DOM element we want to reference
  const targetRef = useRef();

  // helper function to get the targeted elems
  // initial dimension
  const fetchDimensions = () => {
    if (targetRef.current) {
      setElementDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  };

  // Checks if reference element scrolls above
  // top of viewport
  const isInViewport = elem => {
    const bounding = elem.getBoundingClientRect();
    return bounding.top <= 48;
  };

  // first sets / measures the targeted elements
  // dimensions
  useEffect(
    () => {
      fetchDimensions();
    },
    // runs only on intial render
    // rerenders only when element in array
    // is updated
    [updatedElementDimensions]
  );

  // This is used specifically for layout measurements.
  // We want to know when the targeted element exceeds the bottom of the
  // viewport and update the state
  useLayoutEffect(
    () => {
      // TODO Sticky footer doesn't update when window is resized on
      // todo first render

      // subtract the height of the pageheader (242)
      if (windowHeight - 242 < elementDimensions.height) {
        console.log("true");
        setToggleStickyPagination(true);
      } else {
        setToggleStickyPagination(false);
      }

      // TODO Make sticky header stick to top of veiwport when
      // they come into contact
      const applyStickyHeader = () =>
        isInViewport(targetRef.current)
          ? setToggleStickyHeader(true)
          : setToggleStickyHeader(false);

      window.addEventListener("scroll", applyStickyHeader);
    },
    // only rerender if one these variables updates
    [
      windowHeight,
      elementDimensions.height,
      elementDimensions.top,
      elementDimensions.bottom,
      toggleStickyPagination,
      toggleStickyHeader
    ]
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

  //  Dynamic Styles
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
    <div className="component__container--table" ref={targetRef}>
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
            // but its real purpose is to case a rerender
            // on useEffect.  We use this second set of Element
            // dimension instead of setElementDimension because
            // when the original is called in use effect it cause
            // a stackoverflow of rerenders.
            updateElementDimensions({
              width: targetRef.current.offsetWidth,
              height: targetRef.current.offsetHeight
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
