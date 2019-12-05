import { useState, useLayoutEffect } from "react";

function getElementDimensions(element) {
  if (element.current) {
    return {
      width: element.current.offsetWidth,
      height: element.current.offsetHeight
    };
  }
}

function useElementDimensions(elementRef, listener) {
  const [elementDimensions, setElementDimensions] = useState({});

  useLayoutEffect(() => {
    setElementDimensions(getElementDimensions(elementRef));
  }, [listener]);

  return elementDimensions;
}

export { useElementDimensions, getElementDimensions };
