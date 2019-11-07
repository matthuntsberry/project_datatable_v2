import React, { useState } from "react";
import Table from "../../components/Tables";
import { Button, Search, Pagination } from "carbon-components-react";
import { Renew16, SettingsAdjust16, Settings16 } from "@carbon/icons-react";

import PageHeader from "../../components/PageHeader";
import db from "../../db/db";

const FilterPage = () => {
  let { headers, rows } = db;

  const [totalItems] = useState(20);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__r1">
        <div className="bx--col-lg-16">
          <PageHeader title="Test" />
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="search__container">
          <Search light={true} className="search__component" labelText="" />
        </div>
        <div className="button__container--actions">
          <Button className="bx--btn bx--btn--ghost">
            <SettingsAdjust16 />
          </Button>
          <Button className="bx--btn bx--btn--ghost button--renew">
            <Renew16 />
          </Button>
          <Button className="bx--btn bx--btn--ghost">
            <Settings16 />
          </Button>
        </div>
      </div>

      <div className="bx--row landing-page__r3">
        <div className="bx--col-lg-16">
          <Table
            headers={headers}
            rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
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
