import React, { useState } from "react";
import Cell from "./Cell";
import classNames from "classnames";
import SideFilter from "../../components/SideFilter";

const Table = ({ rows, headers, scrollable, sticky, toggle }) => {
  const [searchTerm, setSearchTerm] = useState([]);
  const [selectValue, setSelectValue] = useState([]);

  // TODO the correct result aren't being appied because of the
  // function I created to eliminate dupes.  Its only giving the key name/value
  // need to loop all row probably not just return search term

  console.log(searchTerm);
  const getResults = () => {
    const mapped = searchTerm.map(search => search[selectValue]);

    const newArr = [];

    for (let i = 0; i < rows.length; i++) {
      if (mapped.includes(rows[i][selectValue])) newArr.push(rows[i]);
    }
    console.log("mapped", mapped);
    console.log("newArr", newArr);
    return newArr;
  };

  const results = searchTerm.length === 0 ? rows : getResults();

  console.log(results);

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

  const tableStyles = classNames({
    "table--scroll-x": scrollable,
    "table--sticky-scroll": scrollable && sticky
  });

  return (
    <div className="component__container--table">
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
      </div>
      {toggle && (
        <SideFilter
          rows={rows}
          toggle={toggle}
          setSearchTerm={setSearchTerm}
          setSelectValue={setSelectValue}
        />
      )}
    </div>
  );
};

export default Table;
