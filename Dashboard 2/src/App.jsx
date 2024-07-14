import React, { useState, useEffect } from "react";
import NavBar from "./component/NavBar";
import Sidebar from "./component/Sidebar";
import "./App.css";

const App = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex relative ">
      {activeMenu ? (
        <div className="w-72 fixed sidebar  bg-slate-400">
          <Sidebar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            screenSize={screenSize}
            setScreenSize={setScreenSize}
          />
        </div>
      ) : (
        <div className="w-0">
          <Sidebar
            activeMenu={activeMenu}
            screenSize={screenSize}
            setScreenSize={setScreenSize}
            setActiveMenu={setActiveMenu}
          />
        </div>
      )}

      {/* navbar style */}

      <div
        className={`bg-slate-200 min-h-screen w-full ${
          activeMenu ? "md:ml-72" : "flex-2"
        }`}
      >
        <div className="fixed md:static bg-main-bg navbar w-full">
          <NavBar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            screenSize={screenSize}
            setScreenSize={setScreenSize}
          />
        </div>
        <div>
          content area Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quis ut unde provident? Perferendis, consequuntur aliquid porro unde,
          culpa est harum molestiae quod eligendi incidunt inventore quam nobis,
          maxime itaque ad!
        </div>
      </div>
    </div>
  );
};

export default App;
