import React, { useState } from "react";
import { Button, Search, Pagination } from "carbon-components-react";
import { Renew16, SettingsAdjust16, Settings16 } from "@carbon/icons-react";

import Table from "../../components/Tables";
import TableToolBar from "../../components/TableToolBar";
import PageHeader from "../../components/PageHeader";
import db from "../../db/db";

const FilterPage = () => {
  let { headers, rows } = db;

  const [totalItems] = useState(20);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [toggled, setToggle] = useState(false);

  return (
    <div className="test-page">
      <div className="">
        <div className="">
          <PageHeader title="Test" />
        </div>
      </div>

      <div className="table-component__container">
        <TableToolBar handleToggle={setToggle} toggle={toggled} />
        <div className="">
          <Table
            headers={headers}
            rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
            toggle={toggled}
            scrollable
            sticky
          />
        </div>

        {/* <Pagination
          className="pagination--sticky"
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
          }}
        /> */}
      </div>
    </div>
  );
};

export default FilterPage;
