import React from "react";
import classNames from "classnames";

import { Select } from "carbon-components-react";

const Filter = ({ toggle }) => {
  const filterStyles = classNames({
    "filter container filter__container--is-open": toggle
  });
  return (
    <div className={filterStyles}>
      <h1>Boo!</h1>
    </div>
  );
};

export default Filter;
