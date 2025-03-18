import { useEffect } from "react";

const useArrows = (setCount) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (event.button === 0) {
        setCount((prev) => prev + 1);
      } 
      else if (event.button === 2) {
        setCount((prev) => prev - 1);
      }
    };

    const handleContextMenu = (event) => {
      event.preventDefault(); 
    };

    window.addEventListener("mouseup", handleClick);
    window.addEventListener("contextmenu", handleContextMenu);
    
    return () => {
      window.removeEventListener("mouseup", handleClick);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [setCount]); 
};

export default useArrows;
