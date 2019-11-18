import React, { useState, useContext } from "react";
// import { Pagination } from "carbon-components-react";
import { SideFilterContext } from "../../context/SideFilterContext";
import Table from "../../components/Tables";
import TableToolBar from "../../components/TableToolBar";
import PageHeader from "../../components/PageHeader";
import db from "../../db/db";

const DetailsPage = () => {
  let { headers, rows } = db;
  const { toggle, setToggle } = useContext(SideFilterContext);

  // TODO Move all hooks to a different file/useContext
  // pagination hooks
  const [totalItems] = useState(20);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  // side filter hooks
  // const [toggle, setToggle] = useState(false);
  // pills hooks
  const [pills, setPills] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="details-page">
      <div className="">
        <PageHeader title="Details" />
      </div>

      <div className="table-component__container">
        <TableToolBar
          // toggle={toggle}
          handleToggle={setToggle}
          pills={pills}
          setPills={setPills}
          input={input}
          setInput={setInput}
        />
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

        {/* <Pagination
          // className="pagination--sticky"
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

export default DetailsPage;
