import React, { useState, useContext } from "react";
// import { Pagination } from "carbon-components-react";
import { SideFilterContext } from "../../context/SideFilterContext";
import { PaginationContext } from "../../context/PaginationContext";
import Table from "../../components/Tables";
import TableToolBar from "../../components/TableToolBar";
import PageHeader from "../../components/PageHeader";
import db from "../../db/db";

const DetailsPage = () => {
  let { headers, rows } = db;
  const { toggle, setToggle } = useContext(SideFilterContext);
  const {
    totalItems,
    firstRowIndex,
    setFirstRowIndex,
    currentPageSize,
    setCurrentPageSize
  } = useContext(PaginationContext);

  const [pills, setPills] = useState([]);

  return (
    <div className="details-page">
      <div className="">
        <PageHeader title="Details" />
      </div>

      <div className="table-component__container">
        <TableToolBar />
        <Table
          headers={headers}
          rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
          toggle={toggle}
          setToggle={setToggle}
          pills={pills}
          setPills={setPills}
          totalItems={totalItems}
          currentPageSize={currentPageSize}
          setCurrentPageSize={setCurrentPageSize}
          setFirstRowIndex={setFirstRowIndex}
          scrollable
          sticky
        />
      </div>
    </div>
  );
};

export default DetailsPage;
