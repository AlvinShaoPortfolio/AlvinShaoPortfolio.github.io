import { useEffect } from "react";

const useArrows = (setCount) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowRight") {
        setCount((prev) => prev + 1);
      } else if (event.key === "ArrowLeft") {
        setCount((prev) => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [setCount]); // Depend on setCount
};

export default useArrows;
