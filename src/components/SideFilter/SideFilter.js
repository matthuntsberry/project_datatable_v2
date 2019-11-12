import React, { useState } from "react";

import { MultiSelect } from "carbon-components-react";

const Filter = ({ toggle, setSearchTerm, rows }) => {
  const handleChange = evt => {
    console.log(evt);
    setSearchTerm(evt.selectedItems);
  };

  return (
    <div className="component__container--side-filter">
      <div
        className={toggle ? "side-filter side-filter--is-open" : "side-filter"}
      >
        <h6 className="filter__title">Filter</h6>
        <MultiSelect
          id="multiselect__name"
          useTitleInItem={false}
          label="MultiSelect Label"
          invalid={false}
          invalidText="Invalid Selection"
          onChange={handleChange}
          items={rows}
          itemToString={item => (item ? item.name : "")}
          // initialSelectedItems={[
          //   { id: "item-1", text: "Item 1" },
          //   { id: "item-2", text: "Item 2" }
          // ]}
          translateWithId={() => {}}
        />
      </div>
    </div>
  );
};

export default Filter;
