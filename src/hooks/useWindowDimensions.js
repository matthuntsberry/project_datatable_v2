import { useState, useLayoutEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    // clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export { useWindowDimensions };
