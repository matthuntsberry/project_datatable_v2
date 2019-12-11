import React from "react";
import { OverflowMenu, OverflowMenuItem } from "carbon-components-react";

const ActionButton = () => {
  return (
    <OverflowMenu>
      <OverflowMenuItem itemText="Option 1" primaryFocus />
      <OverflowMenuItem itemText="Option 2" />
    </OverflowMenu>
  );
};

export default ActionButton;
