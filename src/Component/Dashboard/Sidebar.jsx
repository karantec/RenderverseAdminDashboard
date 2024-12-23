import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { TbAnalyzeFilled } from "react-icons/tb";
import { FcSelfServiceKiosk } from "react-icons/fc";
import { GiTeamUpgrade } from "react-icons/gi";
import { RiFeedbackLine } from "react-icons/ri";
import { GoGoal } from "react-icons/go";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeIcon, setActiveIcon] = useState(""); // Tracks the currently selected icon

  const menuItems = [
    { id: "analyze", name: "Analysis", icon: <TbAnalyzeFilled className="text-2xl" />, link: "/dashboard/home" },
    { id: "services", name: "Services", icon: <FcSelfServiceKiosk className="text-2xl" />, link: "/dashboard/profile" },
    { id: "team", name: "Teams", icon: <GiTeamUpgrade className="text-2xl" />, link: "/dashboard/settings" },
    { id: "feedback", name: "Feedback", icon: <RiFeedbackLine className="text-2xl" />, link: "/dashboard/help" },
    { id: "goals", name: "Career", icon: <GoGoal className="text-2xl" />, link: "/dashboard/goals" },
  ];

  return (
    <div
      className={`fixed lg:static top-0 left-0 h-full bg-gray-900 text-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 transition-transform duration-300 w-64 lg:w-16 flex flex-col items-center`}
    >
      {/* Logo */}
      <div className="py-6 flex justify-center">
        <img
          src="https://renderverse.in/wp-content/uploads/2024/05/cropped-RENDERVERSE.png"
          alt="Logo"
          className="w-10 h-10"
        />
      </div>

      {/* Close Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden absolute top-6 right-6 p-2 text-white"
      >
        <FaTimes className="w-6 h-6" />
      </button>

      {/* Navigation */}
      <nav className="flex-grow flex flex-col items-center space-y-8 mt-6">
        {menuItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <Link
              to={item.link}
              onClick={() => setActiveIcon(item.name)}
              className={`block text-center p-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out ${
                activeIcon === item.name ? "bg-blue-600" : ""
              }`}
            >
              {item.icon}
            </Link>
            {/* Show name of the selected icon */}
            {activeIcon === item.name && (
              <span className="text-sm mt-2 text-gray-300">{item.name}</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
