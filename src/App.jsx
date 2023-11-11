import React, { useState } from 'react';
import './App.css'; 

// Main App component
function App() {
  // State to manage the visibility of the sidebar
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`app ${isSidebarVisible ? 'sidebar-visible' : ''}`}>
      {/* Sidebar */}
      <div className="sidebar">
        <button className="toggle-button" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
      </div>

      {/* Main content */}
      <div className="main-content">
        <h1>Welcome to My React App</h1>
        <textarea rows="4" cols="50" placeholder="Enter your text here"></textarea>
      </div>
    </div>
  );
}

export default App;
