import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import shahzaib from "../assets/Passport Size Pic.jpg";

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "
    />

    {icon}
  </button>
);

const Navbar = ({
  activeMenu,
  setActiveMenu,
  screenSize,
  setScreenSize,
  currentColor,
}) => {
  //---This useEffect use for to find the size of screen---
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //----this useEffect used for to condition apply for different screen size
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      {/*----Menu-icon-button */}
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        {/*----Cart-icon-button */}
        <NavButton
          title="Cart"
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        {/*----Chat-icon-button */}
        <NavButton
          title="Chart"
          dotColor="#03c9d7"
          color={currentColor}
          icon={<BsChatLeft />}
        />
        {/*----Notification-icon-button */}
        <NavButton
          title="Notifications"
          dotColor="#03c9d7"
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        {/*----Profile-pic-icon----*/}
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
          <div className="rounded-full w-9 h-9 ">
            <img
              src={shahzaib}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <p>
            {screenSize <= 350 ? null : (
              <>
                <span className="text-gray-400 text-14">Hi,</span>
                <span className="text-gray-400 font-bold ml-1 text-14">
                  Shahzaib
                </span>
              </>
            )}
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
