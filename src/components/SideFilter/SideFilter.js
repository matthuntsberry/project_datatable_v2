import React, { useState } from "react";

import { MultiSelect } from "carbon-components-react";

const Filter = ({ toggle, setSearchTerm, setSelectValue, rows }) => {
  const handleChange = (evt, selectValue) => {
    setSelectValue(selectValue);
    setSearchTerm(evt.selectedItems);
  };

  function uniqBy(arr, key) {
    // return only your given key
    const mapped = arr.map(item => {
      return item[key];
    });

    // remove all dupes and spread to an array
    const uniq = [...new Set(mapped)];

    return constructMultiSelectItemsArr(uniq, key);
  }

  function constructMultiSelectItemsArr(arr, key) {
    const newArr = [];

    arr.forEach(item => {
      const obj = {};
      obj[key] = item;

      newArr.push(obj);
    });

    return newArr;
  }

  return (
    <div className="component__container--side-filter">
      <div
        className={toggle ? "side-filter side-filter--is-open" : "side-filter"}
      >
        <h6 className="filter__title">Filter</h6>
        <div className="multiselect__container multiselect--name">
          <MultiSelect
            titleText="Name"
            id="multiselect__name"
            useTitleInItem={false}
            label="Select Name"
            invalid={false}
            invalidText="Invalid Selection"
            // onChange={evt => {
            //   setSelectValue("name");
            //   setSearchTerm(evt.selectedItems);
            // }}
            onChange={evt => handleChange(evt, "name")}
            items={uniqBy(rows, "name")}
            // items={rows}
            itemToString={item => (item ? item.name : "")}
            translateWithId={() => {}}
          />
        </div>
        <div className="multiselect__container multiselect--location">
          <MultiSelect
            titleText="Location"
            id="multiselect__location"
            useTitleInItem={false}
            label="Select Location"
            invalid={false}
            invalidText="Invalid Selection"
            onChange={evt => handleChange(evt, "location")}
            items={uniqBy(rows, "location")}
            itemToString={item => (item ? item.location : "")}
            translateWithId={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
