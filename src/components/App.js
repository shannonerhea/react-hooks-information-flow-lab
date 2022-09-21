import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header"
import itemData from "../data/items";


function App() {
  const [item, setItem] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
