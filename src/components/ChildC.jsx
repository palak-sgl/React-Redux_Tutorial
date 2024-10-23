import React, { useContext } from "react";
import { ThemeContext } from "../App";

function ChildC() {
  const { theme, setTheme } = useContext(ThemeContext);
  function handleClick() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div>
      {theme}
      <button onClick={handleClick}>Change Theme</button>
    </div>
  );
}

export default ChildC;
