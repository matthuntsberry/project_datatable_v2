import React, { useState } from "react";
import Table from "../../components/Tables";
// import { Pagination } from "carbon-components-react";

// import PageHeader from "../../components/PageHeader";
import db from "../../db/db";
import TableToolBar from "../../components/TableToolBar";

const FilterPage = () => {
  let { headers, rows } = db;

  const [totalItems] = useState(20);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [toggled, setToggle] = useState(false);

  return (
    <div className="filter-page">
      <div className="table-component__container">
        <div className="toolbar__container">
          <TableToolBar handleToggle={setToggle} toggle={toggled} />
        </div>
        <div className="table__container">
          <Table
            headers={headers}
            rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
            scrollable
            sticky
            toggle={toggled}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
