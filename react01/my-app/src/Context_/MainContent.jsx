import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "1.5rem",
        background: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
      }}
    >
      <p>테마 변경 가넝</p>
      <button onClick={toggleTheme}>체인지</button>
    </div>
  );
}
export default MainContent;
