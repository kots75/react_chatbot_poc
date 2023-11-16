import React, { useState } from "react";
import "./App.css";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`app ${isSidebarVisible ? "sidebar-visible" : ""}`}>
      {/* Sidebar */}
      <div className="sidebar">
        <h1>Sidebar</h1>
      </div>

      <div className="main-content">
        <h1>Welcome to My React App</h1>
        <button className="toggle-button" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter your text here"
        ></textarea>
      </div>
    </div>
  );
}

export default App;
