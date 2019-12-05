import { useState, useLayoutEffect } from "react";

function getElementDimensions(element) {
  if (element.current) {
    return {
      width: element.current.offsetWidth,
      height: element.current.offsetHeight
    };
  }
}

function useElementDimensions(elementRef, listeners) {
  const [elementDimensions, setElementDimensions] = useState({});
  console.log(listeners);

  useLayoutEffect(() => {
    setElementDimensions(getElementDimensions(elementRef));
  }, listeners);

  return elementDimensions;
}

export { useElementDimensions, getElementDimensions };
