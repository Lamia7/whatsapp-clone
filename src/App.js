import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    // BEM naming convention (component naming)
    <div className="app">
      {/* <h1>Let's build a whatsapp clone</h1> */}

      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
