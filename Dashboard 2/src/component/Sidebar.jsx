import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "./Data/Dummy";

const Sidebar = ({
  activeMenu,
  handleClick,
  screenSize,
  setScreenSize,
  setActiveMenu,
}) => {
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-white  hover:text-black   hover:bg-white m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto  pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center ">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-4 ml-4 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware />
              <span>Zaib Developer</span>
            </Link>

            <button
              type="button"
              onClick={() => setActiveMenu((preActiveMenu) => !preActiveMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>
          {/* render the item in sidebar  means show item*/}
          <div className="mt-10 bg-white-400">
            {links.map((item) => (
              <div key={item.title}>
                <p className=" m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    onClick={handleCloseSideBar}
                    key={link.name}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : " ",
                    })}
                  >
                    {<link.icon />}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
