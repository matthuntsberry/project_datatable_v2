import React from "react";
import Cell from "./Cell";
import classNames from "classnames";
import SideFilter from "../../components/SideFilter";

const Table = ({ rows, headers, scrollable, sticky, toggle }) => {
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
    <tr role="row" className="table__header-row">
      {headers.map(({ header }, index) => renderHeadingRow(header, index))}
    </tr>
  );

  const renderRow = (row, key) => {
    return (
      <tr role="row" className="table__row" key={key}>
        <Cell content={row} sticky={sticky} />
      </tr>
    );
  };

  const tbodyMarkup = rows.map((row, i) => renderRow(row, i));

  const tableStyles = classNames({
    "table--scroll-x": scrollable,
    "table--sticky": scrollable && sticky
  });

  return (
    <div className="table__wrapper">
      <div className={tableStyles}>
        <table
          role="table"
          summary="A list of resources listed on your ibm cloud account"
          className="bx--data-table bx--data-table--no-border data-table"
        >
          <thead>{theadMarkup}</thead>
          <tbody>{tbodyMarkup}</tbody>
        </table>
      </div>
      {toggle && <SideFilter toggle={toggle} />}
    </div>
  );
};

export default Table;
