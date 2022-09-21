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
// had a typo on 17 for 20 mins lol Header wasnt capped!
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <ShoppingList items={item} />
    </div>
  );
}

export default App;
