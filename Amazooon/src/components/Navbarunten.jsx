import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const nav = [
    { name: "All Products", to: "/allcategories" },
    { name: "Todays Deals", to: "/deals" },
    { name: "Bücher", to: "/bücher" },
    { name: "Spiele", to: "/spiele" },
    { name: "Baby", to: "/baby" },
    { name: "Lebensmittel", to: "/lebensmittel" },
    { name: "Kameras", to: "/cameras" },
    { name: "Fashion", to: "/fashion" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-700 p-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          {nav.map((navb) => (
            <Link
              key={navb.name}
              to={navb.to}
              className="text-gray-300 ml-4 hover:text-white hidden md:block cursor-pointer"
            >
              {navb.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
