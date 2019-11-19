import React, { useState, useContext } from "react";
import { Close16 } from "@carbon/icons-react";
import { Button, MultiSelect } from "carbon-components-react";
import { SideFilterContext } from "../../context/SideFilterContext";
import { TableToolBarContext } from "../../context/TableToolBarContext";

const Filter = ({ setSearchTerm, setSelectValue, rows }) => {
  const { handleToggleClick } = useContext(SideFilterContext);
  const { setPills } = useContext(TableToolBarContext);

  const handleChange = (evt, selectValue) => {
    setSelectValue(selectValue);
    setSearchTerm(evt.selectedItems);
    setPills(evt.selectedItems.map(item => item[selectValue]));
  };

  const handleSelectClick = evt => {
    console.log("clicked");
    evt.preventDefault();
    setSelectValue("");
    setSearchTerm([]);
  };

  // const handleToggleClick = evt => {
  //   setToggle(!toggle);
  //   console.log(toggle);
  // };

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
    <div className="side-filter__container">
      <div className="side-filter__heading-container">
        <h6 className="filter__title">Filter</h6>
        <button
          className="side-filter__button--close"
          onClick={handleToggleClick}
        >
          <Close16 />
        </button>
      </div>

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
      <div className="multiselect__container multiselect--tag">
        <MultiSelect
          titleText="Tags"
          id="multiselect__tags"
          useTitleInItem={false}
          label="Select Tag"
          invalid={false}
          invalidText="Invalid Selection"
          onChange={evt => handleChange(evt, "tag")}
          items={uniqBy(rows, "tag")}
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
          onClick={evt => handleSelectClick(evt)}
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
          onClick={handleSelectClick}
          onFocus={function noRefCheck() {}}
          renderIcon={undefined}
          size="default"
          tabIndex={0}
          type="button"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Filter;
