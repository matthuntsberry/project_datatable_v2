import React, { useContext } from "react";
import { PaginationContext } from "../../context";
import Table from "../../components/Tables";
import TableToolBar from "../../components/TableToolBar";
import PageHeader from "../../components/PageHeader";
import db from "../../db/db";
import ResizeableTable from "../../components/ResizableTable";

const DetailsPage = () => {
  const { firstRowIndex, currentPageSize } = useContext(PaginationContext);
  let { headers, rows } = db;

  return (
    <div className="details-page">
      <PageHeader title="Details" />
      <ResizeableTable />
      {/* <TableToolBar />
      <Table
        headers={headers}
        rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
        scrollable
        stickyColumn
      /> */}
    </div>
  );
};

export default DetailsPage;
