import React, { useContext } from "react";
import { Button, Search } from "carbon-components-react";
import {
  Renew16,
  SettingsAdjust16,
  Settings16,
  Close16
} from "@carbon/icons-react";
import { SideFilterContext } from "../../context/SideFilterContext";

const TableToolBar = ({
  // toggle,
  // handleToggle,
  pills,
  setPills,
  input,
  setInput
}) => {
  const { toggle, setToggle } = useContext(SideFilterContext);

  const handleKeyDown = evt => {
    // add a new pill
    if (evt.key === "Enter" && input.length > 0) {
      setPills([...pills, input]);
      setInput("");
      return;
    }

    if (input.length === 0 && evt.key === "Backspace") {
      // if user hits backspace while in search it will delete pill
      setPills([...pills].slice(0, pills.length - 1));
      return;
    }
  };

  const handleRemovePill = pillName => {
    setPills([...pills].filter(pill => pill !== pillName));
  };

  return (
    <div className="component__container--table-toolbar">
      <div className="component__container--toolbar-search">
        <div className="pills">
          {pills.map((pill, i) => (
            <span
              className="pill bx--list-box__selection bx--tag--filter bx--list-box__selection--multi"
              key={i}
            >
              {pill}
              <button
                className="pill__button"
                onClick={() => handleRemovePill(pill)}
              >
                <Close16 />
              </button>
            </span>
          ))}
        </div>
        <Search
          type="text"
          className="search__component"
          value={input}
          onChange={evt => setInput(evt.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <Button
          className="bx--btn bx--btn--ghost"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
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
  );
};

export default TableToolBar;
