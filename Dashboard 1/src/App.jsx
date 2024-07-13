import React, { useState } from "react";
import Dashboard from "./component/Dashboard";
import Sidebar from "./component/Sidebar";

const App = () => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar sideBarToggle={sideBarToggle} />
      <Dashboard
        sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
    </div>
  );
};

export default App;
