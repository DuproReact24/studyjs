import React, { useContext } from "react";
import ThemeContext from "../hooks/ThemeContext";

export default function Toolbar() {
  const theme = useContext(ThemeContext);

  return <p>Theme hiện tại: {theme}</p>;
}