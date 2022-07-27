import "./App.css";
import Form from "./components/Form";
import Wallpaper from "./components/Wallpaper";
import React from "react";

function App() {
  return (
    <div className="app">
      <Wallpaper />
      <Form />
    </div>
  );
}

export default App;
