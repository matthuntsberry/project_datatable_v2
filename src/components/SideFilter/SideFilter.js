import React, { useState } from "react";

import { Button, MultiSelect } from "carbon-components-react";

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
    <>
      <h6 className="filter__title">Filter</h6>

      <div className="multiselect__container multiselect--location">
        <MultiSelect
          titleText="Location"
          id="multiselect__location"
          class="multiselect"
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
      <div className="multiselect__container multiselect--publicIp">
        <MultiSelect
          titleText="Public IP"
          id="multiselect__publicIp"
          useTitleInItem={false}
          label="Select Public IP"
          invalid={false}
          invalidText="Invalid Selection"
          onChange={evt => handleChange(evt, "publicIp")}
          items={uniqBy(rows, "publicIp")}
          itemToString={item => (item ? item.publicIp : "")}
          translateWithId={() => {}}
        />
      </div>
      <div className="multiselect__container multiselect--privateIp">
        <MultiSelect
          titleText="Private IP"
          id="multiselect__privateIp"
          useTitleInItem={false}
          label="Select Private IP"
          invalid={false}
          invalidText="Invalid Selection"
          onChange={evt => handleChange(evt, "privateIp")}
          items={uniqBy(rows, "privateIp")}
          itemToString={item => (item ? item.privateIp : "")}
          translateWithId={() => {}}
        />
      </div>
      <div className="multiselect__container multiselect--type">
        <MultiSelect
          titleText="Device Type"
          id="multiselect__type"
          useTitleInItem={false}
          label="Select Device Type"
          invalid={false}
          invalidText="Invalid Selection"
          onChange={evt => handleChange(evt, "type")}
          items={uniqBy(rows, "type")}
          itemToString={item => (item ? item.type : "")}
          translateWithId={() => {}}
        />
      </div>
      <div className="button__container--filter-actions">
        <Button
          className="button--filter-action"
          disabled={false}
          iconDescription="Button icon"
          kind="secondary"
          onClick={function noRefCheck() {}}
          onFocus={function noRefCheck() {}}
          renderIcon={undefined}
          size="default"
          tabIndex={0}
          type="button"
        >
          Clear
        </Button>
        <Button
          className="button--filter-action"
          disabled={false}
          iconDescription="Button icon"
          kind="primary"
          onClick={function noRefCheck() {}}
          onFocus={function noRefCheck() {}}
          renderIcon={undefined}
          size="default"
          tabIndex={0}
          type="button"
        >
          Apply
        </Button>
      </div>
    </>
  );
};

export default Filter;
