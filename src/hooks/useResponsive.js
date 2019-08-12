import { useState, useEffect } from "react";

const windowWidth = () => window.innerWidth;

function useResponsive() {
  const [width, setWidth] = useState(windowWidth());

  useEffect(() => {
    let timeoutId;

    const onResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(windowWidth), 300);
    };

    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return {
    device: width < 500 ? "mobile" : width > 768 ? "desktop" : "tablet"
  };
}

export default useResponsive;
