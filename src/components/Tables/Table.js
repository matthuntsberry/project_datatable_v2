import React from "react";
import Cell from "./Cell";
import classNames from "classnames";
import SideFilter from "../../components/SideFilter";

const Table = ({ rows, headers, scrollable, sticky, toggle }) => {
  const renderHeadingRow = (header, key) => {
    return <Cell content={header} header={true} sticky={sticky} key={key} />;
  };

  const theadMarkup = (
    <tr role="row" className="table__header-row">
      {headers.map(({ header }, i) => renderHeadingRow(header, i))}
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
    "table--scroll-x": scrollable
    // "scrollable--sticky": scrollable && sticky
  });

  return (
    <div className="table__wrapper">
      <div className={tableStyles}>
        <div className="data-table">
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
      {toggle && <SideFilter toggle={toggle} />}
    </div>
  );
};

export default Table;
