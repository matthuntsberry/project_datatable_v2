import React, { useContext } from "react";
import { PaginationContext } from "../../context";
import Table from "../../components/Tables";
import TableToolBar from "../../components/TableToolBar";
import PageHeader from "../../components/PageHeader";
import db from "../../db/db";

const DetailsPage = () => {
  const { firstRowIndex, currentPageSize } = useContext(PaginationContext);
  let { headers, rows } = db;

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
          scrollable
          sticky
        />
      </div>
    </div>
  );
};

export default DetailsPage;
