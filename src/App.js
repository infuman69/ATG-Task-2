import React from "react";
import Scrolling from "./Components/Scrolling";
import Pages from "./Components/Pages";
import Svg from "./Components/Svg";
import "./App.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function App() {
  const matches = useMediaQuery("(max-width:555px)");
  return (
    <div className="App">
      {matches ? (
        <Pages />
      ) : (
        <>
          <Svg />
          <Scrolling />
        </>
      )}
    </div>
  );
}
