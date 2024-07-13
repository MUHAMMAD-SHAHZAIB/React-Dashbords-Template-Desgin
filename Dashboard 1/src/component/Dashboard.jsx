import React from "react";
import NavBar from "./NavBar";

const Dashboard = ({ sideBarToggle, setSideBarToggle }) => {
  return (
    <div className={`w-full ${sideBarToggle ? "" : "ml-64"}`}>
      <NavBar
        sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
    </div>
  );
};

export default Dashboard;
