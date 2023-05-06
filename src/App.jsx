import { useState } from "react";
import Country from "./components/Country";
import "./App.css";

function App() {
  return (
    <>
      <Country flag="https://placehold.co/30" country="Turkey" />
      <div className="container"></div>
    </>
  );
}

export default App;
