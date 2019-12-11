import React, { useRef, useEffect } from "react";

const ResizeableTable = () => {
  const tableRef = useRef();

  function resizeableGrid(table) {
    if (table.current) {
      let row = table.current.getElementsByTagName("tr")[0];
      let cols = row ? row.children : undefined;
      if (!cols) return;
      for (let i = 0; i < cols.length; i++) {
        let div = createDiv(table.current.offsetHeight);
        cols[i].appendChild(div);
        cols[i].style.position = "relative";
        setListeners(div);
      }
    }
  }

  function createDiv(height) {
    let div = document.createElement("div");
    div.classList.add("column-resize");
    div.style.height = height + "px";
    return div;
  }

  function setListeners(div) {
    let pageX, currentCol, nextCol, currentColWidth, nextColWidth;

    div.addEventListener("mousedown", e => {
      currentCol = e.target.parentElement;
      nextCol = currentCol.nexElementSibling;
      pageX = e.pageX;

      let padding = paddingDiff(currentCol);

      currentColWidth = currentCol.offsetWidth - padding;
      if (nextCol) {
        nextColWidth = nextCol.offsetWidth - padding;
      }
    });

    document.addEventListener("mousemove", e => {
      if (currentCol) {
        let diffX = e.pageX - pageX;

        if (nextCol) {
          nextCol.style.width = nextColWidth - diffX + "px";
        }
        currentCol.style.width = currentColWidth + diffX + "px";
      }
    });

    document.addEventListener("mouseup", e => {
      currentCol = undefined;
      nextCol = undefined;
      pageX = undefined;
      nextColWidth = undefined;
      currentColWidth = undefined;
    });
  }

  function paddingDiff(col) {
    if (getStyleVal(col, "box-sizing") == "border-box") {
      return 0;
    }

    let padLeft = getStyleVal(col, "padding-left");
    let padRight = getStyleVal(col, "padding-right");
    return parseInt(padLeft) + parseInt(padRight);
  }

  function getStyleVal(elm, css) {
    return window.getComputedStyle(elm, null).getPropertyValue(css);
  }

  useEffect(() => {
    resizeableGrid(tableRef);
  }, [tableRef]);

  return (
    <table className="bx--data-table" ref={tableRef}>
      <thead>
        <tr>
          <th>
            <span className="bx--table-header-label">Name</span>
          </th>
          <th>
            <span className="bx--table-header-label">Protocol</span>
          </th>
          <th>
            <span className="bx--table-header-label">Port</span>
          </th>
          <th>
            <span className="bx--table-header-label">Rule</span>
          </th>
          <th>
            <span className="bx--table-header-label">Attached Groups</span>
          </th>
          <th>
            <span className="bx--table-header-label">Status</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Load Balancer 1</td>
          <td>HTTP</td>
          <td>80</td>
          <td>Round Robin</td>
          <td>Maureen&#x27;s VM Groups Testing a really long text here</td>
          <td>Active</td>
        </tr>

        <tr>
          <td>Load Balancer 5</td>
          <td>HTTP</td>
          <td>80</td>
          <td>Round Robin</td>
          <td>Maureen&#x27;s VM Groups</td>
          <td>Active</td>
        </tr>

        <tr>
          <td>Load Balancer 5</td>
          <td>HTTP</td>
          <td>80</td>
          <td>Round Robin</td>
          <td>Maureen&#x27;s VM Groups</td>
          <td>Active</td>
        </tr>

        <tr>
          <td>Load Balancer 5</td>
          <td>80</td>
          <td>Round Robin</td>
          <td>Maureen&#x27;s VM Groups</td>
          <td>Active</td>
        </tr>

        <tr>
          <td>Load Balancer 5</td>
          <td>HTTP</td>
          <td>80</td>
          <td>Round Robin</td>
          <td>Maureen&#x27;s VM Groups</td>
          <td>Active</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResizeableTable;
